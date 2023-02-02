const gameValues= ["rock", "paper", "scissors"];
let playerCancelled = false,
ended = false,
scoreOfPlayer = 0,
scoreOfComputer = 0;
console.log("Welcome To The Game Of Rock,Papers,Scissors!!! Let's Get it!!")
game();

function computerPlay(){
    machineMoveGenerate=Math.random()
    if(machineMoveGenerate <0.34){
        return "rock"
      }else if(machineMoveGenerate <=0.67){
        return "paper"
      }else{
        return "scissors"
      }
}

function playerPlay(callback) {
    let playerSelection = prompt("Choose rock,paper or scissors: ");
    if (playerSelection === null) {
        gameCancelled("playerPlay");
        if (playerCancelled) {
            gameExit();
        } else {
            callback
        }
    }
    if (playerCancelled) {
        ended = true;
        return "game over";
    }
    if (playerSelection !== null && gameValues.includes(playerSelection.toLowerCase().trim())) {
        return playerSelection.toLowerCase().trim();
    } else {
        if (playerSelection !== null) {
            if (playerSelection === "") {
                alert("Choose from the given options only. Options available are 'rock','paper' or 'scissors")
            } else {
                console.log(`${playerSelection} is not invalid option. please choose from rock,paper or scissors`)
                alert(`${playerSelection} is not invalid option. please choose from rock,paper or scissors`);
            }
        }
        callback
    }
}

function oneRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) return "draw";
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === "paper") {
                return "computer"
            } else {
                return "player"
            };
        case 'paper':
            if (computerSelection === "scissors") {
                return "computer"
            } else {
                return "player"
            };
        case 'scissors':
            if (computerSelection === "scissors") {
                return "computer"
            } else {
                return "player"
            };
        case 'game over':
            return 'game over';
    }
}

function game() {
    let start = confirm("I spy someone who wants to do something interesting.\nThis is a perfect time kill. \nYou have to choose from rock, paper or scissors. \nThere are five rounds, draws don't count as a round.\nShall we start?");
    if (!start) {
        gameCancelled('game');
    } else {
        let rounds = 1;
        while (rounds <= 5) {
            let computerSelection = computerPlay(),
            playerSelection = playerPlay(),
            roundResult = oneRound(computerSelection, playerSelection);
            switch (roundResult) {
                case "computer":
                    console.log("Computer picked " + computerSelection + "\nYou picked " + playerSelection)
                    console.log(`You loose round number ${rounds}`);
                    rounds++;
                    scoreOfComputer++
                    break
                case "player":
                    console.log("Computer picked " + computerSelection + "\nYou picked " + playerSelection)
                    console.log(`You win round number ${rounds}`);
                    rounds++;
                    scoreOfPlayer++;
                    break
                case "draw":
                    console.log("Computer picked " + computerSelection + "\nYou picked " + playerSelection)
                    console.log(`It's a tie. You are stuck in round ${rounds}`);
                    break
                case "game over":
                    rounds = 6;
                    break
            }
        }
        gameExit();
    }
}

function gameCancelled(origin) {
    let cancellationMessage = confirm('Click Ok to confirm you want to leave the game');
    if (cancellationMessage) {
        playerCancelled = true;
        return
    } else if (origin === 'game') {
        game();
    }
}

function gameExit() {
    if (!ended) {

        if (playerCancelled) {
            alert("Thank you for hanging out with me today. Let's do this again when you are free");
        } else {
            if (scoreOfPlayer > scoreOfComputer) {
                console.log(`You win ${scoreOfPlayer} to ${scoreOfComputer}`);
            } else if (scoreOfPlayer < scoreOfComputer) {
                console.log(`You lost ${scoreOfPlayer} to ${scoreOfComputer}`);
            } else {
                console.log(`You draw ${scoreOfPlayer} to ${scoreOfComputer}`);
            }
            let playAgain = confirm('Do you want to play again??');
            if (playAgain) {
                game();
            } else {
                alert("You are exiting from the game. ")
            }
        }
    }
}
