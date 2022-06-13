//wait for the DOM to finish before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");


for (let button of buttons) {
    button.addEventListener("click",function() {
        if (this.getAttribute("data-type")==="submit") {
            alert("You Clicked Submit!");
        } else 
            {let gameType = this.getAttribute("data-type");
            alert(`You Clicked ${gameType}`);

        }
    });

}

});

//create a doc string syntax-used to describe functions//
/**
 * The main game "loop", called when the script is first loaded
 * and after the users answers has been processed
 * */

function runGame() {
    //Creaate two random numbers between 1 and 25//
    let num1 = Math.floor (Math.random () * 25 ) + 1;
    let num2 = Math.floor (Math.random () * 25 ) + 1;

}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQueston() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}