//Password Protected
//Create an application with two input fields and one button.
//When the button is clicked, verify the user has written these (exact) strings in the first and second field:
//First field should be  "Username"
//Second field should be  "Password"
//If the two fields match, update a DIV on the page with the text "Success" 
//or else "Wrong information".
//For this assignment: use only one if statement to to the check.
//Remember you'll need to use the double-equals (==) to check for equality, and the double-ampersand to check if two things are true.
//if( (oneThingIsTrue) && (anotherThingIsTrue) ) {}

let user = document.getElementById("user");
let pass = document.getElementById("pass");
let result = document.getElementById("result");

function keepGate(){
    if((user.value=="Username") && (pass.value=="Password")){
        result.innerHTML = "Success"
    }
    else(result.innerHTML = "Wrong Information")
    user.value = "";
    pass.value = "";

}
