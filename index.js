let yourscore = 0, pcscore = 0;

const matchups = {
    rock: { loses: 'paper', beats: 'scissors' },
    paper: { loses: 'scissors', beats: 'rock' },
    scissors: { loses: 'rock', beats: 'paper' }
}

function computerPlay() {
    let selection = '';
    switch (Math.floor(Math.random() * Math.floor(3))) {
        case 0:
            selection = 'rock'
            break;
        case 1:
            selection = 'paper'
            break;
        case 2:
            selection = 'scissors'
            break;
        default:
            break;
    }
    return selection;
}

function playRound(playerSelection, computerSelection) {
    if (matchups[playerSelection.toLowerCase()].beats === computerSelection) {
        yourscore++
        document.getElementById("demo").innerHTML = `You win, ${playerSelection} beats ${computerSelection}. <br> Your Score: ${yourscore} \t PC Score: ${pcscore}`;
        return
    }else if (matchups[playerSelection.toLowerCase()].loses === computerSelection) {
        pcscore++
        document.getElementById("demo").innerHTML = `You lose, ${playerSelection} loses to ${computerSelection}. <br> Your Score: ${yourscore} \t PC Score: ${pcscore}`;
        return
    } else {
        document.getElementById("demo").innerHTML = `It's a tie, you both chose ${playerSelection}. <br> Your Score: ${yourscore} \t PC Score: ${pcscore}`;
        return 
    }
}

function play(playerSelection) {
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    return
}

function resetGame() {
    yourscore = 0;
    pcscore = 0;
    document.getElementById("demo").innerHTML ='';
}