const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");


canvas.width = 600;
canvas.height = 600;
// canvas need to have pixel modifier size which is real size in window, not only css size


ctx.strokeStyle = "default";
ctx.lineWidth = 2.5;


let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    // create path when mouse start to moving on canvas
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
    // create line on path when mouseevent(click) appear
  }
}

function onmousedown(event) {
  painting = true;
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}


if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
// make array for each color , and pick up from array when event appear

