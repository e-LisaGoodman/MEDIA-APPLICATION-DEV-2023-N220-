//Puck Side- Red v. Blue 
//The screen is divided in half with right side red and left side blue. 
//Draw a circle to follow the mouse and show which side it is on by filling red or blue.

//Canvas size: 400x300
function setup(){
    createCanvas(400,300)
    noStroke()
}

//Basic assigmnent
function draw(){
    background(0)
    //Create an application that draws a circle where the mouse is at.
    circle(mouseX,mouseY,50)
    //When the mouse is on the left side of the canvas, draw the circle in blue.
    if((mouseX<=200) && (mouseX<100)){
        fill(0,0,255)
    }
    //Gradient Affect Blue
    if((mouseX<=200) && (mouseX>100)){
        fill(50,50,150)
    }
    //When the mouse is on the right half of the canvas, draw the circle in red. 
    if((mouseX>200) && (mouseX>300)){
        fill(255,0,0)
    }
    //Gradient Affect Red
    if((mouseX>200) && (mouseX<300)){
        fill(150,50,50)
    }
    
    //else fill(153,0,0)
}