let rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
const playerChoiceImg = document.getElementById('playerChoice');

rock.onclick = () => {  
  paper.disabled = true;
  scissors.disabled = true;
}

paper.onclick = () => {
  rock.disabled = true;
  scissors.disabled = true;  
}

scissors.onclick = () => {  
  paper.disabled = true;
  rock.disabled = true;
}