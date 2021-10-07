function playround(playerSelection) {
  let computerSelection = computerPlay();
  console.log("the hand of the player is : " + playerSelection.toLowerCase());
  console.log("the hand of the cpu is : " + computerSelection);
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection == "scissor") {
        console.log("You win rock beat scissor");
        playerWin++;
      } else if (computerSelection == "paper") {
        console.log("You lose paper beat rock");
        computerWin++;
      } else {
        console.log("It's a tie " + computerSelection + " against itself !!");
      }
      break;
    case "scissor":
      if (computerSelection == "paper") {
        console.log("You win scissor beat paper");
        playerWin++;
      } else if (computerSelection == "rock") {
        console.log("You lose rock beat scissor");
        computerWin++;
      } else {
        console.log("It's a tie " + computerSelection + " against itself !!");
      }
      break;
    case "paper":
      if (computerSelection == "rock") {
        console.log("You win paper beat rock");
        playerWin++;
      } else if (computerSelection == "scissor") {
        console.log("You lose scissor beat paper");
        computerWin++;
      } else {
        console.log("It's a tie " + computerSelection + " against itself !!");
      }
      break;
  }
}

function computerPlay() {
  let rand = Math.floor(Math.random() * choice.length);
  return choice[rand];
}

function playerPlay() {
  player = " ";
  while (true) {
    player = prompt("What is your hand ?");
    if (
      player.toLowerCase() == "rock" ||
      player.toLowerCase() == "paper" ||
      player.toLowerCase() == "scissor"
    ) {
      console.log("You choose " + player);
      break;
    } else {
      console.log("try Again !");
    }
  }

  return player;
}
let choice = ["rock", "paper", "scissor"];
let playerSelection = "";

let computerWin, playerWin;
function game() {
  computerWin = 0;
  playerWin = 0;
  for (i = 0; i < 5; i++) {
    console.log("round number ", i + 1);
    playerSelection = playerPlay();
    playround(playerSelection);
    console.log("Player = " + playerWin);
    console.log("Computer = " + computerWin);
  }
}
game();
