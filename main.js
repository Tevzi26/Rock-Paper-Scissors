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

function getPlayerChoice() {
    while (true) {
        let choice = prompt("Rock, paper, scissors").toLowerCase()
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
        }
    };

    
}

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

for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    console.log("player has chosen: " + playerSelection + " computer has chosen: " + computerSelection);

    console.log(playRound(playerSelection, computerSelection));
}

