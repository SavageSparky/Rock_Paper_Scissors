let score = {
    player: 0,
    computer: 0
};

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random()*3);
    // computerButton(option[i]);
    return options[i];
}
function computerButton(computerOption) {
    document.getElementsByClassName(computerOption).style.backgroundColor = 'yellow';
    setTimeout(changeColor, 500, selectedOption);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return ("Tie");
    }
    else if(playerSelection == "rock" && computerSelection == "paper") {
        score.computer++;
        return ("You Lose! Paper beats Rock");
    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        score.player++;
        return ("You Win! Paper beats Rock");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        score.player++;
        return ("You Win! Rock beats scissors");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock") {
        score.computer++;
        return ("You Lose! Rock beats scissors");
    }
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        score.player++;
        return ("You Win! Scissors beats paper");
    }
    else if(playerSelection == "paper" && computerSelection == "scissors") {
        score.computer++;
        return ("You Lose! Scissors beats paper");
    }
}

function playerPlay(selectedOption) {
    const playerSelection = selectedOption.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById("result").innerHTML = result;
    document.getElementById("computerScore").innerHTML = score.computer;
    document.getElementById("playerScore").innerHTML = score.player;
    console.log(result);
    buttonFunction(selectedOption.id);
}

function buttonFunction(selectedOption) {
    document.getElementById(selectedOption).style.backgroundColor = 'yellow';
    t = setTimeout(changeColor, 500, selectedOption);
}

function changeColor(selectedOption) {
    document.getElementById(selectedOption).style.backgroundColor = '#5cdb95';
}

