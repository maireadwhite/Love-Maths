//wait for the DOM to finish before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");


for (let button of buttons) {
    button.addEventListener("click",function() {
        if (this.getAttribute("data-type")==="submit") {
            alert("You Clicked Submit!");
        } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);

        }
    });

}

runGame("addition");

});

//create a doc string syntax-used to describe functions//
/**
 * The main game "loop", called when the script is first loaded
 * and after the users answers has been processed
 * */

function runGame(gameType) {
    //Create two random numbers between 1 and 25//
    let num1 = Math.floor(Math.random () * 25) + 1;
    let num2 = Math.floor(Math.random () * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQueston(num1, num2);
    } else {
        alert(`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gameType}. Aborting!`;  //stops game from running and whatever we supply as an error messaage here will send to the console for debugging//
    }

}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}
//operand1 and operand2 are the two arguments for the addition function//
function displayAdditionQueston(operand1, operand2) {
    //the following interrogates the HTML//
    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}