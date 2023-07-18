let dvFur = document.getElementById("furby");
let width = 100;
let height= 100;

//100px by 100px, green background.
dvFur.style.backgroundColor = "#eeff66";
dvFur.style.width = "100px";
dvFur.style.height = "100px";


//Make it so that when "Feed" is clicked (in HTML file), it increases its size by 10% every time.
function feed(){
    dvFur.style.width = (width*1.1)+"px";
    dvFur.style.height = (height*1.1)+"px";
    width += width*.1;
    height += height*.1;
    console.log (width)
}