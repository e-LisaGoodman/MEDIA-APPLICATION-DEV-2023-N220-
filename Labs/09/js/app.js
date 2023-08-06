//Make Divs
//Given the array

//Write a loop that creates three divs based on the data in the array. 
//You should only have one document.createElement in your code.

let div = document.getElementById("div")

let objects = [
 { color: "#FF0000", height: 100, width: 300 },
 { color: "#FFFF00", height: 200, width: 200 },
 { color: "#ff0000", height: 300, width: 100 },
];

for (let i=0; i < objects.length; i++){
    //make a new element for the div in order to assign styles
    let newDiv = document.createElement("div")

    newDiv.classList.add("divStyle")
    //Give each div the pre-set style from objects array 
    newDiv.style.backgroundColor = "(objects.color[i])";
    newDiv.style.height = "(objects.height[i])" + "px";
    newDiv.style.width = "(objects.width[i])" + "px";
    document.body.appendChild(newDiv)
}
