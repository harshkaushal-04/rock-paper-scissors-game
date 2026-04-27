let playerChoice;
let myscore = 0;
let computerscore = 0;

document.querySelector("#my-score").textContent = `YOUR SCORE :   ${myscore}`;
document.querySelector("#computer-score").textContent =`COMPUTER SCORE :   ${computerscore}`;
let reply = document.querySelector(".result-round");

//rock button
document.querySelector("#button1").addEventListener("click", () => {
  let choice = Math.random();
  let computerChoice = Math.floor(choice * 3 + 1);
  if ((computerChoice === 1)) {
    reply.textContent = `RESULT OF THIS ROUND :   DRAW`;
  }
  else if ((computerChoice === 2)) {
    reply.textContent = `RESULT OF THIS ROUND :   YOU LOSE`;
    document.querySelector("#computer-score").textContent =
      `COMPUTER SCORE :   ${++computerscore}`;}
  else if ((computerChoice === 3)) {
    reply.textContent = `RESULT OF THIS ROUND :   YOU WIN`;
    document.querySelector("#my-score").textContent = `YOUR SCORE :   ${++myscore}`;    }
});

//paper button
document.querySelector("#button2").addEventListener("click", () => {
    let choice = Math.random();
  let computerChoice = Math.floor(choice * 3 + 1);
  if (computerChoice === 2) {
    reply.textContent = `RESULT OF THIS ROUND :   DRAW`;
  } 
  else if (computerChoice === 3) {
    reply.textContent = `RESULT OF THIS ROUND :   YOU LOSE`;
    document.querySelector("#computer-score").textContent =
      `COMPUTER SCORE :   ${++computerscore}`;
  } 
  else if (computerChoice === 1) {
    reply.textContent = `RESULT OF THIS ROUND :   YOU WIN`;
    document.querySelector("#my-score").textContent =
      `YOUR SCORE :   ${++myscore}`;
  } 
});

//scissor button
document.querySelector("#button3").addEventListener("click", () => {
  let choice = Math.random();
  let computerChoice = Math.floor(choice * 3 + 1);
   if (computerChoice === 3) {
    reply.textContent = `RESULT OF THIS ROUND :   DRAW`;
  } else if (computerChoice === 1){
    reply.textContent = `RESULT OF THIS ROUND :   YOU LOSE`;
    document.querySelector("#computer-score").textContent =
      `COMPUTER SCORE :   ${++computerscore}`;
  }else if (computerChoice === 2) {
    reply.textContent = `RESULT OF THIS ROUND :   YOU WIN`;
    document.querySelector("#my-score").textContent =
      `YOUR SCORE :   ${++myscore}`;
  }
});


