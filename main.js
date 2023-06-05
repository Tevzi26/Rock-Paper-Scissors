function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie"
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")) 
    {
        return "Player wins"
    } else {
        return "Computer wins"
    }



};


const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))
