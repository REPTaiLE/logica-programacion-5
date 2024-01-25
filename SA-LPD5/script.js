const selectButtonPlay = document.getElementById('button-addon2');
const selectButtonGuess = document.getElementById('button-addon');
const selectInput = document.getElementsByClassName('form-control')[0];
const showValue = document.getElementById('result');

selectButtonPlay.addEventListener('click', () => {
    showValue.innerHTML = 'Playing! Enter a number and press the guess button!';
    let secretNum = Math.floor(Math.random() * 100) + 1;
    console.log(secretNum);

    selectButtonGuess.addEventListener('click', () => {
    
        let userGuess = parseInt(selectInput.value);

        if (!isNaN(userGuess)) {
            if (userGuess === secretNum) {
                showValue.innerHTML = 'Correct!';
            } else {
                showValue.innerHTML = 'Wrong!';
            }
        } else {
            showValue.innerHTML = 'Please enter a valid number!';
        }
        
    });
});

