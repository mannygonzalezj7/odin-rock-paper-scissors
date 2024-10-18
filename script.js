// Assign global variables for score
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.random();
    let computerChoice = "";

    // Use Math.random() function which assigns a value from 0-1 to randomly choose an option
    if (num <= 1/3){
        computerChoice = "Rock";
    } else if (num <= 2/3){
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }

    // Return the computerChoice
    return computerChoice;
}


function getHumanChoice() {
    // Let user enter prompt 
    let userChoice = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\":");

    // Check if input is null
    if (userChoice === null){
        return null;
    }
    
    // Check validity of input
    if (userChoice === "" || (userChoice.toLowerCase() != "rock" && userChoice.toLowerCase() != "paper" && userChoice.toLowerCase() != "scissors")){
        console.log("Not a valid input. Please check your spelling and try again.");
        return getHumanChoice();
    }

    // Return user prompt as case-insensitive
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // Check if input is null
    if (humanChoice === null){
        return;
    }

    // Nested if-statements to evaluate option
    console.log(`The computer chose: ${computerChoice}!`);
    if (computerChoice == "Rock"){
        if (humanChoice == "rock"){
            console.log("You tie! You both chose Rock");
        } else if (humanChoice == "paper") {
            humanScore += 1;
            console.log("You win! Paper beats Rock.");
        } else { // User chose Scissors
            computerScore += 1;
            console.log("You lose! Rock beats Scissors.");
        }
    } else if (computerChoice == "Paper") {
        if (humanChoice == "rock"){
            computerScore += 1;
            console.log("You lose! Paper beats Rock.");
        } else if (humanChoice == "paper") {
            console.log("You tie! You both chose Paper.");
        } else { // User chose Scissors
            humanScore += 1;
            console.log("You win! Scissors beats Paper");
        }
    } else { // Computer chose Scissors
        if (humanChoice == "rock"){
            humanScore += 1;
            console.log("You win! Rock beats Scissors.")
        } else if (humanChoice == "paper") {
            computerScore += 1;
            console.log("You lose! Scissors beats Paper.")
        } else { // User chose Scissors
            console.log("You tie! You both chose Scissors.")
        }
    }
}

function playGame () {
    humanScore = 0;
    computerScore = 0;

    // Iterate the game first to three
    for(let i = 0; humanScore < 3 && computerScore < 3; i++){
        console.log(`Round ${i+1}:`);

        const humanChoice = getHumanChoice();
        if (humanChoice === null){
            console.log("Game ended by user. Refresh to play again.")
            break;
        }

        playRound(humanChoice, getComputerChoice());
        console.log(`The score is now ${humanScore}:${computerScore}`);
    }
}

playGame();