var randomNumber1;
var diceNumber1 = Math.floor(Math.random(randomNumber1)*6) + 1;
var diceNumber2 = Math.floor(Math.random(randomNumber1)*6) + 1;

if(diceNumber1 === 1){
    document.querySelector(".img1").setAttribute("src" , "./images/dice1.png");
}

else if(diceNumber1 === 2){
    document.querySelector(".img1").setAttribute("src" , "./images/dice2.png");
}

else if(diceNumber1 === 3){
    document.querySelector(".img1").setAttribute("src" , "./images/dice3.png");
}

else if(diceNumber1 === 4){
    document.querySelector(".img1").setAttribute("src" , "./images/dice4.png");
}

else if(diceNumber1 === 5){
    document.querySelector(".img1").setAttribute("src" , "./images/dice5.png");
}

else if(diceNumber1 === 6){
    document.querySelector(".img1").setAttribute("src" , "./images/dice6.png");
}


if(diceNumber2 === 1){
    document.querySelector(".img2").setAttribute("src" , "./images/dice1.png");
}

else if(diceNumber2 === 2){
    document.querySelector(".img2").setAttribute("src" , "./images/dice2.png");
}

else if(diceNumber2 === 3){
    document.querySelector(".img2").setAttribute("src" , "./images/dice3.png");
}

else if(diceNumber2 === 4){
    document.querySelector(".img2").setAttribute("src" , "./images/dice4.png");
}

else if(diceNumber2 === 5){
    document.querySelector(".img2").setAttribute("src" , "./images/dice5.png");
}

else if(diceNumber2 === 6){
    document.querySelector(".img2").setAttribute("src" , "./images/dice6.png");
}

if(diceNumber1 > diceNumber2){
    document.querySelector(".container h1").innerHTML = "Player 1 wins";
}

else if(diceNumber2 > diceNumber1){
    document.querySelector(".container h1").innerHTML = "Player 2 wins";
}

else if(diceNumber1 === diceNumber2){
    document.querySelector(".container h1").innerHTML = "Draw";
}