const COUNT = 10 // Try EDITING ME!!!

const canvas = document.getElementById('c')
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight - 10

function drawBackground(color) {
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSquare(x, y) {
  ctx.fillRect(x, y, 55, 55)
}

drawBackground('black')

ctx.fillStyle = '#ffffff'

for (let i = 0; i < COUNT; i++) {
  drawSquare((i % 5) * 60 + 30, Math.floor(i / 5) * 60 + 30)
}
