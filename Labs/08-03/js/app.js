//Click for Random
//Create an application that changes a circle to one of four different colors in an array 
//when it’s clicked.

let blinker = document.getElementById("blinker")
let colors = ["#ff0000", "#FFFFb3", "#009933", "6666ff"];
let x = 200;
let y = 200;
let diameter = 250;


//Create an application  with an object that represent a virtual pet - similar to a Tamagotchi.
blinker.style.backgroundColor = "#ff00ff";
blinker.style.x = 200;
blinker.style.y = 200;

function change(){
   //style change
   for(var i = 0; i<colors.length; i++){
   circle(x,y,diameter);
   blinker.style.backgroundColor = (colors[i]);
   }
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
