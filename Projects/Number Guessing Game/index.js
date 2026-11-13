// Number guessing game

const prompt = require("prompt-sync")();
score = 0;

function numberGuessingGame() {
    while (true) {
        let computerGuess = Math.floor(Math.random() * 100);

        while (true) {
            console.log("Type 'exit' to quit")
            let userGuess = prompt("Your guess: ");
            
            if (userGuess.toLowerCase() === "exit") {
                return score;
            }
            else if (Number.isNaN(Number(userGuess)) === true) {
                console.error("You must enter a number to play!");
            }
            else if (Number(userGuess) < 0 || userGuess >= 100) {
                console.log("The number must be between 0 to 100!");
            }
            else if (Number(userGuess) > computerGuess) {
                console.log("Guess lower!");
            }
            else if (Number(userGuess) < computerGuess) {
                console.log("Guess higher!");
            }
            else if (Number(userGuess) === computerGuess) {
                score += 1;
                console.log("Congratulations! You guessed it right.");
                console.log(`Answer: ${computerGuess}`);
                console.log(`Current Score: ${score}`);
                break;
            }
            else if (userGuess.toLowerCase() === "exit") {
                return score;
            }
        }
    }
}

finalScore = numberGuessingGame();
console.log(`Final Score: ${finalScore}`);