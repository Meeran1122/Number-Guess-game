// Get elements from the DOM
const inputElement = document.getElementById('input');
const guessButton = document.querySelector('.guessButton');
const guessedNumbersElement = document.querySelector('.txt2 p:first-child');
const numberOfGuessesElement = document.querySelector('.txt2 p:last-child');
const resultText = document.querySelector('.result'); // Add this line to get the element for displaying results
// Generate a random number between 1 and 15
const randomNumber = Math.floor(Math.random() * 15) + 1;

// Initialize variables to keep track of guesses and guessed numbers
let numberOfGuesses = 0;
let guessedNumbers = [];

// Function to update the guessed numbers and number of guesses displayed
function updateDisplay() {
    guessedNumbersElement.textContent = `Guessed numbers are: ${guessedNumbers.join(', ')}`;
    numberOfGuessesElement.textContent = `No. of guesses: ${numberOfGuesses}`;
}

// Event listener for the guess button
guessButton.addEventListener('click', function() {
    // Get the user's guess from the input field
    const userGuess = parseInt(inputElement.value);


    if (isNaN(userGuess)) {
        resultText.textContent = "Please enter a valid number.";
        return;
    }
    // Increment the number of guesses
    numberOfGuesses++;

    // Add the guessed number to the array
    guessedNumbers.push(userGuess);

    // Check if the guess is correct, too low, or too high
    if (userGuess === randomNumber) {
        resultText.textContent = "Congratulations! You guessed the number correctly.";
    } else if (userGuess < randomNumber) {
        resultText.textContent = "Your guess is too low.";
    } else {
        resultText.textContent = "Your guess is too high.";
    }

    // Update the display
    updateDisplay();

    // Clear the input field
    inputElement.value = '';
});

// Update the initial display
updateDisplay();
