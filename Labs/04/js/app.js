//Neapolitan 
//Create an array with strings for three different colors. 
//Looping through that array, 
//Draw a rectangle for each of those colors to the screen horizontally, like Neapolitan ice cream.

function setup() {
    createCanvas(800,600)
    background(255)
    noStroke()
    //Set array to hold 3 colors for Neapolitan look, choc/van/straw
    let colors = ["#804000", "#FFFFE6", "#FFCCE6"];
    //Begin loop
    for(var i = 0; i<colors.length; i++){
    //fill using the color by place
    fill(colors[i]);
    rect(((i*266.66)),0,266.66,600);
    }
}