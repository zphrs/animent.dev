/**
 * @typedef {{
 *  x: number,
 *  y: number,
 *  width: number,
 *  height: number,
 *  depth: number
 * }[]} Rect
 */

/**
 * @constant {Rect[]} squares
 */
const rects = []

let drawRect = () => {}

// define iterator for rect in rects
/**
 *
 * @param {Rect} rect
 */
function rectIter(rect) {
  let i = -1
  function notDone(value) {
    return {
      value,
      done: false
    }
  }

  function done(value) {
    return {
      value,
      done: true
    }
  }
  return {
    next() {
      i++
      switch (i) {
        case 0:
          return notDone(rect.x)
        case 1:
          return notDone(rect.y)
        case 2:
          return notDone(rect.width)
        case 3:
          return done(rect.height)
      }
    }
  }
}

function setup() {
  drawRect = rect
  createCanvas(windowWidth, windowHeight - 4)
  const count = 1000
  const area = windowWidth * windowHeight
  const averageSquareLength = sqrt(area / count) * 2
  const minSize = max(averageSquareLength, 1)
  const maxSize = max(averageSquareLength * 2, 1)
  const averageSize = (minSize + maxSize) / 2
  const colorStep = (255 / count) * 0.5
  let color = 255 * 0.5
  background(color - colorStep)
  fill(color)
  noStroke()
  for (let i = 0; i < count; i++) {
    fill((color += colorStep))
    const width = random(minSize, maxSize)
    const height = random(minSize, maxSize)
    const x = random(-averageSize, windowWidth)
    const y = random(-averageSize, windowHeight)
    rect(x, y, width, height)
    rects.push({
      x,
      y,
      width,
      height,
      depth: i / count
    })
  }
}

function mouseMoved() {
  const centerRange = (x) => (x - 0.5) * 2
  const percentX = centerRange(mouseX / windowWidth)
  const percentY = centerRange(mouseY / windowHeight)
  let color = 255 * 0.5
  const count = rects.length
  const colorStep = (255 / count) * 0.5
  const parallaxAmount = 50
  background(color - colorStep)
  fill(color)
  noStroke()
  for (const rect of rects) {
    const offsetX = percentX * rect.depth * parallaxAmount
    const offsetY = percentY * rect.depth * parallaxAmount
    fill((color += colorStep))
    drawRect(
      rect.x + offsetX,
      rect.y + offsetY,
      rect.width,
      rect.height
    )
  }
}

function mouseDragged() {
  mouseMoved()
}
