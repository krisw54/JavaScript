// JavaScript Document

let myAnimation = [document.getElementById("sun"), document.getElementById("car"), document.getElementById("ppl"), document.getElementById("ppl1"), document.getElementById("end")] ;


let btnSs = document.getElementById("btnStartStop");

btnSs.addEventListener("click", changeAnimationState);

function changeAnimationState(){
	
	for(let i = 0; i<myAnimation.length;i++)
	{
		if (myAnimation[i].style.WebkitAnimationPlayState =="paused" ||  
			myAnimation[i].style.AnimationPlayState =="paused"){
			myAnimation[i].style.WebkitAnimationPlayState ="running";
			myAnimation[i].style.AnimationPlayState ="running";
			btnSs.innerHTML="Pause";
		} else {
			myAnimation[i].style.WebkitAnimationPlayState ="paused";
			myAnimation[i].style.AnimationPlayState ="paused";
			btnSs.innerHTML="Play";
		}
	}
}
