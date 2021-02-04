console.log("hello advanced.js!");

let upperBound = 5;
function guessMyNumber(n) {
  if (n > upperBound) {
    return "Please try a number between 0 and 5.";
  } else if (n === randomNumber(upperBound)) {
    return "You guessed my number!";
  }
  return "Nope! The correct number was: 5!";
}

function randomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}