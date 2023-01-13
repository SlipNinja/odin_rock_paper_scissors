const CHOICES = ['rock', 'paper', 'scissors'];
const MAX_ROUNDS = 10;
let score = [0, 0]; //[player, computer]

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function game() {

    let playerChoice;
    let computerChoice;
    let numberOfRounds = +prompt(`How many rounds do you want to play ? ( max ${MAX_ROUNDS} )`, "5");

    if(numberOfRounds > MAX_ROUNDS){
        numberOfRounds = MAX_ROUNDS;
    }

    for(let i = 1; i <= numberOfRounds; i++){
        // User choice
        playerChoice = prompt("Choose between rock, paper or scissors", "");

        // Computer choice
        computerChoice = getComputerChoice();
        
        // Play round
        console.log(playRound(playerChoice, computerChoice));

        // Display score
        console.log(`You have ${score[0]} points and the computer has ${score[1]}.`);
    }

    // Display final result
    if(score[0] > score[1]){
        console.log("You win !");
    } else if (score[1] > score[0]){
        console.log("You loose !");
    } else {
        console.log("The game ends in a draw !");
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        return `You both played ${playerSelection}, none of you get point.`;

    } else if(playerSelection == 'rock' && computerSelection == 'scissors'
    || playerSelection == 'paper' && computerSelection == 'rock'
    || playerSelection == 'scissors' && computerSelection == 'paper'){
        score[0]++;
        return `You played ${playerSelection} and the computer played ${computerSelection}, you get a point.`;

    } else if(playerSelection == 'rock' && computerSelection == 'paper'
    || playerSelection == 'paper' && computerSelection == 'scissors'
    || playerSelection == 'scissors' && computerSelection == 'rock'){
        score[1]++;
        return `You played ${playerSelection} and the computer played ${computerSelection}, computer get a point.`;

    } else { //wrong player input
        return 'Error : Wrong player input';
    }
}

game();