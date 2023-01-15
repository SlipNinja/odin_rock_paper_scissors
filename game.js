const CHOICES = ['rock', 'paper', 'scissors'];
const MAX_ROUNDS = 10;
const score = [0, 0]; //[player, computer]

const log = document.querySelector('.log');
const scoreDisplay = document.querySelector('.score');

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(e) {

    let computerSelection = getComputerChoice();
    let playerSelection = e.target.textContent.toLowerCase();

    if(playerSelection == computerSelection){
        log.textContent = `You both played ${playerSelection}, none of you get point.`;

    } else if(playerSelection == 'rock' && computerSelection == 'scissors'
    || playerSelection == 'paper' && computerSelection == 'rock'
    || playerSelection == 'scissors' && computerSelection == 'paper'){
        score[0]++;
        log.textContent = `You played ${playerSelection} and the computer played ${computerSelection}, you get a point.`;

    } else if(playerSelection == 'rock' && computerSelection == 'paper'
    || playerSelection == 'paper' && computerSelection == 'scissors'
    || playerSelection == 'scissors' && computerSelection == 'rock'){
        score[1]++;
        log.textContent = `You played ${playerSelection} and the computer played ${computerSelection}, computer get a point.`;

    } else { //wrong player input
        log.textContent = 'Error : Wrong player input';
    }

    scoreDisplay.textContent = `Player : ${score[0]} - Computer : ${score[1]}`
}

function addListeners() {
    let btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click', playRound)
    });
}

addListeners();
