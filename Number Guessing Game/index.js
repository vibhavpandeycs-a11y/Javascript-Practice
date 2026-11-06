// Number guessing game

let userInput = 56;
const computerGuess = Math.floor(Math.random() * 101);

if (Number.isNaN(userInput) == true) {
    console.log("Enter a number to play");
}
else if (userInput < 0 || userInput > 100) {
    console.log("The number must be from 0 to 100");
}
else if (userInput == computerGuess) {
    console.log("You guessed correct!");
}
else {
    console.log("Better luck next time");
}
