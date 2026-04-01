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
  let userChoice = prompt("Rock,Paper,Scissors?");
  return userChoice;
}


//[]a way to store their scores
let humanScore =0;
let computerScore =0;
//[]a way to play a single round
function playRound() {

}
//[]a way to play multiple rounds