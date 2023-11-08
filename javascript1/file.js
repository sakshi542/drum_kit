var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonSelector=this.innerHTML;
        makeSound(buttonSelector);
        buttonAnimation(buttonSelector);
        console.log(this.style.color="white");

    });
}

function makeSound(buttonSelector){
    switch(buttonSelector){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        default:
            console.log(buttonSelector);
        
    }
}

document.addEventListener("keypress",function(even){
    makeSound(even.key);
    buttonAnimation(even.key);
});

function buttonAnimation(currEle){
    var activeButton=document.querySelector("."+currEle);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}