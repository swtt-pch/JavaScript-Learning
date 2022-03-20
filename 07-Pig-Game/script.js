'use strict';
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

const removeClass = function (currentPlayer) {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove(`player--active`);
};

const addClass = function (currentPlayer) {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add(`player--active`);
};

const game = {
  currentScore: 0,
  currentPlayer: 0,
  diceNumber: 1,
  points: [0, 0],

  setImg: function (number) {
    document.querySelector('.dice').src = `dice-${number}.png`;
  }, //ok

  rollDice: function () {
    this.diceNumber = parseInt((Math.random() * 5 + 1).toFixed());
    this.setImg(this.diceNumber);
    return this.diceNumber;
  }, //ok

  validDice: function () {
    this.rollDice();
    if (this.diceNumber != 1) {
      this.currentScore += this.diceNumber;
      this.setCurrentScore(this.currentScore, this.currentPlayer);
    } else {
      this.changePlayer();
    }
  }, //ok

  setCurrentScore: function (score, currentPlayer) {
    document.getElementById(`current--${currentPlayer}`).innerText = score;
  }, //ok

  setScore: function (score, currentPlayer) {
    document.getElementById(`score--${currentPlayer}`).innerText = score;
  }, //ok

  setName: function (current, t) {
    document.querySelector(`#name--${current}`).innerText = t;
  },

  changePlayer: function () {
    removeClass(this.currentPlayer);
    this.currentScore = 0;
    this.setCurrentScore(this.currentScore, this.currentPlayer);
    this.currentPlayer = this.currentPlayer == 0 ? 1 : 0;
    addClass(this.currentPlayer);
  }, //ok

  holdScore: function () {
    this.points[this.currentPlayer] += this.currentScore;
    this.setScore(this.points[this.currentPlayer], this.currentPlayer);
    if (this.points[this.currentPlayer] >= 100) {
      this.winGame();
    } else {
      this.changePlayer();
    }
  }, //ok

  restartGame: function () {
    this.points = [0, 0];
    for (let i = 0; i < this.points.length; i++) {
      this.setCurrentScore(0, i);
      this.setScore(this.points[i], i);
      this.setName(i, `Player ${i + 1}`);
    }
    this.currentPlayer = 1;
    this.changePlayer();
    this.setButton(false);
  }, // ok

  winGame: function () {
    this.setButton(true);
    this.setName(
      this.currentPlayer,
      `Player ${this.currentPlayer + 1} wins!!!`
    );
  },

  setButton: function (boolean) {
    btnHold.disabled = boolean;
    btnRoll.disabled = boolean;
  },
};

document.querySelector('body').onload = game.restartGame();

//Event listeners
btnRoll.addEventListener('click', function () {
  game.validDice();
});

btnHold.addEventListener('click', function () {
  game.holdScore();
});

btnNewGame.addEventListener('click', function () {
  game.restartGame();
});
