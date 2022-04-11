let playerWins = 0, compWins = 0;

function computerPlay(){
    const compOptions = ['Rock', 'Paper','Sisscors'];
    const choiceNum = Math.floor(Math.random() * 3);
    return compOptions[choiceNum];
}

function playRound(playerSelection, computerSelection){
    const caseInPlayerSel = playerSelection.toUpperCase();
    const caseInCompSel = computerSelection.toUpperCase();
    if(caseInPlayerSel ===  caseInCompSel){
       let result = 'Looks like you tied!';
       return result;
    }else if(caseInPlayerSel === 'ROCK'){
        if(caseInCompSel === 'SISSCORS'){
            playerWins++;
            return 'You Win! Rock beats Sisscors';
        }else{
            compWins++;
            return 'You lose! Paper beats Rocks';
        }
    }else if(caseInCompSel === 'PAPER'){
        if(caseInCompSel === 'ROCK'){
            playerWins++;
            return 'You Win! Paper beats Rock';
        }else{
            compWins++;
            return 'You lose! Sisscors beats Paper';
        }
    }else if(caseInCompSel === 'SISSCORS'){
        if(caseInCompSel === 'PAPER'){
            playerWins++;
            return 'You win! Sisscors beats Paper';
        }else{
            compWins++;
            return 'You lose! Rock beats Sisscors';
        }
    }
}
//console.log(playRound(playerSelection, computerSelection));

function game(){
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

function userInput(){
    let choice = prompt('Choose between Rock Paper and Sisscor', '');
    return choice;
}
//console.log(playRound(userInput(), computerPlay()));
game();
