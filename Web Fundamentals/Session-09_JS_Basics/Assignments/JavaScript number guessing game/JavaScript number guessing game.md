Write a function called playGuessingGame() in script.js that has two parameters:

- numToGuess is the number that the user has to guess.
- totalGuesses is the total number of times the user is allowed to guess the number. The default value should be 10.

The playGuessingGame() function should return the number of guesses the user took to enter the correct number. Ex: If the user guesses the correct number after 3 tries, the function should return 3. If the user does not guess the correct number before the number of guesses exceeds totalGuesses, the function should return 0.

The playGuessingGame() function should call the JavaScript prompt() function to read the user's input, as shown below.

![](Aspose.Words.bab0126a-d2a3-4199-85fa-177b80133816.001.png)

The prompt text should reflect what the user previously entered:

- If the user is making their first guess, the prompt should read: "Enter a number between 1 and 100." 
- If the user previously guessed a number < numToGuess, the prompt should read "X is too small. Guess a larger number.", where X is the number previously entered.
- If the user previously guessed a number > numToGuess, the prompt should read "X is too large. Guess a smaller number.", where X is the number previ ously entered. 
- If the user enters an empty string or a string that is not a number, the prompt should read "Please enter a number." and give the user another chance to enter another number without losing a turn. Hint: Use isNaN(). 
- If the user presses Cancel, playGuessingGame() should immediately return 0 without prompting for any more numbers.

Ex: The function call playGuessingGame(5) allows the user 10 guesses (the default) to guess the number 5. The function call playGuessingGame(7, 3) allows the user 3 guesses to guess the number 7.

To test your code in your web browser, call playGuessingGame() from the JavaScript console. 
