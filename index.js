var playerName1 = prompt("Enter Player1 Name");

document.querySelectorAll("P")[0].innerHTML = playerName1;

var playerName2 = prompt("Enter Player2 Name");

document.querySelectorAll("P")[1].innerHTML = playerName2;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 " + playerName1 + " won!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = playerName2 + " won! " + "🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw.NO winner...";
}