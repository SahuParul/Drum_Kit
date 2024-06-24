var numberOfDrumButton=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButton;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener('click', function()
    {
        var buttonInnerHtml=this.innerHTML;
        makesound(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    addAnimation(event.key);
});
function makesound(key)
{
    switch(key)
        {
            case "w":
                var tom1=new Audio("thriller.mp3");
                tom1.play();
            break; 
            case "a":
                var tom2=new Audio("chbell.wav");
                tom2.play();
            break; 
            case "s":
                var tom3=new Audio("tom-3.mp3");
                tom3.play();
            break; 
            case "d":
                var tom4=new Audio("tone.mp3");
                tom4.play();
            break; 
            case "j":
                var snare=new Audio("snare.mp3");
                snare.play();
            break; 
            case "k":
                var kick=new Audio("kick-bass.mp3");
                kick.play();
            break; 
            case "l":
                var roll=new Audio("drum-roll-please-6386.mp3");
                roll.play();
            break;
            case "p":
                var crash=new Audio("crash.mp3");
                crash.play();
            break;
            case "r":
                var whoose=new Audio("whoosh-drum-hits-169007 - Copy.mp3");
                whoose.play();
            break;
            case "t":
                var flute=new Audio("flute.wav");
                flute.play();
            break;
            default:
                console.log(buttonInnerHtml);      
        }
} 
function addAnimation(currentkey)
{
    var activebutton = document.querySelector("." +currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}