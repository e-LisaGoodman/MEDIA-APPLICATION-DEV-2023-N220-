//Flash Cards
//An application with 3 buttons that ask questions. 
//Each button should have a data-answer attribute that lists the answer.
//When a button is clicked, display the answer to the button's question in a div. 
//Use only one function- function must make use of the button's data-attribute.

let element = document.getElementById("flashCard");
element.addEventListener("click", itsClicked);

function itsClicked(event){
    event.target.style.backgroundColor = "#ff9900";
    event.target.style.width = "200px";
    event.target.style.height = "40px";
    event.target.style.margin = "5px";
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;
    event.target.innerHTML.right = "50px";
}