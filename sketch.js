//Document originally written to recreate prototype of milestone game coded by group, but then expanded upon prototype.
//Musa Jallow
//7.19.2020
//Revisited 7.31.2020
let playGame = false;
let title = true;
//Defining variables to store images.
let playerFire;
let enemyWater;
let collectibleWood;
let bgImage;
let loseScreen;
let winScreen;
let titleScreen;
let titleMusic;
function preload(){//opens function preload().
    //Loading images.
playerFire = loadImage("images/playerFire.gif");
collectibleWood = loadImage("images/collectibleWood.gif");
enemyWater = loadImage("images/enemyWater.gif");
bgImage = loadImage("images/Space.png");
loseScreen = loadImage("images/lose_game.jpg");
winScreen = loadImage("images/win_game.png");
titleScreen = loadImage("images/title_screen2.jpg");

}//closes function preload().
//Defining variables I'll use for the position of player rectangle.
let myXpos = 100;
let myYpos = 100;
//Defining variables for the position of wood collectible.
let woodXpos = 400;
let woodYpos = 100;
let woodDirectionX = 3;
let woodDirectionY = 4;
//Defining variables for the position of enemy water.
let enemyXpos = 250;
let enemyYpos = 250;
let enemyDirectionX = 6;
let enemyDirectionY = 8;
//Variable that wil store score and will check if the player has won or lost.
let score = 0;
let win = false;
let lose = false;
function setup(){//opens function setup.
    createCanvas(500, 500);
    //Code from Gerald Lynch. I credit him. One thing, I configured the button so that it only restarts the game when the player has either won or lost.
let button = createButton("Start Over");
    button.mouseClicked(startOver);

    
}//closes function setup.
function mouseClicked(){
    //Defining this within boundaries of rectangle, if player clicks rectangle. Game starts.
    if(title == true && mouseX >= 150 && mouseX <= 350 && mouseY >= 250 && mouseY <= 450 ){//opens title if-statement.
        playGame = true;

    }//closes title if-statement.
    }//closes function mouseClicked().
        //Gerald Lynch made the following startOver function() with the button. Credits to him.
    function startOver(){//opens function startOver().
       if(win == true || lose == true){//opens win or lose if-statement.
       
        score  = 0;
        win = false;
        lose = false;
         myXpos = 100;
     myYpos = 100;
    //Defining variables for the position of wood collectible.
     woodXpos = 400;
     woodYpos = 100;
     woodDirectionX = 3;
     woodDirectionY = 4;
    //Defining variables for the position of enemy water.
    enemyXpos = 250;
     enemyYpos = 250;
      enemyDirectionX = 5;
     enemyDirectionY = 6;
     title = true;

       }//closes win or lose if-statement.

    }//closes function startOver()
    

function draw(){//opens function draw.
    //Displays title screen.
    if(title == true){//opens title if-statement.
    background(titleScreen);
    fill(0,255,0);
    text("Don't Get Hit", 150, 50);
    fill(255);
    rect(150,250,200,200);
    textSize(40);
    fill(0,255,0);
    text("Play game", 150, 350);
    }//closes title if-statement.
    
    //Game runs if this is true.
    if(playGame == true){//opens playGame if-statement.
   background(bgImage);
    fill(255);
    let playerSize = 50;
    image(playerFire, myXpos, myYpos, playerSize, playerSize);
    fill(0, 0, 255);
    //wood size.
let woodSize = 50;

    image(collectibleWood, woodXpos, woodYpos, woodSize, woodSize);
    woodXpos += woodDirectionX;
    woodYpos += woodDirectionY;
    //making wood move diagonally and setting boundaries so the wood doesn't go offmap, but instead bounces on the edges.
    if(woodXpos > 475){//opens wood x boundary 1 if-statement.
        woodDirectionX *= -1;
    }//closes wood x boundary 1 if-statement.
    if(woodXpos < 25){//opens wood x boundary 2 if-statement.
       woodDirectionX *= -1;
      }//closes wood x boundary 2 if-statement.
    if(woodYpos > 475){//opens wood y boundary 1 if-statement.
        woodDirectionY *= -1;
    }//closes wood y boundary 1 if-statement.
    if(woodYpos < 25){//opens wood y boundary 2 if-statement.
        woodDirectionY *= -1;
    }//closes wood y boundary 2 if-statement.
     image(enemyWater, enemyXpos, enemyYpos, 200, 200);
    enemyXpos += enemyDirectionX;
    enemyYpos += enemyDirectionY;
    //making enemy move diagonally and setting boundaries so it doesn't go offmap, but instead bounces on the edges.
    if(enemyXpos > 475){//opens wood x boundary 1 if-statement.
        enemyDirectionX *= -1;
    }//closes wood x boundary 1 if-statement.
    if(enemyXpos < 25){//opens wood x boundary 2 if-statement.
       enemyDirectionX *= -1;
      }//closes wood x boundary 2 if-statement.
    if(enemyYpos > 475){//opens wood y boundary 1 if-statement.
        enemyDirectionY *= -1;
    }//closes wood y boundary 1 if-statement.
    if(enemyYpos < 25){//opens wood y boundary 2 if-statement.
        enemyDirectionY *= -1;
    }//closes wood y boundary 2 if-statement.
     //If user presses left, square moves left. If user presses right, square goes right.
     if(keyIsDown(LEFT_ARROW)  && myXpos > 25 ){//opens left arrow key movement if-statement.
        myXpos -=3;
        }//closes left arrow key movement if-statement.
        if(keyIsDown(RIGHT_ARROW) && myXpos < 475){//opens right arrow key if-statement.
       myXpos +=3;
        }//closes right arrow key if-statement.
       if(keyIsDown(UP_ARROW) && myYpos > 25 ){//opens up arrow key if-statement.
        myYpos -=3;
        //User presses up, square goes up. User presses down, square goes down.
    }//closes up arrow key if-statement.
    if(keyIsDown(DOWN_ARROW) && myYpos < 475){//opens down arrow key if-statement.
        myYpos +=3;
    }//closes down arrow key if-statement.
    //My sides, used for collision.
 let myLeft = myXpos - 25;
 let myRight = myXpos + 25;
 let myTop = myYpos - 25;
let myBottom = myYpos + 25;
//wood sides, used for collision.
let woodLeft = woodXpos - 25;
let woodRight = woodXpos + 25;
let woodTop = woodYpos - 25;
let woodBottom = woodYpos + 25;
//enemy sides, used for collision.

    if(myLeft > woodRight || woodLeft > myRight ||  myTop > woodBottom || woodTop > myBottom){//opens collision if-statement.

    }//closes collision if-statement.
    else {//If the above if-statement isn't true on any accounts, wood and player collided. That will be displayed in flashing letters and the enemy will randomly teleport to a different location on the canvas.
    woodSize = 0;
    score +=1;
 
    //Whenever wood and player collide, wood disappears, score increases and player wins.
}//closes else statement.
let enemyLeft = enemyXpos - 25;
let enemyRight = enemyXpos + 25;
let enemyTop = enemyYpos - 25;
let enemyBottom = enemyYpos + 25;
//Only needs to satisfy one condition.
//If my left is further along the x-axis than enemy's right(to their left) or enemy's left is further along than my right(to their right) or the top of the square is higher than the bottom(under them), or the bottom of enemy's square is lower than my top(above them) no collision. I'm just moving around.
if(myLeft > enemyRight || enemyLeft > myRight ||  myTop > enemyBottom || enemyTop > myBottom){//opens collision if-statement.

}//closes collision if-statement.
else{// enemy and player have collided, and player loses. 
playerSize = 0;
lose = true;
}//closes collision else statement.
}//closes playGame if-statement.
//M.V.P
//If player collects the piece of wood, they've won.
if(score == 1){//opens score if-statement.
    win = true;
}//closes score if-statement.
//If they win, win screen pops up.
if(win == true){//opens win if-statement.
background(winScreen);
textSize (40);
text("You've won. Good job.", 50, 100);
playGame = false;
//Making sure the game doesn't continue after it's over.


//Not M.V.P.
//Image Gavin chooses for win screen goes here.
}//closes win if-statement.
    if(lose == true){//opens lose if-statement.
  
    background(loseScreen);
    textSize(40);
    fill(255,0,0);
    text("Sorry, you've lost.", 50, 100);
    playGame = false;
    //Making sure the game doesn't continue after it's over.
   
    }//closes lose if-statement.



}//closes function draw.