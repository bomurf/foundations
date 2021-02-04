'use strict'
// Please don't delete the 'use strict' line above

//1
/*
function simplePasswordLock(password) {
  if (password === "password") {
    return "Correct! Welcome.";
  }
  return "Incorrect password, please try again.";
}
//Tests:

console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."
*/

/*
//2
console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);
*/

/*
//3
function isItTooLong(cityName) {
  if (cityName.length > 10) {
    return true;
  } else if (cityName.length <= 10) {
    return false;
    }
  }

  console.log(isItTooLong("chiba"));
  console.log(isItTooLong("higashikurume"));
  */

/*
//4 
function biggerNumber(numOne, numTwo) {
  if (numOne > numTwo) {
    return "The first argument is bigger.";
  } else if (numTwo > numOne) {
    return "The second argument is bigger.";
  }
}

//Test cases:

console.log(biggerNumber(4, 3)); // should print 'The first argument is bigger.'
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
*/

/*
//5 
function printDataType(data) {
  if (typeof data === "string") {
    console.log("This is a string.");
  } else if (typeof data === "boolean") {
      console.log("This is a boolean."); 
  } else if (typeof data === "number") {
      console.log("This is a number.");
  } else {
      console.log ("This is not a string, a boolean, or a number.");
  }
  }

//Test cases:

printDataType("Hello!"); // should print "This is a string."
printDataType(true); // => "This is a boolean."
printDataType(42); // => "This is a number."
printDataType(undefined); // should print "This is not a string, a boolean, or a number."
*/

/*
//6 
function greeting(name, language) {
  if (name, language === "Japanese") {
    return `Konnichiwa, ${name}!`;
  } else if (name, language === "English") {
    return `Hello, ${name}!`;
  } else if (name, language === "German") {
    return `Gutentag, ${name}!`;
  } else if (name, language === "Spanish") {
    return `Hola, ${name}!`;
  }
}

console.log(greeting("Blair", "Japanese")); // should print "Konnichiwa, Harry Potter!"
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"
*/

/*
//7
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); // should print true
console.log(isEven(7)); // => false
console.log(isEven("true"));
*/

/*
//Medium 1
function isOdd(number) {
  return number % 2 === 1;
}

console.log(isOdd(7));
console.log(isOdd(8));
*/

/*
//2
function isPositive(number) {
  return number >= 0;
}

console.log(isPositive(7));
console.log(isPositive(-1));
*/

/*
//3
function isNegative(number) {
  return number <= 0;
}

console.log(isNegative(7));
console.log(isNegative(-7));
*/


//4
function isZero(number) {
  return number === 0;
}

console.log(isZero(0));
console.log(isZero(1));