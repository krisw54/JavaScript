let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

if (ctx) {
    draw();
}

function draw() {
    //set values that are not going to change
    ctx.shadowOffsetX = 10; 
    ctx.shadowOffsetY = 10; 
    ctx.shadowColor = 'slategray';

    //step 1 - red rectangle
    ctx.fillStyle = 'red'; 
    ctx.font = '8px sans-serif';
    ctx.fillText("step 1", 0, 20);
    ctx.fillRect(0, 40, 20, 150); 
    ctx.save();

    //step 2 - green rectangle
    ctx.fillStyle = 'green';
    ctx.shadowBlur = 5; 
    ctx.font = '12px sans-serif';
    ctx.fillText("step 2", 40, 20);
    ctx.fillRect(40, 40, 40, 150); 
    ctx.save(); 

    //step 3 - blue rectangle
    ctx.fillStyle = 'blue';
    ctx.shadowBlur = 10; 
    ctx.font = '14px sans-serif';
    ctx.fillText("step 3", 100, 20);
    ctx.fillRect(100, 40, 60, 150); 
 
    //step 4 - blue circle
    ctx.beginPath(); 
    ctx.fillText("step 4", 190, 20);
    ctx.arc(210, 115, 30, 0, Math.PI*2); 
    ctx.fill(); 

    //step 5 - green circle
    ctx.restore(); 
    ctx.beginPath(); 
    ctx.fillText("step 5", 265, 20);
    ctx.arc(280, 115, 20, 0, Math.PI*2); 
    ctx.fill();

    //step 6 - red circle
    ctx.restore(); 
    ctx.beginPath(); 
    ctx.fillText("step 6", 325, 20);
    ctx.arc(330, 115, 10, 0, Math.PI*2); 
    ctx.fill(); 

}
