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
console.log(getComputerChoice());

