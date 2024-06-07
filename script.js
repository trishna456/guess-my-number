'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variables
let highScore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️No Number!');
  }

  if (score > 1) {
    if (guess === secretNumber) {
      displayMessage('🎉Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      guess > secretNumber
        ? displayMessage('📈Too High!')
        : displayMessage('📉 Too Low!');
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage('💥You lost the game!');
  }
  if (score > highScore) {
    document.querySelector('.highscore').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
