function computerPlay(){
  machineMoveGenerate = Math.random();
  if(machineMoveGenerate<0.34){
    return "rock"
  }else if(machineMoveGenerate<=0.67 && machineMoveGenerate>0.34){
    return "paper"
  }else{
    return "scissors"
  }
}

function oneRound(){
    const youWin = "You Won",
    youLose= "You Lost "
    tie = "It's a tie"
    playerSelection = prompt("Choose Rock,Paper or scissors."),
    computerSelection = computerPlay();
    playerSelection= playerSelection.toLowerCase();
    console.log("You picked " + playerSelection)
    console.log("Computer picked " + computerSelection)
    playerSelection = playerSelection.toLowerCase();
    if(!playerSelection){
        oneRound()
    }
    if(playerSelection === computerSelection){
        return tie
    }
    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper") {
                return youLose 
            } 
            else 
            {
                return youWin 
            }
        case "scissors":
            if(computerSelection === "paper") {
                return youWin
            }
            else {
                return youLose 
            }
        case "paper":
            if(computerSelection === "scissors") {
                return youLose 
            } 
            else{
                return youWin
            } 
        default: 
            console.log("Invalid choice entered. Choose from rock,papers and scissors.")
            return oneRound()
    }
} 

function game(){
    let scoreOfPlayer=0
    const j=5
    for(let i= 1; i<= j ; i++){
        const resultOfRound = oneRound();
        console.log(resultOfRound)
        if (resultOfRound.includes("Won")){
             scoreOfPlayer++
        }else{

        }
    }
    if(scoreOfPlayer>=3) "You Won The Round."
    else return "Computer Won The Round."
}


while(true){
    console.log("Let's Play Rock,Paper And Scissors!!!")
    console.log(game())
}

