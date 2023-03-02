//Generate a random choice for a computer
function getComputerChoice(){
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    let compChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
        if (compChoice == 0){
            let compChoice = "Rock";
        } if (compChoice == 1){
            let compChoice = "Paper";
        } if (compChoice == 2){
            let compChoice = "Scissors";
        }
        return compChoice;
    }

let compChoice = getComputerChoice ();

//Player chooses Rock, Paper, Scissors
let humanChoice = prompt("Choose Rock, Paper, or Scissors:");

//Results
let result;
if (humanChoice === compChoice) {
    result = "It's a tie!";
} else if ((humanChoice === "Rock" && compChoice === "Scissors") || (humanChoice === "Scissors" && compChoice === "Paper") || (humanChoice === "Paper" && compChoice === "Rock")) {
    result = "You win!";
} else {
    result = "Computer wins!";
}

console.log(`You chose ${humanChoice}, computer chose ${compChoice}. ${result}`);


