'use strict';
// Function is just a value and we can pass it just like any other function

let randomNumber = Number(Math.floor(Math.random() * 20) + 1);
console.log(randomNumber);
let score = 20;
let highscore=0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number Entered!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor="blue";
    document.querySelector('.number').style.width="30rem";

    if (score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } 
    else {
      document.querySelector('.message').textContent = 'You Lose the game!';
    }
  } else if (guess < randomNumber) {
    if(score>1){
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
}
else{
    document.querySelector('.message').textContent = 'You Lose the game!';
}
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Number(Math.floor(Math.random() * 20) + 1);
  console.log(randomNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing..';
  document.querySelector('.guess').value="";
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor="#222";
  document.querySelector('.number').style.width="15rem";
});
