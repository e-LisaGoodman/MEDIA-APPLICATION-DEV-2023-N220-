//Dripping water

//Build an application that, every ten frames, draws a circle at the top center of the screen. 
//This circle should move down the screen at 5 pixels / frame. 
//Done properly, there will be multiple circles on the screen at once. 
//Thus, you will need to use an array to store, at a minimum, the Y location of each circle.


function setup() {
    createCanvas(800,600)
}
//Build an array for the y coordinate 
let drip = []; 

//Begin drawing process
function draw() { 
    background(0);

    //Iterate y value for drip circle coordinate
    drip.push(([i]+5));
    drip.shift();

    //Loop drawing the circle
    for(var i = 0; i < 600; i+=10) {
        fill('#0099CC'); 
        circle(400,[i],50); 
        }     
    }