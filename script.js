let score = {
    player: 0,
    computer: 0
};

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random()*3);
    computerButton(options[i]);
    return options[i];
}
function computerButton(computerOption) {
    document.querySelector("."+computerOption).style.backgroundColor = 'yellow';
    setTimeout(changeColorCpu, 500, computerOption);
}
function changeColorCpu(computerOption) {
    document.querySelector("."+computerOption).style.backgroundColor = '#5cdb95';
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return ("Tie");
    }
    else if(playerSelection == "rock" && computerSelection == "paper") {
        score.computer++;
        return ("You Lose!");
    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        score.player++;
        return ("You Win!");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        score.player++;
        return ("You Win!");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock") {
        score.computer++;
        return ("You Lose!");
    }
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        score.player++;
        return ("You Win!");
    }
    else if(playerSelection == "paper" && computerSelection == "scissors") {
        score.computer++;
        return ("You Lose!");
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
    setTimeout(changeColor, 500, selectedOption);
}

function changeColor(selectedOption) {
    document.getElementById(selectedOption).style.backgroundColor = '#5cdb95';
}

