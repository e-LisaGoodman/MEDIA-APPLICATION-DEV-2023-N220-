//Ever Larger, Until Not
//Create an application that draws a circle to the center of the screen every update frame.

//Start with a diameter of 1. 
let size=1;

//create a space and initiate circle
function setup(){
    createCanvas(400,300)
    circle(200,150,size)
}
//begin drawing sequence
function draw(){
    background (0)
    circle(200,150,size)
    fill(158,100,0)
    //Once the circle gets a diameter of 200, set its diameter back to 1.
    if(size>200){
        size=1
    }  
    //Using a global variable, change increase the diameter of the circle by 1 every frame. 
    size++;

     //for fun, mouse click changes color
     if(mouseIsPressed == true){
        fill(200,0,211)
    }
}