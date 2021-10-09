let computerWin = 0;
let playerWin = 0;
let choice = ["rock", "paper", "scissor"];
let playerSelection = "";
let rockUrl = "images/rock.svg";
let paperUrl = "images/paper.svg";
let scissorUrl = "images/scissor.svg";

const score = document.querySelector(".score");
const handScore = document.querySelector(".handScore");
const resultText = document.querySelector(".result-text");
const restart = document.querySelector(".restart");
restart.hidden = true;

// player Score declaration
const playerScore = document.createElement("div");
playerScore.classList.add("playerScore");
playerScore.textContent = `Player : ${playerWin}`;

// cpuScore declaration
const cpuScore = document.createElement("div");
cpuScore.classList.add("cpuScore");
cpuScore.textContent = `Cpu : ${computerWin}`;

// roundCommentary declaration
const roundCommentary = document.createElement("div");
roundCommentary.classList.add("roundcommentary");

//player hand image declaration
const playerHand = document.createElement("img");
playerHand.classList.add("playerHand");

//cpu hand image declaration
const cpuHand = document.createElement("img");
cpuHand.classList.add("cpuHand");

// appending player and cpu Score image and round comment in class Score
handScore.appendChild(playerHand);
handScore.appendChild(cpuHand);
score.appendChild(playerScore);
score.appendChild(roundCommentary);
score.appendChild(cpuScore);

// button function
const btns = document.querySelectorAll(".btns button");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    playround(button.id);
  });
});

// button restart
restart.addEventListener("click", () => {
  console.log("moi");
  playerWin = 0;
  computerWin = 0;
  showScore();
  resultText.textContent = " ";
  roundCommentary.textContent = " ";
  restart.hidden = true;
  btns.forEach((button) => {
    button.disabled = false;
  });
});

// Show the actuel score
function showScore() {
  playerScore.textContent = `Player : ${playerWin}`;
  cpuScore.textContent = `Cpu : ${computerWin}`;
}
// check player hand with the cpu and display the result
function playround(playerSelection) {
  let computerSelection = computerPlay();

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "scissor") {
        roundCommentary.textContent = "You Win";
        playerHand.src = rockUrl;
        cpuHand.src = scissorUrl;
        playerWin++;
        showScore();
      } else if (computerSelection == "paper") {
        roundCommentary.textContent = "You Lose";
        playerHand.src = rockUrl;
        cpuHand.src = paperUrl;
        computerWin++;
        showScore();
      } else {
        roundCommentary.textContent = "It's A Tie!";
        playerHand.src = rockUrl;
        cpuHand.src = rockUrl;
      }
      break;
    case "scissor":
      if (computerSelection == "paper") {
        roundCommentary.textContent = "You Win";
        playerHand.src = scissorUrl;
        cpuHand.src = paperUrl;
        playerWin++;
        showScore();
      } else if (computerSelection == "rock") {
        roundCommentary.textContent = "You Lose";
        playerHand.src = scissorUrl;
        cpuHand.src = rockUrl;
        computerWin++;
        showScore();
      } else {
        roundCommentary.textContent = "It's A Tie!";
        playerHand.src = scissorUrl;
        cpuHand.src = scissorUrl;
      }
      break;
    case "paper":
      if (computerSelection == "rock") {
        roundCommentary.textContent = "You Win";
        playerHand.src = paperUrl;
        cpuHand.src = rockUrl;
        playerWin++;
        showScore();
      } else if (computerSelection == "scissor") {
        roundCommentary.textContent = "You Lose";
        playerHand.src = paperUrl;
        cpuHand.src = scissorUrl;
        computerWin++;
        showScore();
      } else {
        roundCommentary.textContent = "It's A Tie!";
        playerHand.src = paperUrl;
        cpuHand.src = paperUrl;
      }
      break;
  }
  ScoreCheck();
}

// return the cpu hand randomly
function computerPlay() {
  let rand = Math.floor(Math.random() * choice.length);
  return choice[rand];
}

// check the progress and display the final result
function ScoreCheck() {
  if (playerWin == 5) {
    roundCommentary.textContent = "Game Over";
    resultText.textContent = "You Win this game";
    restart.hidden = false;
    restart.disabled = false;
    btns.forEach((button) => {
      button.disabled = true;
    });
  } else if (computerWin == 5) {
    roundCommentary.textContent = "Game Over";
    resultText.textContent = "You lose this game , Try Again";
    restart.hidden = false;
    restart.disabled = false;
    btns.forEach((button) => {
      button.disabled = true;
    });
  } else return;
}
