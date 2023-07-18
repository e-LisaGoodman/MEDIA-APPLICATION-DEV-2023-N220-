//Data-Driven Display
let obj = {
width: 50,
height: 50,
color: "#00FF00",
x: 400,
y: 300, 
}



let nameSize = document.getElementByID("UserName")
function setup(){
    createCanvas(800,600)
}

function draw(){
  rect(obj.x, obj.y, obj.width, obj.height)
}

//In your create or draw function
//function namerOlogy(){
  //  let nameSize = Number(UserName.value);
    //Make an object with all the properties for a graphic on the screen - 
    //draw that object using the data in your object
    //UserName.value = "";
//}
