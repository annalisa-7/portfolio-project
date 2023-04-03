var xoff = 0;
var yoff = 5;
var zoff = 10;
var loff = 15;
var qoff = 20;
var koff = 2000;
var moff = 2500;

// let myFont;
// function preload() {
//   myFont = loadFont("Cemstra-51xvv.otf");
// }

let fontChoice;
let fonts = ['Georgia', 'Helvetica', 'Comic Sans MS', 'Courier New', 'Times New Roman'];
// var r = 0;

function setup() {
    // noCursor();
    myCanvas = createCanvas(windowWidth,windowHeight);
    myCanvas.parent('myContainer');
    // background(0);
    // drawClock(random(100,windowWidth),random(100,windowHeight),random(100,300),random(250),random(250),random(250));
    drawWall(4);
}

function drawClock(x,y,size,r,g,b){
    translate(x,y);
    fill(r,g,b);
    circle(0,0,size);
    push();
    fill(0.9*g,0.9*b,0.9*b);
    circle(0,0,0.875*size);
    pop();
    fill(0.5*r,0.5*g,0.5*b);
    textSize(0.125*size);
    for (let t = 1; t < 10; t++) {
        text(t,0.35*size*cos([TWO_PI*t/12]-HALF_PI)-0.03*size,0.35*size*sin(TWO_PI*t/12-HALF_PI)+0.03*size);
    }
    text(10,0.37*size*cos([TWO_PI*10/12]-1.65)-0.03*size,0.37*size*sin(TWO_PI*10/12-1.65)+0.03*size);
    text(11,0.37*size*cos([TWO_PI*11/12]-1.67)-0.03*size,0.37*size*sin(TWO_PI*11/12-1.67)+0.03*size);
    for (let f = 12; f<13; f++) {
        text(f,0.37*size*cos([TWO_PI*f/12]-1.69)-0.03*size,0.37*size*sin(TWO_PI*f/12-1.7)+0.03*size);
    }
}

function drawWall(number){
    push();
    for (let c = 0; c < number; c++) {
        var x = random(50,200);
        var y = random(50,200);
        var size = random(100,300);
        var r = random(100,200);
        var g = random(100,200);
        var b = random(100,200);

        drawClock(x,y,size,r,g,b);
    }
    pop();
}

function draw() {
    background(101,67,33);
    // drawWall(10);

    push();
    textFont(fonts[0]);
    drawClock(1100,400,300,200,100,50);
    var n = 2*TWO_PI*noise(xoff);
    line(0,0,0.35*300*cos(n),0.35*300*sin(n));
    line(0,0,0.15*300*cos(n/4),0.15*300*sin(n/4));
    xoff += 0.003;
    pop();

    push();
    textFont(fonts[1]);
    drawClock(300,200,200,20,40,220);
    var q = 3*TWO_PI*noise(zoff);
    line(0,0,0.35*200*cos(q),0.35*200*sin(q));
    line(0,0,0.15*200*cos(q/4),0.15*200*sin(q/4));
    zoff += 0.007;
    pop();

    push();
    textFont(fonts[2]);
    drawClock(100,400,100,120,120,120);
    var p = 7*TWO_PI*noise(yoff);
    line(0,0,0.35*100*cos(p),0.35*100*sin(p));
    line(0,0,0.15*100*cos(p/4),0.15*100*sin(p/4));
    yoff += 0.005;
    pop();

    push();
    textFont(fonts[3]);
    drawClock(800,300,150,230,150,50);
    var l = TWO_PI*noise(loff);
    line(0,0,0.35*150*cos(l),0.35*150*sin(l));
    line(0,0,0.15*150*cos(l/4),0.15*150*sin(l/4));
    loff += 0.01;
    pop();

    push();
    textFont(fonts[4]);
    drawClock(600,600,150,112,130,62);
    var q = TWO_PI*noise(qoff);
    line(0,0,0.35*150*cos(q),0.35*150*sin(q));
    line(0,0,0.15*150*cos(q/4),0.15*150*sin(q/4));
    qoff += 0.001;
    pop();

    push();
    textFont(fonts[3]);
    drawClock(350,500,300,143,158,139);
    var k = TWO_PI*noise(koff);
    line(0,0,0.35*300*cos(k),0.35*300*sin(k));
    line(0,0,0.15*300*cos(k/4),0.15*300*sin(k/4));
    koff += 0.01;
    pop();

    push();
    textFont(fonts[3]);
    drawClock(0.68*windowWidth,0.2*windowHeight,200,179,213,139);
    var m = TWO_PI*noise(moff);
    line(0,0,0.35*200*cos(m),0.35*200*sin(m));
    line(0,0,0.15*200*cos(m/4),0.15*200*sin(m/4));
    moff += 0.01;
    pop();

    // push();
    // for (let c = 0; c < 20; c++) {
    //     var x = random(50,200);
    //     var y = random(50,200);
    //     var size = random(100,300);
    //     var r = random(100,200);
    //     var g = random(100,200);
    //     var b = random(100,200);

    //     drawClock(x,y,size,r,g,b);
    // }
    // pop();

    // for (let xoff = 1; xoff < 50; xoff++) {

    // }
    // fill(100);
    // circle(100,100,120);
    // circle(100,100,105);

    // fill(200);
    // textSize(15);
    // for (let t = 1; t < 13; t++) {
    //     text(t,43*cos([TWO_PI*t/12]-HALF_PI)+95,43*sin(TWO_PI*t/12-HALF_PI)+105);
    // }
    // text('12',88,70);
    // text('1',115,85);

    // var x = 180*noise(xoff);

    // arc(50, 50, 80, 80, radians(x), PI + QUARTER_PI, PIE);
    // xoff += 0.01;
}