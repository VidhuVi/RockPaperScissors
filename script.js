let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(playerMove) {
  computerMove = computerChoice();
  let result = "";

  if (computerMove === playerMove) {
    result = "Tie.";
  } else if (computerMove === "paper" && playerMove === "rock") {
    result = "You lose.";
  } else if (computerMove === "scissors" && playerMove === "paper") {
    result = "You lose.";
  } else if (computerMove === "rock" && playerMove === "scissors") {
    result = "You lose.";
  } else {
    result = "You win.";
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  scoreboard();

  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(".js-gameinfo").innerHTML = `You
  <img src="rockpaperscissorsimg/${playerMove}-emoji.png">
  <img src="rockpaperscissorsimg/${computerMove}-emoji.png">
  Computer`;
}

function computerChoice() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  console.log(computerMove);
  return computerMove;
}

scoreboard();

function scoreboard() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses}  Ties: ${score.ties}`;
}
