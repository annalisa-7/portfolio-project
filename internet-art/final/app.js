let numBalls = 40;
let spring = 0.5;
let gravity = 0;
let friction = 0;
let balls = [];
let space = [];


// creating array for x-position of balls (so don't get stuck in the rectangles)
for (let i = 0; i < 20; i++) {
  space[i] = i;
}
for (let j = 320; j < 500; j++) {
  space[j-300] = j;
}
for (let k = 800; k < 1000; k++) {
  space[k-600] = k;
}
for (let l = 1300; l < 1500; l++) {
  space[l-900] = l;
}

for (let m = 1800; m < 2000; m++) {
  space[m-1200] = m;
}

function setup() {
    // noCursor();
    myCanvas = createCanvas(2000,windowHeight);
    myCanvas.parent('myContainer');
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(
          random(space),
          random(height),
          random(30, 70),
          i,
          balls
        );
      }
      noStroke();
      fill(255, 204);
}

function draw() {
    background(163,130,128);

    // rect(5,5,100,100)

    balls.forEach(ball => {
        ball.collide();
        ball.move();
        ball.display();
      });

      // rectangles where images are
      fill(163,130,128);
      rect(1500,100,300,463.65);
      rect(20,100,300,400);
      rect(1000,50,300,614.75);
      rect(500,200,300,400);
}

// adapted from: https://p5js.org/examples/motion-bouncy-bubbles.html

class Ball {
    constructor(xin, yin, din, idin, oin) {
      this.x = xin;
      this.y = yin;
      this.vx = random(1);
      this.vy = random(1);
      this.diameter = din;
      this.id = idin;
      this.others = oin;
      this.color = color(128 + random(128),128 + random(128),128 + random(128),127);
    //   this.stroke = color(random(255),255,255);
    }
  
    collide() {
      for (let i = this.id + 1; i < numBalls; i++) {
        // console.log(others[i]);
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].diameter / 2 + this.diameter / 2;
        //   console.log(distance);
        //console.log(minDist);
        if (distance < minDist) {
          //console.log("2");
          let angle = atan2(dy, dx);
          let targetX = this.x + cos(angle) * minDist;
          let targetY = this.y + sin(angle) * minDist;
          let ax = (targetX - this.others[i].x) * spring;
          let ay = (targetY - this.others[i].y) * spring;
          this.vx -= ax;
          this.vy -= ay;
          this.others[i].vx += ax;
          this.others[i].vy += ay;
        }
      }

      //bounce off of walls
      if (this.x <= (this.diameter/2) || this.x >= width-(this.diameter/2)) {
        this.vx *= -1;
      }

      if (this.y <= (this.diameter/2) || this.y >= height-(this.diameter/2)) {
        this.vy *= -1;
      }

    //   if (this.x - this.diameter/2 <= 0) {
    //     this.x = this.diameter/2; 
    //   } else {
    //     this.x = width - this.diameter/2; 
    //   }
      
    //   this.resetVelocityAndAcceleration();
    // }

      //bounce off of images
      if (this.x + this.diameter/2 > 1500 && this.x - this.diameter/2 < 1800 && this.y + this.diameter/2 > 100 && this.y - this.diameter/2 < 563.65) {
        this.vx *= -0.7;
        this.vy *= -0.7;
      }
      if (this.x + this.diameter/2 > 20 && this.x - this.diameter/2 < 320 && this.y + this.diameter/2 > 100 && this.y - this.diameter/2 < 500) {
        this.vx *= -0.7;
        this.vy *= -0.7;
      }
      if (this.x + this.diameter/2 > 1000 && this.x - this.diameter/2 < 1300 && this.y + this.diameter/2 > 50 && this.y - this.diameter/2 < 664.75) {
        this.vx *= -0.7;
        this.vy *= -0.7;
      }
      if (this.x + this.diameter/2 > 500 && this.x - this.diameter/2 < 800 && this.y + this.diameter/2 > 200 && this.y - this.diameter/2 < 600) {
        this.vx *= -0.7;
        this.vy *= -0.7;
      }
    }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    // if (this.x + this.diameter / 2 > width) {
    //   this.x = width - this.diameter / 2;
    //   this.vx *= friction;
    // } else if (this.x - this.diameter / 2 < 0) {
    //   this.x = this.diameter / 2;
    //   this.vx *= friction;
    // }
    // if (this.y + this.diameter / 2 > height) {
    //   this.y = height - this.diameter / 2;
    //   this.vy *= friction;
    // } else if (this.y - this.diameter / 2 < 0) {
    //   this.y = this.diameter / 2;
    //   this.vy *= friction;
    // }
  }

  display() {
    fill(this.color);
    // stroke(this.stroke);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}