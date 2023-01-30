function computerPlay(){
  machineMoveGenerate = Math.random();
  if(machineMoveGenerate<0.34){
    console.log("Computer picked rock")
    return "rock"
  }else if(machineMoveGenerate<=0.67 && machineMoveGenerate>0.34){
    console.log("Computer picked paper")
    return "paper"
  }else{
    console.log("Computer picked scissors")
    return "scissors"
  }
}

function playerPlay(){
    let playerSelection = prompt("Choose Rock,Paper or scissors."),
    gamecancelled
    if(playerSelection===null) {
        confirm("Click ok to exit")
        if(!confirm){
            alert('You can try again when the high lows');
            console.log('You can try again whenever you want');
        }
        else{
            playerPlay();
        }
    }
    else{
        playerSelection= playerSelection.toLowerCase().trim();
        console.log("You picked " + playerSelection)
        return playerSelection;
    }
}

function oneRound(playerSelection,computerSelection){
    const youWin = "You Won",
    youLose= "You Lost "
    tie = "It's a tie"
    if(playerSelection === computerSelection){
        console.log(tie)
        return game()
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
            return game()
    }
} 

function game(){
    let scoreOfPlayer=0,
    scoreOfComputer=0;
    let rounds
    for(rounds= 1; rounds<= 5 ; rounds++){
        playerMove= playerPlay(),
        computerMove=computerPlay();
        resultOfRound = oneRound(playerMove,computerMove);
        console.log(resultOfRound)
        if (resultOfRound.includes("Won")){
             scoreOfPlayer++
        }else if(resultOfRound.includes("Lost")){
            scoreOfComputer++
        }
        console.log(rounds)
    }
    
    if(scoreOfPlayer>=3) {
        console.log(`You won the Game with score ${scoreOfPlayer}`) 
    } 
    else {
        console.log(`Computer Won The Round with score ${scoreOfComputer}`)
    }
}


while(true){
    console.log("Let's Play Rock,Paper And Scissors!!!")
    game()
}