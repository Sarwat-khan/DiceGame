
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "Dice" + randomNumber1 + ".PNG";  // 1- 6 dice.png
    var imagesrc1 =   randomImage1; // dice1.png    dice3.png
    document.querySelectorAll("img")[0].setAttribute("src", imagesrc1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "Dice" + randomNumber2 + ".PNG";
    var imagesrc2 =   randomImage2;
    document.querySelectorAll("img")[1].setAttribute("src", imagesrc2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Won!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Won!";
    } else {
        document.querySelector("h1").innerHTML = "Game Draw!";
    }
}

document.getElementById("rollButton").onclick = rollDice;