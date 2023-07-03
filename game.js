function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playRound(playerSelection, computerSelection) {
    const winningMoves = {
      "rock": ["scissors"],
      "scissors": ["paper"],
      "paper": ["rock"]
    };
  
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "Tie!";
    } else if (playerSelection in winningMoves && computerSelection in winningMoves[playerSelection]) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your selection (rock, paper, scissors): ");
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result === "You Win!") {
        playerScore++;
      } else if (result === "You Lose!") {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win!");
    } else if (computerScore > playerScore) {
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  }

  game(); 