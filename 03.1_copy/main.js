let limitedeCirculos = 1000; 
let contadorDeCirculos= 0;
const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
 
    return color;
}

class Circulo {
    constructor(params = {}) {
        
        this.borderColor = params.borderColor || getRandomColor();   
        this.borderWidth = 15;
        //this.opacity="0.2";
        this.x = Math.random() * CANVAS.width;
        this.y = Math.random() * CANVAS.height;
        
        this.speed = {
            x: Math.random() * 0.7,
            y: 0.7
        }
    }

    updatePosition() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.globalAlpha="0.2";
        CTX.beginPath();
        CTX.rect(this.x, this.y, 80, 80, 80, 80);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
    };
}



let circulo1 = new Circulo();




function render() {
   //CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);


    for (let i = 0; i < 5; i++) {
        let nuevoCirculo = new Circulo({ borderColor: getRandomColor()}); 

        nuevoCirculo.draw();
        contadorDeCirculos ++; //actualizar contador 
    }
    console.log ("contadorDeCirculos:", contadorDeCirculos);
//CONDICION: para revisar si alcanzamos el limite de circulos
    if (contadorDeCirculos == limitedeCirculos) {
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
        contadorDeCirculos=0;
    }

    requestAnimationFrame(render);
}


window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);
