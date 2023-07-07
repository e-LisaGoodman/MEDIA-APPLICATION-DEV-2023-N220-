//Pyramid

//Using nested loops (one within the other) recreate this composition with only one line having a drawing command on it (rect/circle/line/etc..). 

//Define visible area
function setup() {
    createCanvas(400,300)
}
//Begin drawing process
function draw() {
    background (222)
    noStroke()

//Build 4 rows with increasing number of squares per column in each row 
   //Top row has just one far left square
    for(y=0;y<50;y+=52){
        for(x=0;x<50;x+=52){
            fill(0,111,0)
            square(x,y,50)
        }
        //Sencond row from top has two far left squares
        for(y=52;y<100;y+=52){
            for(x=0;x<100;x+=52){
                fill(222,140,25)
                square(x,y,50)
            }
        }
        //Third row from top has three far left squares
        for(y=104;y<150;y+=52){
            for(x=0;x<150;x+=52){
                fill(222,50,0)
                square(x,y,50)
            }
        }
        //Fourth row from top has four far left squares
        for(y=156;y<200;y+=52){
            for(x=0;x<200;x+=52){
                fill(170,0,0)
                square(x,y,50)
            }
        }
    }
}
