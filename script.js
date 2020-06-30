let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates a random integer between 0 and 9
function generateTarget() {
  return Math.floor(Math.random() * 10)
}

// Calculates the absolute value between two numbers
function getAbsoluteDistance(number1, number2) {
  return Math.abs(number1 - number2)
}

// Determines which guess is closest to the target number
function compareGuesses(humanGuess, computerGuess, targetNum) {
  // Absolute value between human guess and target
  const humanDist = getAbsoluteDistance(humanGuess, targetNum);
  // Absolute value between computer guess and target
  const computerDist = getAbsoluteDistance(computerGuess, targetNum);
  if (humanDist <= computerDist) { // if human guess it closer (or guesses equal)
    return true;
  } else { // if computer guess is closer
    return false;
  }
}

/*
// Testing out the compareGuesses function...
console.log(compareGuesses(1, 9, 2)) // should be true
console.log(compareGuesses(1, 1, 2)) // should be true
console.log(compareGuesses(9, 1, 2)) // should be false
*/

// Increases the winner's score after each round
function updateScore(winner) {
  if (winner === 'human') {
    humanScore ++;
  } else if (winner === 'computer') {
    computerScore ++;
  } else {
    console.log('Invalid input!')
  }
}

// Updates the round number after each round
function advanceRound() {
  currentRoundNumber ++;
}
