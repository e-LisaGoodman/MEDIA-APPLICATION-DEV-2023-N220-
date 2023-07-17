//Data-Driven Display
//Make an object with all the properties for a graphic on the screen - 
//width, height, color, position. 



//Canvas size: 400x300
function setup(){
    createCanvas(800,600)
    noStroke()
}
//In your create or draw function, draw that object using the data in your object.
function draw(){
    background(0)
    fill("#ff6666")
    circle(400,300,mouseX,mouseY)
}
