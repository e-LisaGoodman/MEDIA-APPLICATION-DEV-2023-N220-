function setup() {
    createCanvas(800,600)
    var writingSpace = (255,255,255)
    
    background(0,0,0)
    
   // Circles
    stroke(255,255,255)
    strokeWeight(5)
    // large circles
    fill(177,255,204)
    ellipse(250,250,350)
    ellipse(550,250,350)
    ellipse(250,350,350)
    ellipse(550,350,350)
    // medium circles
    fill(77,255,136)
    ellipse(200,200,300)
    ellipse(600,200,300)
    ellipse(200,400,300)
    ellipse(600,400,300)
    // small circles
    fill(0,150,50)
    ellipse(150,150,250)
    ellipse(650,150,250)
    ellipse(150,450,250)
    ellipse(650,450,250)
    
    //lines
    stroke(0,102,0)
    strokeWeight(3)
    line(150,175,650,425)
    line(150,425,650,175)
    
    //rectangles
    fill(writingSpace)
    rect(150,125,500,50)
    rect(150,425,500,50)
    fill(writingSpace)
    
    //grains of sand and action lines
    stroke(0,0,0)
    strokeWeight(1)
    ellipse(400,290,15)
    ellipse(385,280,15)
    ellipse(400,275,15)
    ellipse(415,280,15)
    ellipse(440,270,15)
    ellipse(360,270,15)
    ellipse(190,416,15)
    ellipse(250,416,15)
    ellipse(400,412,15)
    ellipse(350,416,15)
    ellipse(375,416,15)
    ellipse(380,410,15)
    ellipse(420,416,15)
    ellipse(435,370,15)
    ellipse(450,390,15)
    line(430,400,440,390)
    line(425,405,435,385)
    ellipse(520,416,15)
    ellipse(610,416,15)
    ellipse(380,390,15)
    ellipse(420,390,15)
    ellipse(400,400,15)
    ellipse(400,350,15)
    ellipse(400,315,15)
}