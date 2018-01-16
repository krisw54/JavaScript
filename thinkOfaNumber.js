let bGuess = document.getElementById("btnGuess");
let bReset = document.getElementById("btnReset");
let txtOutput = document.getElementById("output");
let txtNumber = document.getElementById("number");
let txtGoes = 0;
let randNum = 0;
let gameOver = false;

function genNumber() {
    do {
        randNum = Math.floor(Math.random() * 101);
        //console.log("HERE " + randNum);
    }
    while(randNum < 1);
}

//Test for 1 - 100 inclusive
function test(){
    for(i=0; i< 100000; i++)
    {
        genNumber();
        if (randNum == 0)
            {
                console.log(randNum);
            }
            if (randNum == 100)
            {
                console.log(randNum);
            }
            if (randNum > 100)
            {
                console.log(randNum);
            }
    }
}


bGuess.addEventListener("click", guess);
bReset.addEventListener("click", resetGame);

genNumber();

function guess() {
    txtGoes++;
    let x = Number(txtNumber.value);
    let a = randNum + 10;
    let b = randNum - 10;
    let c = randNum + 30;
    let d = randNum - 30;
    let hl="";
    
    txtNumber.focus();
    
    if(gameOver == false) {
        if(x > 100 || x < 1 || isNaN(x) ){
            txtOutput.value = "Please enter a number from 1 to 100 to play!";
            txtOutput.className = "yellow";
            txtGoes--;
        }
        else if (x == randNum)
            {
                txtOutput.value = "You Are A Winner!\nSo far you have had " + txtGoes + " guesses to guess it.\nPlay again!!!";
                txtOutput.className = "green";
                gameOver = true;
            }
        else if (a >= x && b <= x)
            {
                if(x > randNum){
                        hl = "High";
                    }
                else {
                    hl = "Low";
                }
               txtOutput.value = "Your Guess is too " + hl + "!\nSo far you have had " + txtGoes + " guesses to guess it.\nHave another guess."; 
                //console.log("Withing 10 - HOT");
               txtOutput.className = "red";
            }
        else if (c >= x && d <= x)
            {
                if(x > randNum){
                        hl = "High";
                    }
                else {
                    hl = "Low";
                }
                txtOutput.value = "Your Guess is too " + hl + "!\nSo far you have had " + txtGoes + " guesses to guess it.\nHave another guess."; 
               //console.log("Withing 30 - COLD");
               txtOutput.className = "blue";
            }
        else {
            if(x > randNum){
                        hl = "High";
                    }
                else {
                    hl = "Low";
                }
                txtOutput.value = "Your Guess is too " + hl + "!\nSo far you have had " + txtGoes + " guesses to guess it.\nHave another guess."; 
            //console.log("FAR - WHITE");
            txtOutput.className = "clear";
        }
        txtNumber.value="";
    }
    else {
        txtOutput.value = "You already won! Well Done, please press reset to play again!";
    }
}

function resetGame() {
    txtGoes = 0;
    txtOutput.value ="";
    txtNumber.value ="";
    txtOutput.className = "clear";
    gameOver = false;
    randNum = 0;
    genNumber();
}
             