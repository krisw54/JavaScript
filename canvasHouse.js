let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
let cHeight = ctx.canvas.height;
let cWidth = ctx.canvas.width;

if (ctx) {
    draw();
}

function draw() {
	drawBackground();
	drawTree();
	drawGrass();
	drawHouse();
}

function drawBackground() {
	ctx.fillStyle = "lightblue"; //Will canvas with blue sky
    ctx.fillRect(0, 0, cWidth, cHeight); 
	ctx.beginPath();
	ctx.fillStyle = "white";
    ctx.arc(cWidth-180, (cHeight-(cHeight-80)), 50, 0, Math.PI * 2); 
    ctx.fill();
	
	ctx.save(); // save state
    ctx.beginPath();
    ctx.translate(cWidth-142, (cHeight-(cHeight-40)));
    ctx.scale(30, 40);
    ctx.arc(1, 1, 1, 0, 2.0 * Math.PI, false);
    ctx.fill();
	ctx.restore(); // restore
	
	ctx.save(); // save state
    ctx.beginPath();
    ctx.translate(cWidth-275, (cHeight-(cHeight-15)));
    ctx.scale(35, 50);
    ctx.arc(1, 1, 1, 0, 2.0 * Math.PI, false);
    ctx.fill();
	ctx.restore(); // restore


}

function drawGrass() {
	ctx.fillStyle = "#27e005"; //Fill canvas with blue sky
    ctx.fillRect(0, (cHeight-(cHeight/3)), cWidth, cHeight/3); 
	ctx.beginPath();
    ctx.fillStyle = "#27e005"
    ctx.arc(cWidth-100, (cHeight-(cHeight/4)), 150, 0, Math.PI * 2);  // Add hill-1
    ctx.fill();
	ctx.beginPath();
    ctx.arc(cWidth-200, (cHeight-(cHeight/4)), 100, 0, Math.PI * 2);  // Add hill-2
    ctx.fill();
}

function drawHouse() {
	ctx.fillStyle="#b44242";
    ctx.strokeStyle="black";
    ctx.lineWidth="3";
    ctx.save();
    // chimney
    ctx.fillRect(240, 120, 40, 90);
    ctx.strokeRect(240, 120, 40, 90);
	ctx.beginPath();
    // Draw a triangle for the roof
    ctx.beginPath();
    ctx.moveTo(80,260);
    ctx.lineTo(200,100);
    ctx.lineTo(365,260);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // house walls
    ctx.fillRect(100, 260, 250, 200);
    ctx.strokeRect(100, 260, 250, 200);
    // windows
    ctx.fillStyle="black";
    ctx.fillRect(115, 280, 40, 35);
    ctx.fillRect(165, 280, 40, 35);
    ctx.fillRect(250, 280, 40, 35);
    ctx.fillRect(300, 280, 40, 35);
	
    ctx.fillRect(115, 320, 40, 35);
    ctx.fillRect(165, 320, 40, 35);
    ctx.fillRect(250, 320, 40, 35);
    ctx.fillRect(300, 320, 40, 35);
	
    ctx.fillRect(250, 380, 40, 35);
    ctx.fillRect(300, 380, 40, 35);
    ctx.fillRect(250, 420, 40, 35);
    ctx.fillRect(300, 420, 40, 35);
    // door lines
    ctx.beginPath();
    //ctx.restore();
    ctx.fillRect(115, 370, 94, 90);
    ctx.stroke();
    // door handles
    ctx.beginPath();
	ctx.strokeStyle="#818180";
    ctx.arc(140,430,5,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(180,430,5,0,2*Math.PI);
    ctx.stroke();
}

function drawTree() {
	ctx.fillStyle = "brown";
	ctx.save(); // save state
    ctx.beginPath();
    ctx.translate(440, 200);
    ctx.scale(20, 320);
    ctx.arc(1, 1, 1, 0, 2.0 * Math.PI, false);
    ctx.fill();
	ctx.restore(); // restore
	ctx.fillStyle = "#0a8d28";
	ctx.save(); // save state
    ctx.beginPath();
    ctx.translate(420, 190);
    ctx.scale(50, 40);
    ctx.arc(1, 1, 1, 0, 2.0 * Math.PI, false);
    ctx.fill();
	ctx.restore(); // restore
	ctx.save(); // save state
    ctx.beginPath();
    ctx.translate(380, 190);
    ctx.scale(50, 40);
    ctx.arc(1, 1, 1, 0, 2.0 * Math.PI, false);
    ctx.fill();
	ctx.restore(); // restore
	ctx.save(); // save state
    ctx.beginPath();
    ctx.translate(380, 140);
    ctx.scale(50, 40);
    ctx.arc(1, 1, 1, 0, 2.0 * Math.PI, false);
    ctx.fill();
	ctx.restore(); // restore
	ctx.save(); // save state
    ctx.beginPath();
    ctx.translate(460, 130);
    ctx.scale(50, 60);
    ctx.arc(1, 1, 1, 0, 2.0 * Math.PI, false);
    ctx.fill();
	ctx.restore(); // restore
}

function drawGrid() {
    ctx.beginPath();
    ctx.strokeStyle = "lightGray";	
    for (let i = 1; i < 200; i++)
    {
        ctx.moveTo(i * 20,0);
        ctx.lineTo(i * 20, cHeight);
    }
			
    for (let i = 1; i < 150; i++)
    {
        ctx.moveTo(0, i * 20);
        ctx.lineTo(cWidth, i * 20);
    }
    ctx.stroke();
}
