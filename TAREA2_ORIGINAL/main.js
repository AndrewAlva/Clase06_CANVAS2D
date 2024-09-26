const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

const centerX = CANVAS.width/2;
const centerY = CANVAS.height /2;

class Circulo {
    constructor() {
        this.fillStyle = "#B13171"; 
        this.x = centerX;
        this.y = centerY;
        
        //Dirección --> CIRCULO COMPLETO: 
        const angle = Math.random() * PI2;

        this.speed = {
            //componente X
            x: Math.cos(angle) * (Math.random() * 2 + 0.5), 
            //componente Y 
            y: Math.sin(angle) * (Math.random() * 2 + 0.5) 
        }
    }
    
    updatePosition() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    draw() {
        CTX.fillStyle = this.fillStyle;
        CTX.globalAlpha="0.5";
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 50, 50, 0, 0, PI2);
        CTX.fill();
        this.updatePosition();
    };
}

let misCirculos = [];

for (let i=0; i< 50;i++) {
    misCirculos.push (new Circulo());
}

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    
    for (let i = 0; i < misCirculos.length; i++) {
        misCirculos[i].draw();
        
    }


    requestAnimationFrame(render);
}


window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);




