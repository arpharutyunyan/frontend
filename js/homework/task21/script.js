'use strict';

class Application {
    constructor() {
        this.minNumber = 1;
        this.maxNumber = 6;
        this.maxScore = 30;
        this.elements = {};
        this.firstPlayer = new Player(0);
        this.secondPlayer = new Player(1);
        this.activePlayer = 0; // 0 - first player, 1 - second player
        this.isGameFinished = false;
    }

    init() {
        this.elements = this.getElements();
        this.eventHandler();
    }

    getElements() {
        const newGame = document.querySelector('.btn--new');
        const roll = document.querySelector('.btn--roll');
        const hold = document.querySelector('.btn--hold');
        const img = document.querySelector('.dice');

        return {
            'newGame': newGame,
            'roll': roll,
            'hold': hold,
            'img': img,
        };
    }

    generateDiceNumber() {
        const diceNumber = Math.floor(Math.random() * this.maxNumber + this.minNumber);
        this.elements.img.src = `dice-${diceNumber}.png`;

        return diceNumber;
    }

    eventHandler() {
        this.elements.newGame.addEventListener('click', () => {
            this.resetGame();
        });

        this.elements.roll.addEventListener('click', () => {
            if (!this.isGameFinished) {
                this.rollDice();
            }
        });

        this.elements.hold.addEventListener('click', () => {
            if (!this.isGameFinished) {
                this.holdScore();
            }
        });
    }

    rollDice() {
        const diceNumber = this.generateDiceNumber();
        const currentPlayer = this.getActivePLayer();

        if (diceNumber !== 1) {
            currentPlayer.addCurrentScore(diceNumber);
        } else {
            currentPlayer.setCurrentScore(0);
            this.firstPlayer.togglePlayerSection();
            this.secondPlayer.togglePlayerSection();
            this.activePlayer = !this.activePlayer; // 0 or 1
        }
    }

    holdScore() {
        const currentPlayer = this.getActivePLayer();
        currentPlayer.addScore();
        if (this.isMaxScore(currentPlayer)) {
            this.isGameFinished = true;
            currentPlayer.setWinner();
        } else {
            this.firstPlayer.togglePlayerSection();
            this.secondPlayer.togglePlayerSection();

            this.activePlayer = !this.activePlayer; // 0 or 1
        }
    }

    resetGame() {
        this.firstPlayer.resetScores();
        this.secondPlayer.resetScores();
        this.elements.img.src = 'dice-1.png';
        this.isGameFinished = false;

        if (this.activePlayer) { // current player is 1(second player), if current player is second, change player--active class
            this.secondPlayer.togglePlayerSection();
            this.firstPlayer.togglePlayerSection();
        }

        const currentPlayer = this.getActivePLayer();
        currentPlayer.resetWinner();

        this.activePlayer = 0;
    }

    getActivePLayer() {
        return this.activePlayer ? this.secondPlayer : this.firstPlayer;
    }

    isMaxScore(activePlayer) {
        return activePlayer.getScore() >= this.maxScore;
    }
}

class Player {
    constructor(playerNumber) {
        this.score = document.getElementById(`score--${playerNumber}`);
        this.currentScore = document.getElementById(`current--${playerNumber}`);
        this.playerSection = document.querySelector(`.player--${playerNumber}`);
    }

    setScore(score) {
        this.score.textContent = score;
    }

    getScore() {
        return this.score.textContent;
    }

    addScore() {
        const score = parseInt(this.getScore());
        const currentScore = parseInt(this.getCurrentScore());
        this.setScore(score + currentScore);
        this.setCurrentScore(0);
    }

    setCurrentScore(score) {
        this.currentScore.textContent = score;
    }

    getCurrentScore() {
        return this.currentScore.textContent;
    }

    addCurrentScore(score) {
        score = parseInt(score);
        const currentScore = parseInt(this.getCurrentScore());
        this.setCurrentScore(score + currentScore);
    }

    resetScores() {
        this.setScore(0);
        this.setCurrentScore(0);
    }

    togglePlayerSection() {
        this.playerSection.classList.toggle('player--active');
    }

    setWinner() {
        this.playerSection.classList.add('player--winner');
    }

    resetWinner() {
        this.playerSection.classList.remove('player--winner');
    }
}