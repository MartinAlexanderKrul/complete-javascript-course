'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct!';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = document.querySelector('.highscore').textContent;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Another one!';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! :(';

    // correct number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! :)';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    highscore = highscore > score ? highscore : score;
    document.querySelector('.highscore').textContent = highscore;

    // higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      score--;
    }
    document.querySelector('.score').textContent = score;

    // lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      3;
      score--;
    }
    document.querySelector('.score').textContent = score;
  }
});
