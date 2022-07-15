'use strict'

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const divNumber = document.querySelector('.number');
const changeMessage = function (text) {
  document.querySelector('.message').innerText = text;
};
const changeSpanScore = function (text) {
  document.querySelector('.score').innerText = text;
};

const spanHighScore = document.querySelector('.highscore');
const inpGuess = document.querySelector('.guess');
const body = document.querySelector('body');

const game = {
  score: 20,
  highscore: 0,
  number: 0,
  guess: 0,

  genNewNumber: function () {
    this.number = parseInt(Math.random() * 20 + 1);
  },

  check: function () {
    if (inpGuess.value < 1 || inpGuess.value > 20 || inpGuess === '') {
      changeMessage('Guess a number between 1 and 20!!!');
      return;
    } else {
      this.guess = inpGuess.value;
      this.checkValidation();
    }
  },

  checkValidation: function () {
    if (this.guess > this.number) {
      changeMessage('Too high!');
      this.decreasingPoints();
    } else if (this.guess < this.number) {
      changeMessage('Too low!');
      this.decreasingPoints();
    } else {
      changeMessage("That's it!");
      this.win();
    }
  },

  decreasingPoints: function () {
    this.score--;
    changeSpanScore(this.score);
  },

  win: function () {
    spanHighScore.innerText = this.score;
    body.style.backgroundColor = '#60b347';
    divNumber.innerText = this.number;
    inpGuess.disabled = true;
  },

  startGame: function () {
    this.genNewNumber();
    this.score = 20;
  },
};

game.startGame();

btnCheck.addEventListener('click', function () {
  game.check();
});

btnAgain.addEventListener('click', function () {
  game.startGame();
  changeSpanScore(this.score == undefined ? 20 : this.score);
  divNumber.innerText = '?';
  inpGuess.value = '';
  inpGuess.disabled = false;
  body.style.backgroundColor = '#222';
  changeMessage('Start guessing');
});
