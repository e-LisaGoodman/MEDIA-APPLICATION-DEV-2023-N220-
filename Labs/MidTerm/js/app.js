//Create a game of space invaders using P5.js

//Create play space
function setup() {
    createCanvas(1000,800);
}

//Define Player ship 
let player = {
    x: 475,
    y: 780,
    width: 50,
    height: 20,
    color: "#00ff00"
}
//Define Alien objects
let alien = {
    width: 50,
    height: 20,
    margin: 5,
    color: "ff9933"
}

//Build an arrray for Player shots
let playerShoot = [];

//Build an array for Alien cluster
let alienX = [0,0,0,0,0,0,0,0,0,0]
let alienY = [0,0,0,0,0,0,0,0,0,0]

//Draw Aliens at the top and the Player ship on the page bottom 
function draw(){
    background(0);
    //Player Ship
    fill(player.color)
    rect(mouseX, player.y, player.width, player.height)
   //Player can shoot bullets every .5 seconds when a key is depressed
   if(keyIsPressed){
    //Iterate Bullet's y coordinate
    playerShoot.push(0);
    }
    //Loop drawing the player shots
    for(var i = 0; i < playerShoot.length; i++) {
        playerShoot[i]=playerShoot[i]+5;
        //Draws bullet
        fill('#0099CC');   
        circle((mouseX+25),(780-playerShoot[i]),10); 
        }  
    //Aliens Array
    //Iterate insertion of x coordinate based on mouse position
    alienX.push((frameCount)+20);
    alienX.shift();
    //Iterate insertion of y coordinate based on mouse position
    if(alienX[0]>1000){
        alienY.push(frameCount);
        alienY.shift();}


    //Loop alien animation
    for( var i = 0; i < 1; i++){
    //Draw Aliens
    fill('#9933FF')
    rect(alienX[i], alienY[i], alien.width, alien.height);
    }

}
//3+ rows of aliens, moving downwards + back and forth, speeding up over time.



//If a player bullet hits an alien, play a small animation and remove it from the alien grid. Add one to player score.
//Display player score (1 point per alien)

//Aliens shoot bullets at the player randomly.
//If the player gets hit by a bullet or an alien makes it past the player's Y position, stop the game and show "game over" on the screen.
//If all the aliens are killed, respawn the whole grid.

 //alienArray = [
    //    [1,1,1,1,1,1,1,1,1,1],
    //    [1,1,1,1,1,1,1,1,1,1],
    //    [1,1,1,1,1,1,1,1,1,1],
    //];
    //alienRows = [];