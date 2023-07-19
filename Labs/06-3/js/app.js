//Virtual Pet
//Include two buttons (and functions) for feeding and playing with the pet. 
//Display these stats on the document: Name, happiness, and energy. 
//They must update every time you change the properties.
//Consider using a function to update the document so you are not repeating yourself across two functions.

let dvFur = document.getElementById("furby");
let width = 100;
let height= 100;

//Give this pet properties for name, energy, happiness, and age.
let furby = {
    name: "Tom Agachi",
    energy: 0,
    happiness: 0,
    age: 1,
}
//Create an application  with an object that represent a virtual pet - similar to a Tamagotchi.
dvFur.style.backgroundColor = "rgb(204,151,153)";
dvFur.style.width = "100px";
dvFur.style.height = "100px";
dvFur.innerHTML = "(Name: "+furby.name+", Energy: "+furby.energy+", Happiness: "+furby.happiness+", Age: "+furby.age+")";

//Make it so that when "Feed Me" is clicked (in HTML file), energy increases increases energy by 5.
function feed(){
    //increment energy by 5
    furby.energy = furby.energy + 5;
    //update display text
    dvFur.innerHTML = "(Name: "+furby.name+", Energy: "+furby.energy+", Happiness: "+furby.happiness+", Age: "+furby.age+")";
    //visible size increase change
    dvFur.style.width = (width*1.1)+"px";
    dvFur.style.height = (height*1.1)+"px";
    width += width*.1;
    height += height*.1;
    console.log (furby.energy)
}

//Make it so that when "Play with Me" is clicked (in HTML file), happiness increases by 5.
function play(){
    //increment happiness by 5
    furby.happiness = furby.happiness + 5
    //update display text
    dvFur.innerHTML = "(Name: "+furby.name+", Energy: "+furby.energy+", Happiness: "+furby.happiness+", Age: "+furby.age+")";
    //style change
    dvFur.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
    console.log (furby.happiness);
}

//dvFur.innerHTML = "(Name: "+furby.name+", Energy: "+furby.energy+", Happiness: "+furby.happiness+", Age: "+furby.age+")";