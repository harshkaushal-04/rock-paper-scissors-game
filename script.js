let playerChoice;
document.querySelector("#button1").addEventListener("click", () => {
  playerChoice = "rock";
  computer();
});
document.querySelector("#button2").addEventListener("click", () => {
  playerChoice = "paper";
  computer();
});
document.querySelector("#button3").addEventListener("click", () => {
  playerChoice = "scissors";
  computer();
});
let myscore = 0;
let computerscore = 0;

document.querySelector("#my-score").textContent = `YOUR SCORE :   ${myscore}`;
document.querySelector("#computer-score").textContent =
  `COMPUTER SCORE :   ${computerscore}`;
let reply = document.querySelector(".result-round");
function computer() {
  let choice = Math.random();
  let computerChoice = Math.floor(choice * 3 + 1);
  if ((playerChoice === "rock") & (computerChoice === 1)) {
    reply.textContent = `RESULT OF THIS ROUND :   DRAW`;
  }
  else if ((playerChoice === "paper") & (computerChoice === 2)) {
    reply.textContent = `RESULT OF THIS ROUND :   DRAW`;
  } else if ((playerChoice === "scissors") & (computerChoice === 3)) {
    reply.textContent = `RESULT OF THIS ROUND :   DRAW`;
  } else if ((playerChoice === "paper") & (computerChoice === 3)) {
    reply.textContent = `RESULT OF THIS ROUND :   LOSE`;
    document.querySelector("#computer-score").textContent =
      `COMPUTER SCORE :   ${++computerscore}`;
  } else if ((playerChoice === "scissors") & (computerChoice === 1)) {
    reply.textContent = `RESULT OF THIS ROUND :   LOSE`;
    document.querySelector("#computer-score").textContent =
      `COMPUTER SCORE :   ${++computerscore}`;
  } else if ((playerChoice === "rock") & (computerChoice === 2)) {
    reply.textContent = `RESULT OF THIS ROUND :   LOSE`;
    document.querySelector("#computer-score").textContent =
      `COMPUTER SCORE :   ${++computerscore}`;
  } else if ((playerChoice === "paper") & (computerChoice === 3)) {
    reply.textContent = `RESULT OF THIS ROUND :   YOU WIN`;
    document.querySelector("#my-score").textContent =
      `YOUR SCORE :   ${++myscore}`;
  } else if ((playerChoice === "scissors") & (computerChoice === 1)) {
    reply.textContent = `RESULT OF THIS ROUND :   YOU WIN`;
    document.querySelector("#my-score").textContent =
      `YOUR SCORE :   ${++myscore}`;
  } else if ((playerChoice === "rock") & (computerChoice === 3)) {
    reply.textContent = `RESULT OF THIS ROUND :   YOU WIN`;
    document.querySelector("#my-score").textContent =
      `YOUR SCORE :   ${++myscore}`;
  }
}
