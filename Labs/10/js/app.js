//Color Changer
//Create an application with three grey, square divs, in a row (in HTML). 
//They should be 200px by 200px, and all floated left. Give them a margin of 5px (in HTML).
//Using only one event handler, write event listeners to respond to a click on each element. 
//Each element should change to a different color: one red, one green, and one blue. 
//Use a data attribute on the elements to store the color to be changed to.


for (let i=0; i < 3; i++){
    //make a new element for the div in order to assign styles
    let newDiv = document.createElement("div")

    newDiv.classList.add("divStyle")
    //Give each div the pre-set style from objects array 
   
    document.body.appendChild(newDiv)
}