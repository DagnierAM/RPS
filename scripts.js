let playerWins = 0, compWins = 0; 
const results = document.querySelector('#results');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const images = document.querySelectorAll('img');
const button = document.querySelector('button');

function computerPlay(){
    const compOptions = ['ROCK', 'PAPER','SISSCORS'];
    const choiceNum = Math.floor(Math.random() * 3);
    return compOptions[choiceNum];
}

function playRound(playerSelection, computerSelection){
    //const caseInPlayerSel = playerSelection.toUpperCase();
    //const caseInCompSel = computerSelection.toUpperCase();
    if(playerSelection ===  computerSelection){
        results.textContent = 'Looks like you tied!';
    }else if(playerSelection === 'ROCK'){
        if(computerSelection === 'SISSCORS'){
            playerScore.textContent = ++playerWins;
            results.textContent = 'You Win! Rock beats Sisscors';
        }else{
            computerScore.textContent = ++compWins;
            results.textContent = 'You lose! Paper beats Rock';
        }
    }else if(playerSelection === 'PAPER'){
        if(computerSelection === 'ROCK'){
            playerScore.textContent = ++playerWins;
            results.textContent = 'You Win! Paper beats Rock';
        }else{
            computerScore.textContent = ++compWins;
            results.textContent = 'You lose! Sisscors beats Paper';
        }
    }else if(playerSelection === 'SISSCORS'){
        if(computerSelection === 'PAPER'){
            playerScore.textContent = ++playerWins;
            results.textContent = 'You win! Sisscors beats Paper';
        }else{
            computerScore.textContent = ++compWins;
            results.textContent = 'You lose! Rock beats Sisscors';
        }
    }
    checkWinner();
}

function userInput(e){
    let playerChoice = this.classList.value;
    e.stopPropagation(); 
    this.classList.add('playing');
    playRound(playerChoice, computerPlay());
}
images.forEach(img => img.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip it if its not a transform
    this.classList.remove('playing');
}

images.forEach(img => img.addEventListener('click', userInput));

button.addEventListener('click', () => {
    window.location.reload();
    return false;
});

function checkWinner(){
    if(playerWins === 5){
        results.textContent = 'Congratulations You\'ve Won!';
        images.forEach(img => img.removeEventListener('click', userInput));
    }else if(compWins === 5){
        results.textContent = 'Bummer! You\'ve Lost to a Machine!';
        images.forEach(img => img.removeEventListener('click', userInput));
    }
}



