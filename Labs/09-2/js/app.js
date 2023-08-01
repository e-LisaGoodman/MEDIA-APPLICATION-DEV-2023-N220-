//Its just average
//Create an application that:
//Takes in a list of comma-separated numbers from the user (in HTML)
//Loops through the array and sums up the values


let sum = document.getElementById("sum")
let avg = document.getElementById("avg")

function calcAvg(){
    var csv = numList.value;
    //console.log(csv);
    //Splits the input list into an array of numbers
    let myArray = csv.split (", ");
    console.log(myArray)

    let sum = 0;
    let avg = 0;

    for(let i = 0; i < myArray.length; i++){
        //Converts the string version of the numbers into number versions
        sum += Number(myArray[i]);
        console.log (sum);
        //let elSum = document.createElement("sum");
        //elSum.innerHTML = `Total ${sum}`;
        //sum.appendChild(elSum);
        //return `Total ${sum}`;
    }
    //Calculates the average of the array
    avg = sum/myArray.length;
    console.log (avg);
    //let elAvg = document.createElement("avg");
    //elAvg.innerHTML = `Average ${avg}`;
    //return `Average ${avg}`;
    //Removes the text from the input so the user can type in new numbers
    numList.value = "";
}
//Displays to the user
//The average
//The sum
//avg.innerHTML = "Average = " + "${avg}";
//sum.innerHTML = "Total = " + "${sum}";

