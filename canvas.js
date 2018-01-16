let btnClear = document.getElementById('btnClear');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

if (ctx) {
    btnClear.addEventListener('click', clear);
    draw();
}

function draw1() {
    ctx.fillStyle = "yellow"; //yellow rectangle that fills canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
      
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)"; //semi-transparent green
    ctx.fillRect(25, 25, 100, 100); 

    ctx.clearRect(45, 45, 60, 60); //clear rectangle

    ctx.strokeStyle = "blue"; //blue stroke
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, 50, 50); 
}

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);  
}

function draw2(){
    ctx.beginPath();
    //draw a red line from 5, 5 to midpoint of canvas, width 4
 
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 4;

    ctx.moveTo(5,5); //start at 5, 5
    ctx.lineTo(canvas.width/2, canvas.height/2); //end at centre

    //must stroke line or it will not be drawn
    ctx.stroke();
}

function draw3() {
    ctx.beginPath();
    ctx.strokeStyle = "lightGray";	
    for (let i = 1; i < 20; i++)
    {
        ctx.moveTo(i * 20,0);
        ctx.lineTo(i * 20, 300);
    }
			
    for (let i = 1; i < 15; i++)
    {
        ctx.moveTo(0, i * 20);
        ctx.lineTo(400, i * 20);
    }
    ctx.stroke();
    draw2();
}

function draw4(){
    //draw 10 individual lines
    for (let i = 0; i < 12; i++){
        ctx.beginPath();
			
        //increase line width
        ctx.lineWidth = (i + 1);
			
        //draw line
        ctx.moveTo(10, 10 + (i * 25));
        ctx.lineTo(390, 10 + (i * 25));
			
        //complete line drawing
        ctx.stroke();
    }
}

function draw5(){
    //use thick black line	
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 20;
		
    //draw line with butt end
    ctx.beginPath();
    ctx.lineCap = "butt";
    ctx.moveTo(40, 80);
    ctx.lineTo(340, 80);
    ctx.stroke();

    //draw line with round end - similar code with y = 140
    ctx.lineCap = "round";
			
    //draw line with square end - similar code with y = 200
    ctx.lineCap = "square";	
}

function draw6(){
    //use thick black line
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 20;
		
    //join lines with round join
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(40, 40);
    ctx.lineTo(100, 100);
    ctx.lineTo(160, 40);
    ctx.lineTo(220, 100);
    ctx.stroke();	
		
    //join lines with bevel join - similar code with y = 120, 180 
    ctx.lineJoin = "bevel";
		
    //join lines with miter join - similar code with y = 200, 260 
    ctx.lineJoin = "miter";		
}

function draw7(){
    ctx.beginPath();

    //start north (1.5), finish east (0)
    ctx.arc(150, 150, 80, 1.5 * Math.PI, 0);
    ctx.stroke();
}

function draw8(){
    ctx.beginPath();
    
    //start east (0), finish south (0,5), ccw
    ctx.arc(150, 150, 80, 0, 0.5 * Math.PI, true);
    ctx.stroke();
}

function draw9() {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;

    ctx.arc(80, 80, 60, 0, Math.PI * 2); // Outer circle
    ctx.fill();
    ctx.stroke();
	
    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.arc(60, 60, 7, 0, Math.PI * 2);  // Left eye
    ctx.fill();

    ctx.moveTo(108, 60);
    ctx.arc(100, 60, 7, 0, Math.PI * 2);  // Right eye
    ctx.fill();
		
    ctx.moveTo(120, 80);
    ctx.arc(80, 80, 40, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.stroke();  	
}

function draw10() {
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.moveTo(0,100);
    ctx.lineTo(ctx.canvas.width, 100);
    ctx.stroke();

    let txt = "Hello World!"
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.fillStyle = '#aabbcc';
    ctx.font = 'italic 60px sans-serif';
    ctx.textBaseline = 'ideographic';
    ctx.strokeText(txt, 0, 100);
}

function draw() {
    ctx.shadowColor = "#000024";
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 10;
    ctx.fillStyle = "rgba(0,0,185,1)";
    ctx.fillRect(20,20,200,100);
}





