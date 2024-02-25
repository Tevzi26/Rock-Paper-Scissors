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
        return "It's a tie!"
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")) 
    {
        playerS = playerS + 1;
        return "Player beats computer!"
    } else {
        computerS = computerS + 1;
        return "Computer beats player!"   
    }



};

let round = 0;
let playerS = 0;
let computerS = 0;

const ps = document.querySelector('#ps');
const cs = document.querySelector('#cs')
const res = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    let result = playRound(button.id, getComputerChoice());
    res.textContent = result;

    if (playerS == 5) {
        alert("Player wins!");
        playerS = 0;
        computerS = 0;
    } else if (computerS == 5) {
        alert("Computer wins!")
        playerS = 0;
        computerS = 0;
    }
    ps.textContent = playerS;
    cs.textContent = computerS;
  });
});

