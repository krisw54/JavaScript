let myAnimation = document.getElementById("catWalk");
myAnimation.addEventListener("click", changeAnimationState);

myAnimation.style.WebkitAnimationPlayState ="paused";
myAnimation.style.AnimationPlayState ="paused";

function changeAnimationState(){
    if (myAnimation.style.WebkitAnimationPlayState =="paused" ||  
        myAnimation.style.AnimationPlayState =="paused"){
        myAnimation.style.WebkitAnimationPlayState ="running";
        myAnimation.style.AnimationPlayState ="running";
    } else {
        myAnimation.style.WebkitAnimationPlayState ="paused";
        myAnimation.style.AnimationPlayState ="paused";
    }
}
