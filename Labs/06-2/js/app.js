//List Display
//Create an HTML5 application with a collection (array of objects) in JavaScript  
//create a div for each that display the data, place that element on the page (in HTML)
let movieDiv = document.getElementById("movieDiv");

//Enter collection list and at least 3 properties
let movies = [
    {title:"Rise of the Guardians", released:"2012", IMDB:7.2},
    {title:"WALL-E", released:"2008", IMDB:8.4},
    {title:"Big Fish", released:"2003", IMDB:8.0},
    {title:"Gattaca", released:"1997", IMDB:7.8},
    {title:"Ready Player One", released:"2018", IMDB:7.4},
    {title:"One Hour Photo", released:"2002", IMDB:6.8}
];

//Use a loop in JavaScript to loop through those elements.
for(let i = 0; i<movies.length; i++) {
    //create element for div content
    let newEl = document.createElement("div");
    newEl.innerHTML = movies[i].title + ", IMDB Rating: " + movies[i].IMDB;
    //Conditional Style Change 
    if (movies[i].IMDB>=8){
        newEl.style.backgroundColor= "#00b300"
    }
    else newEl.style.backgroundColor= "#ff6666"
    newEl.classList.add("movie");
    movieDiv.appendChild(newEl);
}

//Include in this loop at least one IF statement that changes an element's style based on some property. 
//Your data must be set up in a way to force this change to happen for at least one of your elements.
//function greenLight(){
    //if (movies.IMDB>=8){
    //    movie.style.backgroundColor= "#00b300"
    //}
    /*if(movies.IMDB>6 && movies.IMDB<8){
        backgroundColor: "#ffffe6"
    }*/
    //else movie.style.backgroundColor= "#ff6666"
//}