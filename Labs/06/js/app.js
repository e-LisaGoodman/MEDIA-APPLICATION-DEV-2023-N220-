//Data-Driven Display
let obj = {
width: 750,
height: 500,
color: "#ffe0b3",
strokeWeight: 20,
stroke: "#9933ff",
x: 25,
y: 50, 
}



let nameSize = document.getElementByID("UserName")
function setup(){
    createCanvas(800,600)
}

function draw(){
  rect(obj.x, obj.y, obj.width, obj.height);
  fill(obj.color);
  strokeWeight(obj.strokeWeight);
  stroke(obj.stroke);
}

//In your create or draw function
//function namerOlogy(){
  //  let nameSize = Number(UserName.value);
    //Make an object with all the properties for a graphic on the screen - 
    //draw that object using the data in your object
    //UserName.value = "";
//}
