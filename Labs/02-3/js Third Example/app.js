//World Wrap
//Make a circle look like it is traveling from left to right and looping back in from the left.

//Make an application that starts drawing a ball on the left hand of the screen
let xPos = -100; 

//Create a canvas 800px x 600 px.
function setup(){
    createCanvas(800,600)
}

//Begin drawing sequence
function draw(){
    background(0)
    //- make it move to the right 5 pixels per frame.
    xPos += 5;
    fill(200,200,0)
    arc(xPos,300,200,200,QUARTER_PI,320)
    //for fun- Eating motion upon mouse click
    if(mouseIsPressed == true){
        arc(xPos,300,200,200,radians(5),radians(355))
    }
    //Write the code so that when the circle reaches 800 pixels to the right, 
    if(xPos > 800){
        //move the circle to the far left of the screen.
        xPos = -100
    }
}