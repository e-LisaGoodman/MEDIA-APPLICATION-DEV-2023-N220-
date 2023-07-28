//Is Divisible By Seven
//Create an application that with an input and a button. 
//When the user clicks on the button, 
//update a div on the page to tell the user if what they typed into input is divisible by 7. 
//Use a separate function from the onclick function to discern if it is divisible. 
//This function should return either true if it is divisible  or false if it is not.

let result = document.getElementById("result")
let num = document.getElementById("num")

function pass(){
    result.innerHTML = `Yes it is!`;
    result.style.backgroundColor = "rgb(0,204,0)";
    result.style.width = "70px";
    result.style.height = "20px";
}

function flop(){
    result.innerHTML = `NOPE`;
    result.style.backgroundColor = "rgb(204,151,10)";
    result.style.width = "50px";
    result.style.height = "20px";
}

function calc(){
    if (num.value % 7 == 0){
    result = pass()

    }
    else result = flop()
    num.value = "";
}
//FAILED PASS parts
    //function setup(){
    //    createCanvas(800,600)
    //}
    //function draw(){
    //    rect(200,200,200,200)
    //    fill("006633")
    //}
    //result.style.width = 200+"px";
    //result.style.height = 200+"px";
    //result.style.backgroundColor = "006633";

    //FAILED FLOP parts    
    //document.body.append(result);
      //function setup(){
    //    createCanvas(800,600)
    //}
    //function draw(){
    //    rect(200,200,200,200)
    //    fill("663300")
    //}
    //result.style.width = 150+"px";
    //result.style.height = 150+"px";
    //result.style.backgroundColor = "663300";
    //document.body.append(result)