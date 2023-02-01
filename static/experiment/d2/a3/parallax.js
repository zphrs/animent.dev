/**
 * @typedef {{
 *  x: number,
 *  y: number,
 *  width: number,
 *  height: number,
 *  depth: number,
 * }[]} Rect
 */

/**
 * @constant {Rect[]} squares
 */
let rects = []

let drawRect = () => {}

function setup() {
  rects = []
  createCanvas(windowWidth, windowHeight)
  const count = 6000
  const area = windowWidth * windowHeight
  const averageSquareLength = sqrt(area / count) * 2
  const minSize = max(averageSquareLength, 1)
  const maxSize = max(averageSquareLength * 2, 1)
  const averageSize = (minSize + maxSize) / 2

  noStroke()
  for (let i = 0; i < count; i++) {
    const width = random(minSize, maxSize)
    const height = random(minSize, maxSize)
    const x = random(-averageSize - 100, windowWidth + 100)
    const y = random(-averageSize - 100, windowHeight + 100)
    rects.push({
      x,
      y,
      width,
      height,
      depth: i / count
    })
  }
  mouseX = windowWidth / 2
  mouseY = windowHeight / 2
  mouseMoved()
}

function mouseMoved() {
  const centerRange = (x) => (x - 0.5) * 2
  const percentX = centerRange(mouseX / windowWidth)
  const percentY = centerRange(mouseY / windowHeight)
  let color = 255 * 0.5
  const count = rects.length
  const colorStep = (255 / count) * 0.5
  const parallaxAmount = 100
  background(color - colorStep * 10)
  fill(color)
  noStroke()

  const rationalInterp = (x) => 2.5 - 2.5 / (x + 1)
  for (const rectangle of rects) {
    const offsetX =
      percentX *
      rationalInterp(rectangle.depth) *
      parallaxAmount
    const offsetY =
      percentY *
      rationalInterp(rectangle.depth) *
      parallaxAmount
    fill((color += colorStep))
    rect(
      rectangle.x + offsetX,
      rectangle.y + offsetY,
      rectangle.width,
      rectangle.height
    )
  }
}

function mouseDragged() {
  mouseMoved()
}

function windowResized() {
  setup()
}
