// var xoff = 0;
var r = 0;

function setup() {
    // noCursor();
    myCanvas = createCanvas(windowWidth,windowHeight);
    myCanvas.parent('myContainer');
    // background(0);
    drawClock(300,300,300,50,200,200);
}

function drawClock(x,y,size,r,g,b){
    translate(x,y);
    fill(r,g,b);
    circle(0,0,size);
    circle(0,0,0.875*size);
    fill(0.5*r,0.5*g,0.5*b);
    textSize(0.125*size);
    for (let t = 1; t < 13; t++) {
        text(t,0.35*size*cos([TWO_PI*t/12]-HALF_PI)-13,0.35*size*sin(TWO_PI*t/12-HALF_PI)+15);
    }

    // for (let xoff = 1; xoff < Infinity; xoff++) {
    //     var n = TWO_PI*noise(xoff);
    //     line(0,0,0.35*size*cos(n),0.35*size*sin(n));
    //     // xoff += 0.01;
    // }
}

function draw() {
    fill(100);
    circle(100,100,120);
    circle(100,100,105);

    fill(200);
    textSize(15);
    for (let t = 1; t < 13; t++) {
        text(t,43*cos([TWO_PI*t/12]-HALF_PI)+95,43*sin(TWO_PI*t/12-HALF_PI)+105);
    }
    // text('12',88,70);
    // text('1',115,85);

    // var x = 180*noise(xoff);

    // arc(50, 50, 80, 80, radians(x), PI + QUARTER_PI, PIE);
    // xoff += 0.01;
}