const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas);

const ctx = canvas.getContext("2d");

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 25;

let isDrawing = false;
let currentX = 0;
let currentY = 0;
let hue = 0;

canvas.addEventListener("mousedown", function (e) {
  isDrawing = true;
  [currentX, currentY] = [e.offsetX, e.offsetY];
  draw(e);
});

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(currentX, currentY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [currentX, currentY] = [e.offsetX, e.offsetY];
  hue++;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
