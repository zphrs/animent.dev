const W = 87
const A = 65
const S = 83
const D = 68
const SPACE = 32

function motionToText(motion) {
  switch (motion) {
    case 0:
      return 'position'
    case 1:
      return 'velocity' // first derivative - a preview of high school math
    case 2:
      return 'acceleration' // second derivative
  }
}

function toggleMotion() {
  this.motion = (this.motion + 1) % 3
}

function setup() {
  createCanvas(windowWidth, windowHeight - 4)
  this.position = createVector(0, 0)
  this.velocity = createVector(0, 0)
  this.acceleration = createVector(0, 0)

  this.motion = 0
}

function mousePressed() {
  toggleMotion()
}

function keyPressed() {
  if (keyCode == SPACE) {
    toggleMotion()
  }
}

function getVectorBeingChanged() {
  switch (this.motion) {
    case 0:
      return this.position
    case 1:
      return this.velocity
    case 2:
      return this.acceleration
  }
}

function updateMotion() {
  const vector = getVectorBeingChanged()
  const deltaVector = createVector(0, 0)
  const amount = 0.1 ** (1 * motion)
  if (keyIsDown(A)) {
    deltaVector.x -= amount
  }
  if (keyIsDown(D)) {
    deltaVector.x += amount
  }
  if (keyIsDown(W)) {
    deltaVector.y -= amount
  }
  if (keyIsDown(S)) {
    deltaVector.y += amount
  }
  vector.add(deltaVector)

  velocity.add(acceleration)
  position.add(velocity)
  if (position.x < 0) {
    position.x = 0
    velocity.x = 0
    acceleration.x = 0
  }
  if (position.x > width) {
    position.x = width
    velocity.x = 0
    acceleration.x = 0
  }
  if (position.y < 0) {
    position.y = 0
    velocity.y = 0
    acceleration.y = 0
  }
  if (position.y > height) {
    position.y = height
    velocity.y = 0
    acceleration.y = 0
  }
}

function drawVector(origin, vector, color, motion) {
  stroke(color)
  const v = p5.Vector.mult(vector, 10 ** motion)
  const end = p5.Vector.add(origin, v)
  line(origin.x, origin.y, end.x, end.y)
}

function draw() {
  if (motion == undefined) return
  background(255)
  text(motionToText(motion), 10, 10)
  updateMotion()
  fill(0)
  ellipse(position.x, position.y, 10, 10)
  // draw lines to show the vectors
  drawVector(createVector(0, 0), position, 'black', 0)
  drawVector(position, velocity, 'red', 1)
  drawVector(position, acceleration, 'blue', 2)
  stroke(0)
}
