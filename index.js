var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImg = "dice" + randomNumber1 + ".png";

var imgSource = "images/" + randomImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", imgSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "dice" + randomNumber2 + ".png";

var imgSource2 = "images/" + randomImg2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", imgSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
} else{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}