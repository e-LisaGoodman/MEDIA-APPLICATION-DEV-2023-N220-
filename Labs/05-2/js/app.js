//Thats a lot of div

//Write a loop that puts 100 square divs (20px x 20px) on the page. 10 times in HTML, can I make 10 rows?
for (i=0; i < 100; i++){
    let newDiv = document.createElement("div")
    //newDiv.style.height = "20px";
    //newDiv.style.width = "20px";
    newDiv.classList.add("discoSquare")
    //Give each a different background color. 
    newDiv.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"
    document.body.appendChild(newDiv)
}

//Set their float CSS attribute to left (in HTML).

//Give each a different background color. 
