const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
let playerChoiceImg = document.getElementById('playerChoice');

rock.onclick = () => {  
  paper.disabled = true;
  scissors.disabled = true;
  playerChoiceImg.src = './resources/rock-hand.png';
  playerChoiceImg.alt = 'hand emoji for rock';  
}

paper.onclick = () => {
  rock.disabled = true;
  scissors.disabled = true;
  playerChoiceImg.src = './resources/paper-hand.png';
  playerChoiceImg.alt = 'hand emoji for paper';
}

scissors.onclick = () => {  
  paper.disabled = true;
  rock.disabled = true;
  playerChoiceImg.src = './resources/scissors-hand.png';
  playerChoiceImg.alt = 'hand emoji for scissors';
}