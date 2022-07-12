'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Stop Guessing';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value = 40;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    //When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number!';
        displayMessage('⛔ No Number!');

        //When Player Wins!
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //When Guess is wrong
    } else if (guess != secretNumber) {

        if (score > 1) {
           // document.querySelector('.message').textContent = guess > secretNumber ? '🤨  Too high!' : '😒 Too low!';
           displayMessage(guess > secretNumber ? '🤨  Too high!' : '😒 Too low!');
           score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💣 You lost the Game!');
            document.querySelector('.score').textContent = '0';
        }

    }
});


//Reset
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#100e0e';
    document.querySelector('.number').style.width = '15rem';

});
