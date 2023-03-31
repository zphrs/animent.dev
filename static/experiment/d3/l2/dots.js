const W = 87
const A = 65
const S = 83
const D = 68
const Q = 81

const I = 73
const J = 74
const K = 75
const L = 76
const O = 79

const WASDQ = {
  up: W,
  left: A,
  down: S,
  right: D,
  toggle: Q
}

const IJKLO = {
  up: I,
  left: J,
  down: K,
  right: L,
  toggle: O
}

class Controls {
  constructor(up, left, down, right, toggle) {
    this.up = up
    this.left = left
    this.down = down
    this.right = right
    this.toggle = toggle
  }
  isUp() {
    return keyIsDown(this.up)
  }
  isLeft() {
    return keyIsDown(this.left)
  }
  isDown() {
    return keyIsDown(this.down)
  }
  isRight() {
    return keyIsDown(this.right)
  }
}

const SPACE = 32

function drawVector(origin, vector, color, motion) {
  stroke(color)
  const v = p5.Vector.mult(vector, 10 ** motion)
  const end = p5.Vector.add(origin, v)
  line(origin.x, origin.y, end.x, end.y)
}

function setup() {
  class Dot {
    position
    velocity
    acceleration
    motion
    constructor(controls) {
      this.position = createVector(0, 0)
      this.velocity = createVector(0, 0)
      this.acceleration = createVector(0, 0)
      this.motion = 0
      this.controls = controls
    }
    getVectorBeingChanged() {
      switch (this.motion) {
        case 0:
          return this.position
        case 1:
          return this.velocity
        case 2:
          return this.acceleration
      }
    }
    updateMotion() {
      const vector = this.getVectorBeingChanged()
      const deltaVector = createVector(0, 0)
      const amount = 0.1 ** (1 * this.motion)
      if (this.controls.isLeft()) {
        deltaVector.x -= amount
      }
      if (this.controls.isRight()) {
        deltaVector.x += amount
      }
      if (this.controls.isUp()) {
        deltaVector.y -= amount
      }
      if (this.controls.isDown()) {
        deltaVector.y += amount
      }
      vector.add(deltaVector)

      this.velocity.add(this.acceleration)
      this.position.add(this.velocity)
      this.keepInBounds()
    }

    maybeToggleMotion() {
      if (this.controls.toggle === keyCode) {
        this.toggleMotion()
      }
    }

    toggleMotion() {
      this.motion = (this.motion + 1) % 3
    }

    keepInBounds() {
      if (this.position.x < 0) {
        this.position.x = 0
        this.velocity.x = 0
        this.acceleration.x = 0
      }
      if (this.position.x > width) {
        this.position.x = width
        this.velocity.x = 0
        this.acceleration.x = 0
      }
      if (this.position.y < 0) {
        this.position.y = 0
        this.velocity.y = 0
        this.acceleration.y = 0
      }
      if (this.position.y > height) {
        this.position.y = height
        this.velocity.y = 0
        this.acceleration.y = 0
      }
    }

    getMotionAsText() {
      switch (this.motion) {
        case 0:
          return 'position'
        case 1:
          return 'velocity' // first derivative - a preview of college math
        case 2:
          return 'acceleration' // second derivative
      }
    }

    draw() {
      fill(0)
      ellipse(this.position.x, this.position.y, 10, 10)
      // draw lines to show the vectors
      drawVector(
        createVector(0, 0),
        this.position,
        'black',
        0
      )
      drawVector(this.position, this.velocity, 'red', 1)
      drawVector(
        this.position,
        this.acceleration,
        'blue',
        2
      )
      stroke(0)
      text(
        this.getMotionAsText(),
        this.position.x,
        this.position.y
      )
    }
  }

  createCanvas(windowWidth, windowHeight - 4)

  const controls1 = new Controls(
    WASDQ.up,
    WASDQ.left,
    WASDQ.down,
    WASDQ.right,
    WASDQ.toggle
  )
  this.dot1 = new Dot(controls1)

  const controls2 = new Controls(
    IJKLO.up,
    IJKLO.left,
    IJKLO.down,
    IJKLO.right,
    IJKLO.toggle
  )
  this.dot2 = new Dot(controls2)
}

function keyPressed() {
  this.dot1.maybeToggleMotion()
  this.dot2.maybeToggleMotion()
}

function draw() {
  background(255)
  this.dot1.updateMotion()
  this.dot2.updateMotion()
  this.dot1.draw()
  this.dot2.draw()
}
