//Snake
//Build an application that draws a circle at the current position of the mouse,
//AND the last ten positions of the mouse. 
//You will need to use two arrays for this positions, 
//along with the push / shift methods of arrays.


function setup() {
    createCanvas(800,600)
}
//Build an array for each x & y coordinate up to 10 positions
let positionX = [0,0,0,0,0,0,0,0,0,0]
let positionY = [0,0,0,0,0,0,0,0,0,0]

//Begin drawing process
function draw() {
    background(0)
    //Iterate insertion of x coordinate based on mouse position
    positionX.push(mouseX);
    positionX.shift();
    //Iterate insertion of y coordinate based on mouse position
    positionY.push(mouseY);
    positionY.shift();

    //Loop
    for( var i = 0; i < 10; i++){
    //Draw Circle(s)
    fill('#9933FF')
    circle(positionX[i],positionY[i],100);
    }

}