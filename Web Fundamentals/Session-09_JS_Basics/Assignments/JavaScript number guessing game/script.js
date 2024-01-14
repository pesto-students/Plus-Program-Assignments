// Your solution goes here 

function playGuessingGame(numToGuess, totalGuesses = 10) {
    let promptText = "Enter a number between 1 and 100.";
    let numGuesses = 0;

    while (numGuesses < totalGuesses) {
        let userGuess = prompt(promptText);
        if (userGuess === null) {
            return 0;
        }
        if (userGuess === "" || isNaN(userGuess)) {
            promptText = "Please enter a number.";
            continue;
        }

        numGuesses++;
        userGuess = Number(userGuess);

        if (userGuess === numToGuess) {
            return numGuesses;
        } else if (userGuess < numToGuess) {
            promptText = `${userGuess} is too small. Guess a larger number.`;
        } else {
            promptText = `${userGuess} is too large. Guess a smaller number.`;
        }
    }
    return 0;
}