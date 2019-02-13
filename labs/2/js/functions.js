var randomNumber = Math.floor(Math.random() * 99) + 1;
var guesses      = document.querySelector('#guesses');
var lastResult   = document.querySelector('#lastResult');
var lowOrHi      = document.querySelector('#lowOrHi');

var guessSubmit  = document.querySelector('.guessSubmit');
var guessField   = document.querySelector('.guessField');

var guessCount   = 1;
var resetButton  = document.querySelector('#reset');
guessField.focus();

function checkGuess(){
    var userGuess = Number(guessField.value);
    // while(userGuess > 99){
    //     $("#errorMsg").html("That number is over 99! Enter something else! ");
    //     userGuess = Number(guessField.value);
    // }
    if(guessCount === 1){
        // guesses.innerHTML = 'Previous guesses: ';
        $("#guesses").html("Previous guesses: ");
    }
    guesses.innerHTML += userGuess + ' ';

    if(userGuess === randomNumber){
        // lastResult.innerHTML = 'Congratulations! You got it right!';
        // lastResult.style.backgroundColor = 'green';
        $("#lastResult").html('Congratulations! You got it right!');
        $("#lastResult").css("background-color", "green");
        lowOrHi.innerHTML = '';
        setGameOver();
    }
    else if(guessCount === 7){
        // lastResult.innerHTML = 'Sorry, you lost!;'
        $("#lastResult").html("Sorry, you lost!");
        setGameOver();
    }
    else{
        // lastResult.innerHTML = 'Wrong!';
        // lastResult.style.backgroundColor = 'red';
        $("#lastResult").html("Wrong!");
        $("#lastResult").css("background-color", "red");
        if(userGuess < randomNumber){
            // lowOrHi.innerHTML = 'Last guess was too low!';
            $("#lowOrHi").html("Last guess was too low!");
        }
        else if(userGuess > randomNumber){
            // lowOrHi.innerHTML = 'Last guess was too high!';
            $("#lowOrHi").html("Last guess was too high!");
        }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled       = true;
    guessSubmit.disabled      = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }
    
    resetButton.style.display = 'none';
    
    guessField.disabled       = false;
    guessSubmit.disabled      = false;
    guessField.value          = '';
    
    lastResult.style.backgroundColor = 'white';
    
    randomNumber = Math.floor(Math.random() * 99) + 1;
}