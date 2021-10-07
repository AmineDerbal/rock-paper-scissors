function playround(playerSelection) {
  let computerSelection = computerPlay();
  if (computerSelection.toLowerCase() == "rock") {
    return "It's a Tie Rock equal Rock";
  } else if (computerSelection.toLowerCase() == "paper") {
    computerWin++;
    return "You Lose Paper beat Rock";
  } else {
    playerWin++;
    return "You Win Rock is stronger than Scissor";
  }
}

function computerPlay() {
  let rand = Math.floor(Math.random() * choice.length);
  console.log(rand);
  console.log(choice[rand]);
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
      console.log(playerSelection);
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
    console.log(playround(playerSelection));
    console.log("Player = " + playerWin);
    console.log("Computer = " + computerWin);
  }
}
game();
