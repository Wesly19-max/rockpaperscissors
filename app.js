
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

  const yourScoreBoard = document.querySelector(".your-score");
  const computerScoreBoard = document.querySelector(".computer-score");

  const roundMessage = document.querySelector(".round-message");
  //a way to play a single round
  function playRound(humanChoice,computerChoice) {
    if ((humanChoice=="rock" && computerChoice=="scissors")||
        (humanChoice=="paper" && computerChoice=="rock")||
        (humanChoice=="scissors" && computerChoice=="paper")) 
    {
      humanScore ++;
      
      roundMessage.textContent= `You won! ${humanChoice} beats ${computerChoice}`
    }
    else if (humanChoice == computerChoice)
    {
      roundMessage.textContent = "It's a tie!"
    }else {
      computerScore++;
      roundMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
    }

  }

        //display score board
    yourScoreBoard.textContent = `Your score: ${humanScore}`;
    computerScoreBoard.textContent = `Computer Score : ${computerScore}`
    //for each button
    const buttons = document.querySelectorAll("button");
    
    for (let i=0;i<buttons.length;i++) {
      //add an event listener that chooses user selection
      buttons[i].addEventListener("click",() => {
        let choice = buttons[i].textContent;
        playRound(choice,getComputerChoice());
      })
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

//play a single game
playGame();