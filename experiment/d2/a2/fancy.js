const MAX_SQUARES = 25
const MIN_SQUARES = 0

let count = 10
let countIncreasing = true

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(5)
  draw()
}

function changeCount() {
  if (countIncreasing) {
    count++
  } else {
    count--
  }

  if (count >= MAX_SQUARES) {
    countIncreasing = false
  } else if (count <= MIN_SQUARES) {
    countIncreasing = true
  }
}

function draw() {
  // animate here!!
  background(0)
  for (let i = 0; i < count; i++) {
    square(
      (i % 5) * 60 + 30,
      Math.floor(i / 5) * 60 + 30,
      55
    )
  }

  changeCount()
}
