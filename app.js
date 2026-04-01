//[]a way to get computer choice
function getComputerChoice() {
  let numberChoice = Math.floor(Math.random() * 3)+1;
  
  if (numberChoice==1) {
    return "rock"
  }else if (numberChoice ==2) {
    return "scissors"
  }else {
    return "paper"
  }
}



//[]a way to get human choice
//[]a way to store their scores
//[]a way to play a single round
//[]a way to play multiple rounds