//Click for Random
//Create an application that changes a circle to one of four different colors in an array 
//when it’s clicked.

let blinker = document.getElementById("blinker")
let colors = ["#ff0000", "#ffff66", "#009933", "6666ff"];
//document.body.appendChild(blinker);
let i = 0

//initiate square style
blinker.style.backgroundColor = "#e0e0e0";
blinker.style.height = "100px";
blinker.style.width = "100px";

function change(){
   //style change
    blinker.style.width = "150px";
    blinker.style.height = "150px";
    blinker.style.backgroundColor = (colors[i]);
    i++;
}

//Create a space and initiate circle
//function setup(){
    //background (200)
    //createCanvas(400,300)
    //noStroke()
    //circle(200,150,275)
    
//}

//function change(){
    //for (var i = 0; i<colors.length; i++){
    //blinker.style.circle(200,150,275);
    //blinker.style.backgroundColor = (colors[i]);
    //}
//}
