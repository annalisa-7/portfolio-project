function setup() {
    createCanvas(400,700,WEBGL);
}

function draw() {
    background(153);
    stroke(80);
    fill(80);
    ellipse(56,56,100,70);
    stroke(40);
    fill(40);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(250, 50, 50, locX, locY, 50);
    specularMaterial(250);
    shininess(7);
    cone(40,70);
}