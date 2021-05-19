'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;


const display = function (className, message) {
    document.querySelector(className).textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    let num = Number(document.querySelector('.guess').value);

    //for invalid input
    if (num < 1 || num > 20) {
        display('.message', 'INVALID INPUT...');
    }

    //when player wins
    else if (num === secretNumber) {
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        display('.message', 'Correct Guess');
        display('.score', score);
        display('.number', secretNumber);

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        console.log(document.querySelector('.highscore'));


    }
    //gues num is different
    else if (num !== secretNumber) {
        if (score > 1) {
            display('.message', num > secretNumber ? 'Too High' : 'Too Low');
            score -= 1;
            display('.score', score);
        }
        else {
            display('.message', 'OPPSSS!! You Lost the game');
            display('.score', 0);
        }
    }


    //     //guess num too low
    //     else if (num < secretNumber) {
    //         if (score > 1) {
    //             document.querySelector('.message').textContent = 'Too Low!!';
    //             score -= 1;
    //             document.querySelector('.score').textContent = score;
    //         }
    //         else {
    //             document.querySelector('.message').textContent = 'OPPSSS!! You Lost the game';
    //             document.querySelector('.score').textContent = 0;
    //         }
    //     }

    //     //when guess num is high
    //     else if (num > secretNumber) {
    //         document.querySelector('.message').textContent = 'Too High!!';
    //         score -= 1;
    //         document.querySelector('.score').textContent = score;

    //         if (score > 1) {
    //             document.querySelector('.message').textContent = 'Too High!!';
    //             score -= 1;
    //             document.querySelector('.score').textContent = score;
    //         }
    //         else {
    //             document.querySelector('.message').textContent = 'OPPSSS!! You Lost the game';
    //             document.querySelector('.score').textContent = 0;
    //         }
    //     }
})
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';

})