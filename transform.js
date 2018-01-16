let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

if (ctx) {
    draw();
}

function drawRectangle(colour, x, y){
    //translate by specified amount
    ctx.save();
    ctx.translate(x, y);
        
    ctx.fillStyle = colour; 
    ctx.fillRect(0, 0, 100, 50);
    ctx.restore();
}


function draw(){
    drawRectangle("red", 50, 20);
    drawRectangle("blue", 50, 80);
}



function drawGrid(){
    ctx.beginPath();
    ctx.strokeStyle = "lightGray";	
    for (let i = 0; i < 60; i++)
    {
        ctx.moveTo(i * 20,0);
        ctx.lineTo(i * 20, 600);
    }
			
    for (let i = 0; i < 30; i++)
    {
        ctx.moveTo(0, i * 20);
        ctx.lineTo(600, i * 20);
    }
    ctx.stroke();
}
