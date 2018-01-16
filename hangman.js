let btnS = document.getElementById("btnStart");
let txtOutput = document.getElementById("outputHM");
let pic = document.getElementById("hman");
let rndNum=0;
let word=null;
let dashed;
let correct=1;
let wrong=0;
let lettersG="";
let spaces=0;

btnS.addEventListener("click", startGame);
document.addEventListener("keypress", checkLetter);
document.addEventListener("keydown", keyP);

let sayings = ["A Diamond is Forever", "A Drop in The Ocean", "A Fate Worse Than Death", "Camera Cannot Lie","Cat Got Your Tongue","Charity Begins at Home","Easy as Pie","Eat My Hat","Walk The Walk","Last But Not Least"];

function genNumber() {
    rndNum = 0;
    while (rndNum == 0)
    {
        rndNum = Math.floor(Math.random() * 11);
    }
    return rndNum;
}

function dashLetters(letter){
    word = letter.toUpperCase();
    dashed = letter.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, "-");
    console.log(word);
    return dashed
}

function startGame(){
    dashed = dashLetters(sayings[genNumber()]);
    txtOutput.innerHTML = dashed;
    hman.setAttribute("src", "images/Hangman-"  + wrong + ".png");
}

function checkLetter(event){
    let letters = /^[A-Za-z]+$/;  
    if(event.key.match(letters)){
        useLetter(event.key.toUpperCase())
        lettersG = lettersG + event.key.toUpperCase();
    }
    else {
        alert("Please only enter letters A-Z");
    }
}

function useLetter(letter){
    if (word == null){
        txtOutput.innerHTML="Please Press Start To Begin!";
    }
    else
    {
        if (lettersG.includes(letter))
        {
            alert("You already used the letter: " + letter);
        }
        else if (word.includes(letter))
        {
            replaceLetter(letter);
            if ((correct + word.split(' ').length-1) == word.length)
            {
                txtOutput.innerHTML = "Well Done You Won The Game!";
                reset();
            }
        }
        else if(wrong < 6)
                {
                    wrong++;
                    hman.setAttribute("src", "images/Hangman-"  + wrong + ".png");
                }
                else
                {
                    txtOutput.innerHTML="Game Over! The Word Was: " + word;
                    reset();
                }
            }
        }

function replaceLetter(letter){
for (let count = 0; count < word.length; count++)
    {
      if (letter == word.substring(count, count + 1))
      {
        correct++;
        dashed = dashed.substring(0, count) + letter + dashed.substring(count + 1, dashed.length + 1);
        txtOutput.innerHTML = dashed;
      }
    }
}

function keyP(event) {
    if (event.key == "c")
         console.log("Cheat");
	if (event.key == "j")
		getJSON('res/sayings.json');
}

function reset(){
    rndNum=0;
    correct=1;
    wrong=0;
    word=null;
    lettersG="";
    spaces=0;
}

function getJSON(url)
{
    let AJAX_req = new XMLHttpRequest();
    AJAX_req.open("GET", url, true);
	
    AJAX_req.onreadystatechange = function(){
        if (AJAX_req.readyState == 4 && 
            AJAX_req.status == 200){
            //AJAX_req.responseText holds data transferred
            let response = JSON.parse(AJAX_req.responseText);
            processData(response);
        }
    }
    AJAX_req.send(); 
}

function processData(data){
    console.log(data.sayings);  
}


