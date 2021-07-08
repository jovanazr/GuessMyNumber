'use strict';

//otvaranje i zatvaranje prozora za pravila igre

let buttonRules = document.querySelector('.rules');
let buttonX = document.querySelector('.close');

buttonRules.addEventListener('click', function () {
    document.querySelector('.window').classList.remove('hidden');
    document.querySelector('.blur').classList.remove('hidden');
});

function close() {
    document.querySelector('.window').classList.add('hidden');
    document.querySelector('.blur').classList.add('hidden');
}

buttonX.addEventListener('click', close);

document.querySelector('.blur').addEventListener('click', close);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
});


// unosenje broja i poredjenje sa tajnim brojem

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.secretNumber').value = secretNumber;
let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    let number = Number(document.querySelector('.number').value);

    //kad nije unet validan broj ili nije unet uopste
    if (!number || number > 20 || number < 1) displayMessage('Enter the number between 1 and 20!');

    //kad je unet tacan broj
    else if (secretNumber === number) {
        displayMessage('Correct number!');
        document.querySelector('.secretNumber').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.secretNumber').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //kad nije unet tacan broj
    else if (secretNumber !== number) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage(secretNumber > number ? 'Too low!' : 'Too high!');
        } else {
            document.querySelector('.score').textContent = 0;
            displayMessage('GAME OVER');
            document.querySelector('body').style.backgroundColor = '#cc0000';
            document.querySelector('.secretNumber').textContent = secretNumber;
        }
    }
});


//klik na dugme 'Again!'

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.secretNumber').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').value = '';
});