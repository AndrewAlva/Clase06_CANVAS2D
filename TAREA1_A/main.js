const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}


function renderCircle(x, y) {
    CTX.fillStyle = "#1D4345";
    CTX.beginPath();
    CTX.ellipse(x, y, 30, 30, 0, 0, PI2);
    CTX.fill();

}

let CircleY = 0;

function frame() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    for (let i = 0; i < 12; i++) {
        CircleY = i * 75; 
        renderCircle(30, CircleY);
    } 

    requestAnimationFrame(frame);
}


window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(frame);