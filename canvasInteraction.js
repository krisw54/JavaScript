class Car {
    constructor(params){
        this.ctx = (params && params.ctx) ? params.ctx : null;

        this.x = (params && params.x) ? params.x : 0;
        this.y = (params && params.y) ? params.y : 0;
        this.width = (params && params.width) ? params.width : 100;
        this.height = (params && params.height) ? params.height : 50;

        this.body = (params && params.body) ? params.body : "gray";
        this.wheels = (params && params.wheels) ? params.wheels : "black";
    }
    
    draw(){
        if (this.ctx){
           
            //draw body
            let xGap = this.width / 10;
            let yGap = this.height / 5;
            
            this.ctx.fillStyle = this.body;
            this.ctx.fillRect(this.x, this.y, xGap * 6, yGap* 2);
            this.ctx.fillRect(this.x, this.y + yGap * 2, 
            this.width, yGap * 3);
	
            //change colour and draw wheels		
            this.ctx.fillStyle = this.wheels;

            //left wheel
            this.ctx.beginPath();
            this.ctx.arc(this.x + xGap * 2, this.y + this.height, xGap, 0, Math.PI * 2); 
            this.ctx.fill();

            //right wheel
            this.ctx.beginPath();
            this.ctx.arc(this.x + xGap * 8, this.y + this.height, xGap, 0, Math.PI * 2); 
            this.ctx.fill();
        }
    }
}

/*
class Ellipse {
    constructor(params) {
        this.ctx = (params && params.ctx) ? params.ctx : null;

        this.x = (params && params.x) ? params.x : 0;
        this.y = (params && params.y) ? params.y : 0;
        this.width = (params && params.width !== "undefined") ? params.width : 100;
        this.height = (params && params.height !== "undefined") ? params.height : 100;

        this.fill = (params && params.fill) ? params.fill : "black";
        this.stroke = 
           (params && params.stroke) ? params.stroke : "transparent";
        this.strokeWidth = 
           (params && params.strokeWidth) ? params.strokeWidth : 0;
    }
    draw(){
            if (this.ctx) {
            this.ctx.save(); // save state
            this.ctx.fillStyle = this.fill;
            this.ctx.strokeStyle = this.stroke;
            this.ctx.lineWidth = this.strokeWidth;
            this.ctx.save(); // save state to retain stroke width
            this.ctx.beginPath();

            this.ctx.translate(this.x, this.y);
            this.ctx.scale(this.width / 2, this.height / 2);
            this.ctx.arc(1, 1, 1, 0, 2.0 * Math.PI, false);
            this.ctx.fill();
			
            this.ctx.restore(); // restore to intermediate state
            this.ctx.stroke();
            this.ctx.restore();
    }
}
    

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

if (ctx) {
    let e1 = new Ellipse({ctx: ctx, fill:"Yellow"});
    e1.draw();

}
*/

let btnSave = document.getElementById("save");
let myC = document.getElementById("canvas");
let theColour = document.getElementById("colour");
let ctx = canvas.getContext("2d");

btnSave.addEventListener("click", save);
myC.addEventListener("click",draw);

function save() {
    console.log("Save");
    window.open(canvas.toDataURL());

}

function draw(){
    let x = event.x - canvas.offsetLeft;
    let y = event.y - canvas.offsetTop;
    console.log((event.x - canvas.offsetLeft) + "   " + (event.y - canvas.offsetTop));
    console.log(theColour.value);
    let myCar = new Car({ctx:ctx, x:x, y:y, body:theColour.value})
    myCar.draw();
}





