let pos = { x: 10, y: 10 }

const STEP_SIZE = 65

function setup() {
  renderer = createCanvas(windowWidth, windowHeight)
  square(pos.x, pos.y, 55)
}

function keyTyped() {
  if (key == 'w') {
    pos.y -= STEP_SIZE
  }

  if (key == 's') {
    pos.y += STEP_SIZE
  }

  if (key == 'a') {
    pos.x -= STEP_SIZE
  }

  if (key == 'd') {
    pos.x += STEP_SIZE
  }
  square(pos.x, pos.y, 55)
}
