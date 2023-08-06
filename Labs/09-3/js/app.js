//Bad word catcher with loops
//**For the purposes of this exercise 
//*** bad words are: clear, water, tires.

//Create an application that:
//Takes input from a user using a simple text input field (in HTML)

//Outputs to the document
//If any bad words were found (found / not found)
//How many bad words, in total, were found

let words = document.getElementById("words");
let wordFound = document.getElementById("wordFound");

let lookingFor = ["clear", "water", "tires"];
let tally = 0;

function findBad(){
    var testWords = words.value;
    //Splits the string on spaces
    let myArray = testWords.split(" ");
    console.log(myArray);
    //Loops through  the array looking for bad words in the array
    for (let i = 0; i < testWords.length; i++){
        if(String(myArray[i]).toLowerCase() == "clear"){
        //if(myArray[i] == lookingFor.toLowerCase){
            //console.log("Word Found")
            //Adds 1 to a tally count when a bad word is found
            tally ++;
        }
        else if (String(myArray[i]).toLowerCase() == "water"){
            //console.log("Word Found")
            //Adds 1 to a tally count when a bad word is found
            tally ++;
        }
        else if (String(myArray[i]).toLowerCase() == "tires"){
            //console.log("Word Found")
            //Adds 1 to a tally count when a bad word is found
            tally ++;
        }
        console.log(tally);
        wordFound.innerHTML = `Tally of Words found ${tally}`
        words.value= "";
    }
}
