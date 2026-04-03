
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


//a way to play multiple rounds
function playGame() {

    //a way to store their scores
  let humanScore =0;
  let computerScore =0;

  //store references of results div
  const yourScoreBoard = document.querySelector(".your-score");
  const computerScoreBoard = document.querySelector(".computer-score");

  const roundMessage = document.querySelector(".round-message");
  const gameMessage = document.querySelector(".game-message")

  computerScoreBoard.textContent = `Computer Score : ${computerScore}`
  yourScoreBoard.textContent = `Your score: ${humanScore}`;
  //a way to play a single round
  
  function playRound(humanChoice,computerChoice) {
    if ((humanChoice=="rock" && computerChoice=="scissors")||
        (humanChoice=="paper" && computerChoice=="rock")||
        (humanChoice=="scissors" && computerChoice=="paper")) 
    {
      humanScore ++;
      yourScoreBoard.textContent = `Your score: ${humanScore}`;
      roundMessage.textContent= `You won! ${humanChoice} beats ${computerChoice}`
    }
    else if (humanChoice == computerChoice)
    {
      roundMessage.textContent = "It's a tie!"
    }else {
      computerScore++;
      computerScoreBoard.textContent = `Computer Score : ${computerScore}`
      roundMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
    }

    //check if game ends already
    if (isGameOver()) {
      let winner = humanScore == 5 ? "You won!" : "Computer won";
      gameMessage.textContent = `${winner}`;
      
      //freeze all buttons after winner is declared
      for (let i=0;i<buttons.length;i++) {
        buttons[i].disabled = true;
      }
    }
  }
    
    
  //for each button
  const buttons = document.querySelectorAll("button");
    
  for (let i=0;i<buttons.length;i++) {
    //add an event listener that chooses user selection
    buttons[i].addEventListener("click",() => {
      let choice = buttons[i].textContent;
      playRound(choice,getComputerChoice());
    })
  }
    
 
  
  //declare the winner when one of them won 5 times

  let isGameOver = (score) => {
    if (humanScore==5 || computerScore==5) {
      return true;
    }else {
      return false;
    }
  }
  
}

//play a single game
playGame();