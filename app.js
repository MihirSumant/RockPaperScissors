let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';
let numOfGames = 0;
let numOfDraws = 0;

const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
const playerChoiceImg = document.getElementById('playerChoice');
const playAgain = document.getElementById('playAgain'); 
const computerChoiceImg = document.getElementById('computerChoice');

const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const finalScoreDisplay = document.getElementById('currentScore');
const result = document.getElementById('matchResult');
const gameCount = document.getElementById('numOfGames');
const drawCount = document.getElementById('numofDraws');

const getComputerChoice = () => {
  let rolledNumber = Math.floor(Math.random()*3);
  switch(rolledNumber){
    case 0:
      computerChoiceImg.src = './resources/rock-hand.png';
      return 'rock';
      break;
    case 1:
      computerChoiceImg.src = './resources/paper-hand.png';
      return 'paper';
      break;
    case 2:
      computerChoiceImg.src = './resources/scissors-hand.png';
      return 'scissors';
      break;
  }
}

const determineWinner = (playerChoice, computerChoice) => {
  if(playerChoice === computerChoice) {
    numOfDraws++;
    return "The game is a draw!";
  }
  else {
    if(playerChoice === 'rock') {
      if(computerChoice === 'scissors') {
        playerScore++;
        return `You chose ${playerChoice}, the computer chose ${computerChoice}, you win!`;
      }
      else {
        computerScore++;
        return `You chose ${playerChoice}, the computer chose ${computerChoice}, you lose!`;
      }
    }
    else if(playerChoice === 'paper') {
      if(computerChoice === 'rock') {
        playerScore++;
        return `You chose ${playerChoice}, the computer chose ${computerChoice}, you win!`;
      }
      else {
        computerScore++;
        return `You chose ${playerChoice}, the computer chose ${computerChoice}, you lose!`;
      }
    }
    else {
      if(computerChoice === 'paper') {
        playerScore++;
        return `You chose ${playerChoice}, the computer chose ${computerChoice}, you win!`
      }
      else{
        computerScore++;
        return `You chose ${playerChoice}, the computer chose ${computerChoice}, you lose!`;
      }
    }
  }
}

rock.onclick = () => {
  numOfGames++;  
  paper.disabled = true;
  scissors.disabled = true;
  playerChoiceImg.src = './resources/rock-hand.png';
  playerChoiceImg.alt = 'hand emoji for rock';
  playerChoice = 'rock';
  computerChoice = getComputerChoice();
  result.innerHTML = determineWinner(playerChoice, computerChoice);
  rock.disabled = true;
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
  gameCount.innerHTML = `Games played: ${numOfGames}`;
  drawCount.innerHTML = `Draws: ${numOfDraws}`;
  finalScoreDisplay.innerHTML = `Current Score: ${playerScore} - ${computerScore}`;
}

paper.onclick = () => {
  numOfGames++;
  rock.disabled = true;
  scissors.disabled = true;
  playerChoiceImg.src = './resources/paper-hand.png';
  playerChoiceImg.alt = 'hand emoji for paper';
  playerChoice = 'paper';
  computerChoice = getComputerChoice();
  result.innerHTML = determineWinner(playerChoice, computerChoice);
  paper.disabled = true;
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
  finalScoreDisplay.innerHTML = `${playerScore} - ${computerScore}`;
}

scissors.onclick = () => {
  numOfGames++;  
  paper.disabled = true;
  rock.disabled = true;
  playerChoiceImg.src = './resources/scissors-hand.png';
  playerChoiceImg.alt = 'hand emoji for scissors';
  playerChoice = 'scissors';
  computerChoice = getComputerChoice();
  result.innerHTML = determineWinner(playerChoice, computerChoice);
  scissors.disabled = true;
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
  finalScoreDisplay.innerHTML = `${playerScore} - ${computerScore}`;
}



playAgain.onclick = () => {
  playerChoiceImg.src = './resources/question_black.png';
  playerChoiceImg.alt = 'question mark';
  computerChoiceImg.src = './resources/question_black.png';
  computerChoiceImg.alt = 'question mark';
  result.innerHTML = '...';  
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}