//wait for the DOM to finish before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");


for (let button of buttons) {
    button.addEventListener("click",function() {
        if (this.getAttribute("data-type")==="submit") {
           checkAnswer();
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

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    runGame(calculatedAnswer[1]);

    if (isCorrect) {
        alert(`Hey! You got it right! :D`);
    }else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }//this will tell user what the correct answer was//
}
/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"]; 
    }else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting!`;
        }
    
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