let numBalls = 50;
let spring = 0.85;
let gravity = 0;
let friction = 0;
let balls = [];

function setup() {
    // noCursor();
    myCanvas = createCanvas(2000,windowHeight);
    myCanvas.parent('myContainer');
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(
          random(width),
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
    background(128);

    // fill(0);
    rect(1500,100,300,463.65);
    rect(20,100,300,400);
    rect(1000,50,300,614.75);
    rect(500,200,300,400);

    balls.forEach(ball => {
        ball.collide();
        ball.move();
        ball.display();
      });
}

class Ball {
    constructor(xin, yin, din, idin, oin) {
      this.x = xin;
      this.y = yin;
      this.vx = 0;
      this.vy = 0;
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
    }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    fill(this.color);
    // stroke(this.stroke);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}