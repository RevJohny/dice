// var randomNumber = Math.floor((Math.random()*6))+1;
// var image = "./images/dice"+randomNumber+".png";


function randomImage(img){
    var randomNumber = Math.floor((Math.random()*6))+1;
    var image = "./images/dice"+randomNumber+".png";
    document.querySelector(img).setAttribute("src",image);
    return randomNumber;
}
var player1=randomImage(".img1");
var player2=randomImage(".img2");
if(player1>player2){
    document.querySelector("h1").innerHTML="Player 1 wins! 🚩";
}
else if(player1===player2){
    document.querySelector("h1").innerHTML="Draw!";

}
else{
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}