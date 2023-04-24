let r = 0;
let g = 0;
let b = 0;
let l = 0;
let m = 0;
let n = 0;

function setup() {
    noCursor();
    myCanvas = createCanvas(windowWidth,windowHeight);
    myCanvas.parent('myContainer');
    r = random(140, 255);
    g = random(120, 255);
    b = random(140, 255);
    l = random(140, 255);
    m = random(120, 255);
    n = random(140, 255);



    // let p = pixelDensity();
    // let x = 700;
    // let y = 300;
    // for (let i = 0; i < 100; i++) {
    //     for (let j = 0; j < 100; j++) {
    //     //   loop over
    //       index = 4 * ((y + j) * width * p + (x + i));
    //       pixels[index] = r;
    //     }
    //   }

    // applyMatrix(1000*r, 0, 0, 0, 1000*r, 0);
    // rect(700,300,100,100);
    background(r,g,b);

    push();
    // noFill();
    fill(0.7*r,0.7*g,0.7*b);
    square(250,100,300);
    pop();

    let p = drawingContext.createLinearGradient(0,height/2,250,height/2);
    c1 = color(r,g,b);
    c2 = color(0.7*r,0.7*g,0.7*b);
    p.addColorStop(0,c1.toString());
    p.addColorStop(1,c2.toString());
    drawingContext.fillStyle = p;
    quad(0,0,250,100,250,400,0,height);

    let q = drawingContext.createLinearGradient(width/2,0,width/2,100);
    q.addColorStop(0,c1.toString());
    q.addColorStop(1,c2.toString());
    drawingContext.fillStyle = q;
    quad(0,0,250,100,550,100,width,0);

    let x = drawingContext.createLinearGradient(width,height/2,550,height/2);
    x.addColorStop(0,c1.toString());
    x.addColorStop(1,c2.toString());
    drawingContext.fillStyle = x;
    quad(width,0,550,100,550,400,width,height);

    stroke(126);
    // strokeWeight(dist(400,250,));

    // let x=line(0,0,250,100);
    // if (x)
    line(0,0,250,100);
    line(0,height,250,400);
    line(width,0,550,100);
    line(width,height,550,400);
    // strokeWeight(1);
    line(250,100,250,400);
    line(250,100,550,100);
    line(550,400,250,400);
    line(550,400,550,100);


}

function draw() {

    let d=dist(400,250,mouseX,mouseY);

    push();
    fill(l,m,n);
    noStroke();
    if (mouseX > 250 && mouseX < 550 && mouseY > 100 && mouseY < 400){
        circle(mouseX,mouseY,10)
    } else {
        circle(mouseX,mouseY,d/10)
    }
    pop();

    if (mouseIsPressed) {
        r = random(140, 255);
        g = random(120, 255);
        b = random(140, 255);
        l = random(140, 255);
        m = random(120, 255);
        n = random(140, 255);
    }

    // function (mouseReleased()) {
    //         background(r,g,b);
    //     }
        

    }
    
    // ellipse(56,56,100,70);
    // stroke(40);
    // fill(40);
    // rotateX(frameCount * 0.01);
    // rotateZ(frameCount * 0.01);
    // let locX = mouseX - width / 2;
    // let locY = mouseY - height / 2;
    // pointLight(250, 50, 50, locX, locY, 50);
    // specularMaterial(250);
    // shininess(7);
    // cone(40,70);
    // torus(30,15);

    // helperCoordinates();



function helperCoordinates() { //show coordinates of cursor
    fill(0);
    text(
        '(' +
        floor(mouseX) +
        ',' +
        floor(mouseY) +
        ')',
        mouseX,
        mouseY
    );
    }