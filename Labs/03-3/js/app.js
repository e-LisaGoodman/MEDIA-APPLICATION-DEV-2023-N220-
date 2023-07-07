//Concentric Circles
//Define the visible area
function setup() {
    createCanvas(800,600)
}
//Begin the drawing process
function draw(){
    background(111)
    //noFill()
    strokeWeight(10)
    //Initiate loop to repeat circles within circles
    for (i=10; i>0;i--){
        //Gradient stroke color per loop
        stroke(255-(i*20),0,0)
        //Gradient fill color per loop
        fill(0,0,255-(i*25))
        //Draw 1 circle per loop
        circle(400, 300, i*55)
    }
}