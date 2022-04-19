let playerWins = 0, compWins = 0; let playerChoice;
const para = document.querySelector('#results');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

function computerPlay(){
    const compOptions = ['ROCK', 'PAPER','SISSCORS'];
    const choiceNum = Math.floor(Math.random() * 3);
    return compOptions[choiceNum];
}

function playRound(playerSelection, computerSelection){
    //const caseInPlayerSel = playerSelection.toUpperCase();
    //const caseInCompSel = computerSelection.toUpperCase();
    if(playerSelection ===  computerSelection){
        para.textContent = 'Looks like you tied!';
    }else if(playerSelection === 'ROCK'){
        if(computerSelection === 'SISSCORS'){
            playerScore.textContent = ++playerWins;
            para.textContent = 'You Win! Rock beats Sisscors';
        }else{
            computerScore.textContent = ++compWins;
            para.textContent = 'You lose! Paper beats Rock';
        }
    }else if(playerSelection === 'PAPER'){
        if(computerSelection === 'ROCK'){
            playerScore.textContent = ++playerWins;
            para.textContent = 'You Win! Paper beats Rock';
        }else{
            computerScore.textContent = ++compWins;
            para.textContent = 'You lose! Sisscors beats Paper';
        }
    }else if(playerSelection === 'SISSCORS'){
        if(computerSelection === 'PAPER'){
            playerScore.textContent = ++playerWins;
            para.textContent = 'You win! Sisscors beats Paper';
        }else{
            computerScore.textContent = ++compWins;
            para.textContent = 'You lose! Rock beats Sisscors';
        }
    }
}
//console.log(playRound(playerSelection, computerSelection));

/*function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(userInput(), computerPlay()));
        console.log(`Score: User:${playerWins} - CPU:${compWins}`)
        console.log('');
        if (playerWins > compWins && i == 4) {
            console.log(`You won ${playerWins} - ${compWins}.`)
        } else if (playerWins < compWins && i == 4) {
            console.log(`You lost ${playerWins} - ${compWins}.`)
        } else if (playerWins == compWins && i == 4) {
            console.log(`You tied ${playerWins} - ${compWins}.`)
        } 
    }
}
*/

function userInput(e){
    playerChoice = this.classList.value;
    e.stopPropagation(); 
    //images.classList.add('playing');
    console.log(playRound(playerChoice, computerPlay()));
}

//console.log(playRound(userInput(), computerPlay()));
//game();
const images = document.querySelectorAll('img');
images.forEach(img => img.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip it if its not a transform
    this.classList.remove('playing');
}
images.forEach(img => img.addEventListener('click', userInput, {
    capture: false
}));


