//Fizz Buzz

//Define the visible space
function setup() {
    createCanvas(800,600);
}
//Begin drawing process
function draw() {
    background(200);
    var y = 300;
    // Draw/iterate 25 shapes where if no criteria are met, they are black circles
    noStroke()
    for (i = 1; i < 26; ++ i) {
        let x = ((i*32)-32); 

        //When the iterand is divisible by 3 AND 5, draw a blue square instead *should only be the 15th shape
        if (i % 3 == 0 && i % 5 == 0) {
            fill(0, 0, 200);
            square(x, y, 32);
        }
        //When the iterand is divisible by 5, draw a green square instead 
        else if (i % 5 == 0) {
            fill(45, 180, 45);
            square(x, y, 32);
        }
        //When the iterand is divisible by 3, draw a purple circle instead 
        else if (i % 3 == 0) {
            fill(135, 0, 180);
            ellipse(x+16, y+16, 32, 32);
        }
        //Default when iterand does not meet criteria; black circle
        else {
            fill(0);
            ellipse(x+16, y+16, 32, 32);
        }
    }
}