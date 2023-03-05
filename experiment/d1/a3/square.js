const canvas = document.getElementById('c')
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight - 4

function drawBackground(color) {
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSquare() {
  drawBackground('black')

  ctx.fillStyle = '#ffffff'

  ctx.fillRect(30, 30, 55, 55)
}

drawSquare()
