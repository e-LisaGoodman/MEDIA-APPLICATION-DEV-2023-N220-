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

    //Every 10 frames
    if(frameCount%10==0){
    //Iterate y value for drip circle coordinate
    drip.push(0);
    }

    //Loop drawing the circle
    for(var i = 0; i < drip.length; i++) {
        drip[i]=drip[i]+5
        fill('#0099CC'); 
        circle(400,drip[i],50); 
        }     
    }