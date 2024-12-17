"use strict";
const number = document.querySelector(".number");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
let highscore = document.querySelector(".highscore");

let scoreText = document.querySelector(".score");

// console.log(highscore.);

let random = Math.trunc(Math.random() * 20 + 1);
console.log(random);

let score = 20;
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "🚫 No Input!!";
  } else if (guess === random) {
    if (score > highscore.textContent) {
      //   highscore.textContent = 4;
      console.log(highscore.textContent);
      highscore.textContent = score;
    }
    message.textContent = "Correct";
    document.querySelector("body").style.backgroundColor = "green";
    number.textContent = guess;
  } else if (guess !== random) {
    if (score > 1) {
      document.querySelector("body").style.backgroundColor = "red";
      guess > random
        ? (message.textContent = `You Guessed ${guess} Too High`)
        : (message.textContent = `You Guessed ${guess} Too Low`);
      score--;
      document.querySelector(".score").textContent = score;
      highscore.textContent = 0;
    } else {
      message.textContent = "Game Over";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  scoreText.textContent = 20;
  random = Math.trunc(Math.random() * 20 - 1);
  console.log(random);

  message.textContent = "Start guessing...";
  const guess = (document.querySelector(".guess").value = "");
  number.textContent = "?";
  document.querySelector("body").style.backgroundColor = "gray";
  highscore.textContent = 0;
});
