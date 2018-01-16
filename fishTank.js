let btClear = document.getElementById('btnClear');
let btSav = document.getElementById('btnSave');
let btRes = document.getElementById('btnReset');
let canva = document.getElementById('canvas');
let grasses = document.getElementById("grass");
let ctx = canva.getContext("2d");
let cHeight = ctx.canvas.height;
let cWidth = ctx.canvas.width;
let fishT = document.getElementById('fishType');
let objSize = document.getElementById('size');
let strokeColour = document.getElementById('colourStroke');
let bodyColour = document.getElementById('colourBody');
let starFishArr = [];

if (Modernizr.inputtypes.color) {
    console.log("Colour Is Supported, no issues here!")
} else {
    console.log("Colour Is NOT Supported! Load fallback...")
    strokeColour.setAttribute("class", "jscolor");
    bodyColour.setAttribute("class", "jscolor");
}

function mouseClick(event){
    let canSize = canva.getBoundingClientRect();
    let canvasMouseX =  event.clientX - canSize.left //event.x - canva.offsetLeft;
    let canvasMouseY = event.clientY - canSize.top //event.y - canva.offsetTop;
    return {
      x: canvasMouseX,
      y: canvasMouseY
    };
}

//Wait for image to load before painting images
window.onload = function() {
    ctx.drawImage(grasses, (cWidth-100-40), (cHeight-200), 40, 200);
    ctx.drawImage(grasses, (cWidth-700-40), (cHeight-200), 40, 200);
    drawTank();
}

class StarFish {
    constructor(params) {
        // Create gradient
        let grd=ctx.createLinearGradient(75,50,5,90);
        grd.addColorStop(0,"#e88f57");
        grd.addColorStop(1,"#c63a3a");
        this.ctx = (params && params.ctx) ? params.ctx : null;
        this.x = (params && params.x) ? params.x : 50;
        this.y = (params && params.y) ? params.y : 50;
        this.h = (params && params.h) ? params.h : 1;
        this.w = (params && params.w) ? params.w : 1;
        this.body = (params && params.body) ? params.body : grd;
        this.stroke = (params && params.stroke) ? params.stroke : "yellow";
        console.log(this.body);
        if (this.body == "#481616" || this.body == "481616"){
            this.body = grd;
        }
    }
    draw(){
      if (this.ctx) {
        this.ctx.save(); // save state
        this.ctx.fillStyle = this.body;
        this.ctx.strokeStyle = this.stroke;
        this.ctx.save(); // save state to retain stroke width
        this.ctx.translate(this.x, this.y);
        this.ctx.scale(this.h, this.w);
        this.ctx.beginPath();
        this.ctx.moveTo(0,0-15);
        for (var i = 0; i < 5; i++)
        {
            this.ctx.rotate(Math.PI / 5);
            this.ctx.lineTo(0, 0 - (15* 0.5));
            this.ctx.rotate(Math.PI / 5);
            this.ctx.lineTo(0, 0 - 15);
        }
        this.ctx.fill();
        this.ctx.stroke();  
        this.ctx.fillStyle = "#ede51d";
        // Draw the left eye
        this.ctx.beginPath();
        this.ctx.arc(-3, -1, 1, 0, 2*Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
        // Draw the right eye
        this.ctx.beginPath();
        this.ctx.arc(4, -1, 1, 0, 2*Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
        // Draw the mouth
        this.ctx.beginPath();
        this.ctx.arc(0, 3, 2, Math.PI, 2*Math.PI, true);
        this.ctx.closePath();
        this.ctx.fill();
          
        this.ctx.restore(); // restore to intermediate state
        //this.ctx.stroke();
        this.ctx.restore(); 
      }
   }
}

class FunkyFish {
    constructor(params) {
        // Create gradient
        let grd=ctx.createLinearGradient(75,50,5,90);
        grd.addColorStop(0,"#ed41d9");
        grd.addColorStop(1,"#4171dd");
        this.ctx = (params && params.ctx) ? params.ctx : null;
        this.x = (params && params.x) ? params.x : 50;
        this.y = (params && params.y) ? params.y : 50;
        this.h = (params && params.h) ? params.h : 1;
        this.w = (params && params.w) ? params.w : 1;
        this.body = (params && params.body) ? params.body : grd;
        this.stroke = (params && params.stroke) ? params.stroke : "#e03d5c";
        if (this.body == "#481616" || this.body == "481616"){
            this.body = grd;
        }
    }
    draw(){
      if (this.ctx) {
        this.ctx.save(); // save state
        this.ctx.fillStyle = this.body;
        this.ctx.strokeStyle = this.stroke;
        this.ctx.save(); // save state to retain stroke width
        this.ctx.translate(this.x, this.y);
        this.ctx.scale(this.h, this.w);
        //draw tale
        this.ctx.fillStyle = 'black';
        this.ctx.beginPath();
        this.ctx.moveTo(48, 15);
        this.ctx.lineTo(0, 19);
        this.ctx.lineTo(0, 7);
        this.ctx.fill();
        this.ctx.stroke();
        // Draw fish
        this.ctx.fillStyle = this.body;
        this.ctx.beginPath();
        this.ctx.bezierCurveTo(25, 25, 100, 25, 25, 3);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();  
        //draw body
        this.ctx.beginPath();
        this.ctx.arc(25, 15, 13, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.stroke();
        //draw eye
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(50, 18, 3, 0, Math.PI * 2, true);
        this.ctx.fill();
        //draw eye dot
        this.ctx.fillStyle = 'black';
        this.ctx.beginPath();
        this.ctx.arc(50,18, 1, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.restore(); // restore to intermediate state
        this.ctx.stroke();
        this.ctx.restore(); 
      }
   }
}

class TriangleOrnament {
    constructor(params) {
        // Create gradient
        let grd=ctx.createLinearGradient(75,50,5,90);
        grd.addColorStop(0,"#f8a672");
        grd.addColorStop(1,"#772828");
        this.ctx = (params && params.ctx) ? params.ctx : null;
        this.x = (params && params.x) ? params.x : 50;
        this.y = (params && params.y) ? params.y : 50;
        this.h = (params && params.h) ? params.h : 1;
        this.w = (params && params.w) ? params.w : 1;
        this.body = (params && params.body) ? params.body : grd;
        this.stroke = (params && params.stroke) ? params.stroke : "#5f2d2d";
        if (this.body == "#481616" || this.body == "481616"){
            this.body = grd;
        }
    }
    draw(){
      if (this.ctx) {
          this.ctx.save(); // save state
          this.ctx.fillStyle = this.body;
          this.ctx.strokeStyle = this.stroke;
          this.ctx.save(); // save state to retain stroke
          this.ctx.translate(this.x, this.y);
          this.ctx.scale(this.h, this.w);
          this.ctx.beginPath();
          this.ctx.moveTo(0, 10);
          this.ctx.lineTo(-10, 30);
          this.ctx.lineTo(10, 30);
          this.ctx.closePath();
          this.ctx.fill();
          this.ctx.stroke();
          this.ctx.fill();
          this.ctx.restore(); // restore to intermediate state
          this.ctx.stroke();
          this.ctx.restore(); 
      }
   }
}

class Bubble {
    constructor(params) {
        // Create gradient
        let grd=ctx.createLinearGradient(75,50,5,90);
        grd.addColorStop(0,"#7fbfe0");
        grd.addColorStop(1,"#3e7ed4");
        this.ctx = (params && params.ctx) ? params.ctx : null;
        this.x = (params && params.x) ? params.x : 50;
        this.y = (params && params.y) ? params.y : 50;
        this.h = (params && params.h) ? params.h : 10;
        this.w = (params && params.w) ? params.w : 1;
        this.body = (params && params.body) ? params.body : grd;
        this.stroke = (params && params.stroke) ? params.stroke : "#063cd0";
        if (this.body == "#481616" || this.body == "481616"){
            this.body = grd;
        }
    }
    draw(){
      if (this.ctx) {
          this.ctx.save(); // save state
          this.ctx.fillStyle = this.body;
          this.ctx.strokeStyle = this.stroke;
          this.ctx.save(); // save state to retain stroke
          this.ctx.translate(this.x, this.y);
          this.ctx.scale(this.w, this.w);
          this.ctx.beginPath();
          this.ctx.arc(0,0,this.h,0,2*Math.PI);
          this.ctx.fill();
          this.ctx.stroke();
          this.ctx.closePath();
          // Draw little shine
          this.ctx.fillStyle = "#c8f7f7";
          this.ctx.beginPath();
          this.ctx.arc(4, -2, 3, 0, 2*Math.PI);
          this.ctx.closePath();
          this.ctx.fill();
          this.ctx.restore(); // restore to intermediate state
          //this.ctx.stroke();
          this.ctx.restore(); 
      }
   }
}

if (ctx) {
    btClear.addEventListener('click', clear);
    btSav.addEventListener('click', save);
    canva.addEventListener('click', drawFish);
    btRes.addEventListener('click',resetColours);
    draw();
}

function resetColours() {
    bodyColour.value = "#481616";
    strokeColour.value ="#00000";
}

function draw() {
    ctx.fillStyle="#3452f8";
    ctx.fillRect(0,0,800,600);
    //ctx.drawImage(grasses, (cWidth-100-40), (cHeight-200), 40, 200);
    //ctx.drawImage(grasses, (cWidth-700-40), (cHeight-200), 40, 200);
    starFishArr = [];
}

function drawTank() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth=10;
    //Left Side of Tank
    ctx.moveTo(0,0);
    ctx.lineTo(0,600);
    ctx.stroke();
    //Right Side of Tank
    ctx.moveTo(800,0);
    ctx.lineTo(800,600);
    ctx.stroke();
    //Bottom Tank
    ctx.moveTo(0,600);
    ctx.lineTo(800,600);
    ctx.stroke();
    ctx.lineWidth=1;
}

function drawFish() {
    let mousePos = mouseClick(event);

    if (fishT.value == "sFish")
        {
            //console.log('Mouse position: ' + mousePos.x + ' ' + mousePos.y);
            if (objSize.value == "small") {
                let newSFish = new StarFish({ctx: ctx, x:( mousePos.x),y:(mousePos.y), body: (bodyColour.value), stroke: (strokeColour.value) });
                starFishArr.push(newSFish); }
            if (objSize.value == "med"){
                let newSFish = new StarFish({ctx: ctx, x:( mousePos.x),y:(mousePos.y), h : 2, w: 2, body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish); }
            if(objSize.value == "large"){
                let newSFish = new StarFish({ctx: ctx, x:( mousePos.x), y:(mousePos.y), h : 3, w: 3, body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish); }

        } else if (fishT.value == "fFish") {
            //console.log('Mouse position: ' + mousePos.x + ' ' + mousePos.y);
            if (objSize.value == "small") {
                let newSFish = new FunkyFish({ctx: ctx, x:( mousePos.x),y:(mousePos.y), body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish); }
            if (objSize.value == "med"){
                let newSFish = new FunkyFish({ctx: ctx, x:( mousePos.x),y:(mousePos.y), h : 2, w: 2, body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish); }
            if(objSize.value == "large"){
                let newSFish = new FunkyFish({ctx: ctx, x:( mousePos.x),y:(mousePos.y), h : 3, w: 3, body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish); }

        } else if (fishT.value == "tOrnament"){
            //console.log('Mouse position: ' + mousePos.x + ' ' + mousePos.y);
            if (objSize.value == "small") {
                let newSFish = new TriangleOrnament({ctx: ctx, x:( mousePos.x-25),y:(mousePos.y-35), body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish); }
            if (objSize.value == "med"){
                let newSFish = new TriangleOrnament({ctx: ctx, x:( mousePos.x-25),y:(mousePos.y-35), h : 2, w: 2, body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish);}
            if (objSize.value == "large"){
                let newSFish = new TriangleOrnament({ctx: ctx, x:( mousePos.x-25),y:(mousePos.y-35), h : 3, w: 3, body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish);}
            }
            else {
                //console.log('Mouse position: ' + mousePos.x + ' ' + mousePos.y);
            if (objSize.value == "small") {
                let newSFish = new Bubble({ctx: ctx, x:( mousePos.x),y:(mousePos.y), body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish); }
            if (objSize.value == "med"){
                let newSFish = new Bubble({ctx: ctx, x:( mousePos.x),y:(mousePos.y), w : 2, body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish);}
            if (objSize.value == "large"){
                let newSFish = new Bubble({ctx: ctx, x:( mousePos.x),y:(mousePos.y), w : 3, body: (bodyColour.value), stroke: (strokeColour.value)});
                starFishArr.push(newSFish);}
        }
    drawALLFish();
}

function drawALLFish() {
    for (let i = 0; i < starFishArr.length; i++) {
        starFishArr[i].draw();
    }
}

function clear(){
    draw();
    ctx.drawImage(grasses, (cWidth-100-40), (cHeight-200), 40, 200);
    ctx.drawImage(grasses, (cWidth-700-40), (cHeight-200), 40, 200);
    drawTank();
}

function save(){
    drawTank();
    window.open(canva.toDataURL('image/png'));
}

