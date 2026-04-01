//[]a way to get computer choice
function getComputerChoice() {
  let numberChoice = Math.floor(Math.random() * 3)+1;
  
  if (numberChoice==1) {
    return "rock";
  }else if (numberChoice ==2) {
    return "scissors";
  }else {
    return "paper";
  }
}

//[]a way to get human choice
function getHumanChoice() {
  let humanChoice = prompt("Rock,Paper,Scissors?");
  return humanChoice.toLowerCase();
}


//a way to play multiple rounds
function playGame() {

    //a way to store their scores
  let humanScore =0;
  let computerScore =0;


  //a way to play a single round
  function playRound(humanChoice,computerChoice) {
    if ((humanChoice=="rock" && computerChoice=="scissors")||
        (humanChoice=="paper" && computerChoice=="rock")||
        (humanChoice=="scissors" && computerChoice=="paper")) 
    {
      humanScore ++;
      console.log(`You won! ${humanChoice} beats ${computerChoice}`)
    }
    else if (humanChoice == computerChoice)
    {
      console.log("It's a tie!")
    }else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }

  }

    
  //calls playRound function 5 times
  for (let i =0;i<5;i++) {
    playRound(getHumanChoice(),getComputerChoice());
  }
  
  //declare the winner
  if (humanScore > computerScore) {
    console.log("You won!")
  }else if (humanScore<computerScore) {
    console.log("You lost!")
  }else {
    console.log("It's a tie!")
  }
  
}

//play a single game (5 rounds)
playGame();