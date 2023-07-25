//Greeter
//Create a page with an input and a button (in HTML File). 
//with {Name} being the value the user put into the input field.

//pull in HTML elements
let nameTag = document.getElementById("nameTag");
let dvSticker = document.getElementById("sticker");

//When the button is clicked (in HTML File), 
function greet(){
    //output the phrase "Hello {Name}" to the developer console,
    //with {Name} being the value the user put into the input field.
    //console.log(nameTag.value);
    console.log(`Hello ${nameTag.value}`);
    //print on page for GitHub example to matter to normal people
    dvSticker.innerHTML = `Hello ${nameTag.value}`;
    //clear input
    nameTag.value = "";
}

