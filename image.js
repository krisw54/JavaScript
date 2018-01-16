//required for all examples, but omitted due to lack of space
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

if (ctx) {
    let smallHorse = new Image();
    smallHorse.src = "CanvasResources/smallhorse.png";
    smallHorse.addEventListener("load", drawPattern);
}

function drawPattern(){
    let pattern = ctx.createPattern(this, 'repeat');
    ctx.fillStyle = pattern;
	ctx.fillRect(0, 0, 250, 250);
}



