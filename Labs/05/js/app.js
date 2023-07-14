//Peak Pixels

//Write the markup and JS to place a square div on the page (in HTML file). 

let dvSqr = document.getElementById("sqr");
let width = 100;
let height= 100;

//100px by 100px, green background.
dvSqr.style.backgroundColor = "#339966";
dvSqr.style.width = "100px";
dvSqr.style.height = "100px";


//Make it so that when the div its clicked (in HTML file), it increases its size by 10% every time.
function growSqr(){
    dvSqr.style.width = (width*1.1)+"px";
    dvSqr.style.height = (height*1.1)+"px";
    width += width*.1;
    height += height*.1;
    console.log (width)
}