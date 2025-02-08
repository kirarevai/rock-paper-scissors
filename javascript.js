function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue >= 0.67) {return "rock";}
    else if (randomValue <= 0.33) {return "paper";}
    else {return "scissors";}
}

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    let computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "paper")
    {
        computerScore++;
        updateResults("You lose! Paper beats Rock.");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") 
    {
        humanScore++;
        updateResults("You win! Paper beats Rock.");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") 
    {
        humanScore++;
        updateResults("You win! Rock beats scissors.");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        computerScore++;
        updateResults("You lose! Rock beats scissors.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        computerScore++;
        updateResults("You lose! Scissors beats paper.");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore++;
        updateResults("You win! Scissors beats paper.");
    }
    else if (humanChoice === computerChoice) 
    {
        updateResults("Tie!");
    }
    else {
        updateResults("Invalid input! Please choose rock, paper, or scissors.")
    }    

    if (humanScore === 5) {

        updateResults("Game over, You win!\nChoose to play again!"),
        resetGame();

    }

    else if (computerScore === 5) {
        updateResults("Game over, the computer wins!\nChoose to play again!"),
        resetGame();
    }

    updateRunningScore();

    }


    function resetGame() {

        humanScore = 0;
        computerScore = 0;
        
    }    


const rock = document.createElement("button");
rock.id = "rock";
rock.textContent = "Rock";
document.body.appendChild(rock);
rock.addEventListener("click", () => {
    playRound("rock");
})

const paper = document.createElement("button");
paper.id = "paper";
paper.textContent = "Paper";
document.body.appendChild(paper);
paper.addEventListener("click", () => {
    playRound("paper");
})

const scissors = document.createElement("button");
scissors.id = "scissors";
scissors.textContent = "Scissors";
document.body.appendChild(scissors);
scissors.addEventListener("click", () => {
    playRound("scissors");
})

const results = document.createElement("div");
results.textContent = "";
document.body.appendChild(results);

function updateResults(message) {
    results.textContent = message;
}

const runningScore = document.createElement("div");
runningScore.textContent = "Human: 0, Computer: 0";
document.body.appendChild(runningScore);

function updateRunningScore() {
    runningScore.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
}

