let leftscore = 0;
let rightscore = 0;

function preload() {
  ding = loadSound('http://localhost:2000');
}

function setup() {
  createCanvas(600, 400);
  puck = new Puck();
  left = new Paddle(true);
  right = new Paddle(false);
}

function draw() {
  background(0);

  puck.checkPaddleRight(right);
  puck.checkPaddleLeft(left);

  left.show();
  right.show();
  left.update();
  right.update();

  puck.update();
  puck.edges();
  puck.show;

  fill(255);
  textSize(32);
  text(leftscore, 32, 40);
  text(rightscore, width - 64, 40);
}

function keyReleased() {
  left.move(0);
  right.move(0);
}

function keyPressed() {
  console.log(key);
  if (key == 'W') {
    left.move(-10);
  } else if (key == 'S') {
    left.move(10);
  }

  if (key == UP_ARROW) {
    right.move(-10);
  } else if (keyCode == DOWN_ARROW) {
    right.move(10);
  }
}
