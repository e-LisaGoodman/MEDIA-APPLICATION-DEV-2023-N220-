//Puck Side- Red v. Blue 

//Canvas size: 400x300
function setup(){
    createCanvas(400,300)
    noStroke()
}

//Basic assigmnent
function draw(){
    background(0)
    //Create an application that draws a circle where the mouse is at.
    circle(mouseX,mouseY,30)
    //When the mouse is on the left side of the canvas, draw the circle in blue.
    if(mouseX<200){
        fill(0,0,153)
    }
    //When the mouse is on the right half of the canvas, draw the circle in red. 
    else fill(153,0,0)
}