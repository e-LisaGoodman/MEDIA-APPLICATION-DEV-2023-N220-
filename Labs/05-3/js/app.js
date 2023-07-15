//Over and Out
//place a blue square div on the page (100px x 100px) (and in HTML)
let dvBruise = document.getElementById("bruise");
dvBruise.style.backgroundColor = "#3939ac";
dvBruise.style.width = "100px";
dvBruise.style.height = "100px";

//change the div's color to black when the mouse is over the div (and in HTML)
function blackOver(){
    dvBruise.style.backgroundColor = "#0d0d0d"
}

//that returns to blue when mouse away
function blueOut(){
    dvBruise.style.backgroundColor = "#3939ac";
}