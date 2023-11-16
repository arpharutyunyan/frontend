'use strict';

function generateRandomNumber(minNumber, maxNumber){
    return  Math.floor(Math.random() * maxNumber + minNumber);
}

const minNumber = 1;
const maxNumber = 20;
let hiddenNumber = generateRandomNumber(minNumber, maxNumber);

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const guessNumber = document.querySelector('.guess');
const hiddenNumberBlock = document.querySelector('.number');

if(check){
    check.addEventListener('click', () => {
        const inputNumber = parseInt(guessNumber.value);

        if(!isNaN(inputNumber)){
            if(inputNumber > hiddenNumber){
                message.textContent = 'Too high!';
                changeScores(score, highScore);
            }else if (inputNumber < hiddenNumber){
                message.textContent = 'Too low!';
                changeScores(score, highScore);
            }else{
                message.textContent = 'Correct Number!';
                hiddenNumberBlock.textContent = hiddenNumber;
                document.body.style.backgroundColor = '#60b347';
            }
        }
    });
}

function changeScores(score, highScore, reset = false){
    if(reset){
        score.textContent = maxNumber;
        highScore.textContent = 0;
    }else{
        score.textContent -= 1;
        highScore.textContent = highScore.textContent * 1 + 1;
    }
}

const again = document.querySelector('.again');
if(again){
    again.addEventListener('click', () => {
        changeScores(score, highScore, true);
        document.body.style.backgroundColor = '#222';
        message.textContent = 'Start guessing...';
        hiddenNumberBlock.textContent = '?';
        guessNumber.value = '';
        hiddenNumber = generateRandomNumber(minNumber, maxNumber);
    });
}