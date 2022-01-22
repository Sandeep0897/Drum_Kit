


//mouse click
for(var i=0; i<7;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var  character1 = this.innerHTML;
name(character1);
Animatebutton(character1);

    });
}



//keyword pressed
document.addEventListener("keydown",function(character1){
   name(character1.key);
   Animatebutton(character1.key);

});

//animation
function Animatebutton(character1){

   document.querySelector("." + character1).classList.add("pressed");
   setTimeout(function(){
     document.querySelector("." + character1).classList.remove("pressed");
   },100);

}



//function to produce sound
function name(letter){
switch(letter){
  case 'w':
    var audio = new Audio("sounds/crash.mp3").play();
    break;


    case 'a':
    var audio = new Audio("sounds/kick-bass.mp3").play();
    break;

    case 's':
    var audio = new Audio("sounds/snare.mp3").play();
    break;


    case 'l':
    var audio = new Audio("sounds/tom-1.mp3").play();
    break;

    case 'd':
    var audio = new Audio("sounds/tom-2.mp3").play();
    break;

    case 'j':
    var audio = new Audio("sounds/tom-3.mp3").play();
    break;

    case 'k':
    var audio = new Audio("sounds/tom-4.mp3").play();
    break;


    default:
    break;

}
}
