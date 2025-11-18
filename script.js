'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number😘';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'Correct Number😘';
  console.log(guess, typeof guess);
  // When there is no input.
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number💧';
    displayMessage('No number💧');

    // When player wins.
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number😘';
    displayMessage('Correct Number😘');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong.
  } else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =guess > secretNumber ? 'Too high!🫡' : 'Too Low!🫡';
      displayMessage(guess > secretNumber ? 'Too high!🫡' : 'Too Low!🫡'); 
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
    }
  }
  //   // When guess is too low.
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!🫡';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.highscore').textContent=0;
  document.querySelector('.number').textContent = '?';
});
