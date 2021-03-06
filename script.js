'use strict';


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
        // document.querySelector('.message').textContent = 'โ No Number!';
        displayMessage('โ No Number!');

        //When Player Wins!
    } else if (guess === secretNumber) {
        displayMessage('๐ Correct Number!');
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
           // document.querySelector('.message').textContent = guess > secretNumber ? '๐คจ  Too high!' : '๐ Too low!';
           displayMessage(guess > secretNumber ? '๐คจ  Too high!' : '๐ Too low!');
           score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('๐ฃ You lost the Game!');
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
