var randomNumber1=Math.random();
randomNumber1=randomNumber1*6+1;
randomNumber1=Math.floor(randomNumber1);

var randomImage1="dice"+randomNumber1+".png";
randomImagrSource1="images/"+randomImage1;
document.querySelectorAll("img")[0].setAttribute("src",randomImagrSource1);


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6+1;
randomNumber2=Math.floor(randomNumber2);

var randomImage2="dice"+randomNumber2+".png";
randomImagrSource2="images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImagrSource2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML= "player1 wins!!!";
}else{
  document.querySelector("h1").innerHTML= "player2 wins!!!";
}
