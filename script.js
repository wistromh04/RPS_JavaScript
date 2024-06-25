let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let humanScore = 0;
let computerScore = 0;
let winner = null;

function getComputerChoice() {
    let computersChoice = Math.floor((Math.random() * 3) + 1 );
    if (computersChoice == 1) {
        return rock;
    } else if (computersChoice == 2){
        return paper;
    } else {
        return scissors;
    }
}


function playRound(playerSelection){
    if (winner !== null) {
        return; // Exit function if a winner is already declared
    }

    let computerChoice = getComputerChoice();
    let humanChoice =  playerSelection.toLowerCase();
    let resultDiv = document.getElementById("result");

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie! Both chose "+ humanChoice +".";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDiv.textContent = "Human wins! Human chose " + humanChoice + " and computer chose " + computerChoice + ".";
        humanScore += 1;
    } else {
        resultDiv.textContent = "Computer wins! Human chose " + humanChoice + " and computer chose " + computerChoice +".";
        computerScore += 1;
    }
    updateScores();
    checkWinner();
}

//Updates the humanScore and computerScore divs after each round
function updateScores() {
    document.getElementById('humanScore').textContent = "Human Score: " + humanScore;
    document.getElementById('computerScore').textContent = "Computer Score: " + computerScore;
}

//Event listeners for the buttons - on click they pass the player selection to the playRound function
document.getElementById('rockBtn').addEventListener('click', function() {
    playRound('rock');
});

document.getElementById('paperBtn').addEventListener('click', function() {
    playRound('paper');
});

document.getElementById('scissorsBtn').addEventListener('click', function() {
    playRound('scissors');
});

//Checks if either player or computer score reaches 5 (Amount to win)
function checkWinner(){
    if (computerScore === 5){
        winner = "Computer";
        announceWinner("Computer");
    } else if (humanScore === 5){
        winner = "Human";
        announceWinner("Human");
    }
}

function announceWinner(winner) {
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = winner + " wins the game!";

    // Disable buttons after announcing winner
    document.getElementById('rockBtn').disabled = true;
    document.getElementById('paperBtn').disabled = true;
    document.getElementById('scissorsBtn').disabled = true;
}

function reset() {
    // Reset game state
    humanScore = 0;
    computerScore = 0;
    winner = null;
    updateScores();
    document.getElementById('result').textContent = '';
    document.getElementById('rockBtn').disabled = false;
    document.getElementById('paperBtn').disabled = false;
    document.getElementById('scissorsBtn').disabled = false;
}