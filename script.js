'use strict';

// document.querySelector('.number').textContent = 12;

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// document.querySelector('.score').textContent = 18;

// document.querySelector('.guess').value = 16;
// console.log(document.querySelector('.guess').value);

let concealedNum = Math.trunc(Math.random() * 20) + 1;

// Show secret number on screen
// document.querySelector('.number').textContent = concealedNum;

let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // If you enter a wrong number
  if (!guess) {
    // document.querySelector('.message').textContent =
    // 'Please enter a valid number 😐 ';

    displayMessage('Please enter a valid number 😐 ');

    // if you enter a correct number
  } else if (guess === concealedNum) {
    document.querySelector('.message').textContent = 'Correct 👍🏼';

    document.querySelector('.number').textContent = concealedNum;

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '40rem';

    // high score feature
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if you enter a wrong number
  } else if (guess !== concealedNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > concealedNum ? 'Too high👌🏻' : 'Too low 👎🏼 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😿';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset the game

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  concealedNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
