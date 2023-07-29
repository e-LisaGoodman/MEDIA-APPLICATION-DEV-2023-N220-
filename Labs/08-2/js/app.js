//Stoplight

function setup() {
    //draw a stoplight
    createCanvas(100,300)
    background("#ffe066")
    noStroke()
    //Using an array for the three colors,
    let colors = ["#ff0000", "#FFFFb3", "#009933"];
    //using a for loop and only one circle() call
    for(var i = 0; i<colors.length; i++){
    //fill using the color by place
    fill(colors[i]);
    circle(50,((i*100)+50),80,80);
    }
}