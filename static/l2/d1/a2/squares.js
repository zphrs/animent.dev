function setup() {
  createCanvas(windowWidth, windowHeight - 4)
  const count = 10000
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
  }
}

function draw() {

}
