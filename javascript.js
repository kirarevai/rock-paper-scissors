function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue >= 0.67) {return "rock";}
    else if (randomValue <= 0.33) {return "paper";}
    else {return "scissors";}
}

let computerChoice = getComputerChoice();

function getHumanChoice() {
    let sign = prompt("Rock, paper or scissors?", "Rock").toLowerCase(); 
    if (sign === "rock") {return "rock";}
    else if (sign === "paper") {return "paper";}
    else if (sign === "scissors") {return "scissors";}
    else {return "That's not a valid choice!";}
}

let humanChoice = getHumanChoice();

    console.log(humanChoice);

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper")
    {
        computerScore++;
        console.log("You lose! Paper beats Rock.");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") 
    {
        humanScore++;
        console.log("You win! Paper beats Rock.");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") 
    {
        humanScore++;
        console.log("You win! Rock beats scissors.");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        computerScore++;
        console.log("You lose! Rock beats scissors.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        computerScore++;
        console.log("You lose! Scissors beats paper.");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore++;
        console.log("You win! Scissors beats paper.");
    }
    else if (humanChoice === computerChoice) 
    {
        console.log("Tie!");
    }
    else {
        console.log("Invalid input! Please choose rock, paper, or scissors.")
    }    

    }

    function playGame() {

    console.log("Starting round 1!");
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);


    console.log("Starting round 2!");
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log("Starting round 3!");
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log("Starting round 4!");
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log("Starting round 5!");
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice); 

    console.log("The game is over!");
    console.log(`Your final score is: ${humanScore}`);
    console.log(`Final computer's score is: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You're the winner!");
    }
    else if (computerScore > humanScore) {
     console.log("You lose!");
    }
    else {
        console.log("It's a tie!")
    }
}

playGame();