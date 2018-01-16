let btnS = document.getElementById("btnStart");
let txtOutputSE = document.getElementById("outputSE");
let diceB = document.getElementById("d1");
let diceR = document.getElementById("d2");
let txtScore = 0;
let rndNum = 0;
let diceRNum = 0;
let diceBNum = 0;
let txtOutputT="";

btnS.addEventListener("click", start);

function genNumber() {
    rndNum = 0;
    while (rndNum == 0)
    {
        rndNum = Math.floor(Math.random() * 7);
    }
    console.log(rndNum);
    return rndNum;
}

function start() {
    btnS.innerHTML="Roll Again!";
    roll();
}
function roll() {
    diceBNum = genNumber();
    diceRNum = genNumber();
    
    diceB.setAttribute("src", "images/b"  + diceBNum + ".png");
    diceR.setAttribute("src", "images/r"  + diceRNum + ".png");
    
    if (diceBNum == 1 && diceRNum == 1) { 
        txtOutputT = txtOutputSE.innerHTML;
        txtOutputSE.innerHTML = "You Won! Your Final Score Was: " + txtScore + " Game Over!" + "<br>" + txtOutputT;
        txtScore = 0;
        btnS.innerHTML="Start";
        txtOutputSE.innerHTML = "You are with a score of 0!";
        console.log("a");
    }
    else if (diceBNum == diceRNum) {
        txtScore = txtScore + 100;
        txtOutputT = txtOutputSE.innerHTML;
        txtOutputSE.innerHTML = "DICE 1: " + diceBNum + " / DICE 2: " + diceRNum + " / SCORE: " + txtScore + "<br>" + txtOutputT;
        console.log("b");
    } else {
        txtScore = txtScore + diceBNum + diceRNum;
        txtOutputT = txtOutputSE.innerHTML;
        txtOutputSE.innerHTML = "DICE 1: " + diceBNum + " / DICE 2: " + diceRNum + " / SCORE: " + txtScore + "<br>" + txtOutputT;
        console.log("c");
    }

}