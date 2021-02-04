'use strict'
// Please don't delete the 'use strict' line above

//2
console.log(1100 > 99); // should return true

console.log(1 !== 1); // => false

console.log(62 !== 63); // => true

console.log("5" === 5); // => false

console.log("6" !== "six"); // => true

//3
console.log(2 * 3 * 10 > 50);

//4
function isEqual(valueOne, valueTwo) {
  return valueOne == valueTwo;
}

console.log(isEqual(7, "7"));

//5
function isGreaterThan(valueOne, valueTwo) {
  return valueOne > valueTwo;
}
console.log(isGreaterThan(7, 4));
console.log(isGreaterThan(4, 7));

//6
function isOfAge(number) {
    return number >= 20;
}

console.log(isOfAge(20));


//Medium
//1
function isOfAge(number) {
  if (number >= 20) {
    return "Drink Up!";
  }
}

console.log(isOfAge(20));

//2
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(101));
/*
//3 //<--wrong
function validCredentials(username, password) { 
  if (username.length >= 7 && password.length >= 7) {
    return true;
  } else {
    return false;
  }
}

console.log(validCredentials(oakland, athletics));

//advanced
//1 //<--wrong
function isEven(n) { 
  if((n & 1) == 1) {
    return true;
  }
  return false;
}

console.log(isEven(4));
*/

//warmup 1/18/21

function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting("Kana"));
console.log(greeting("Kimiko"));

function average(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(average(3, 4));

//warmup week 3
// Week 3 warmup
function isMultipleOfThree(num) {
  if (num % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

// Test cases
console.log(isMultipleOfThree(6)); // => true
console.log(isMultipleOfThree(10)); // => false

function isMultipleOf(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}

 // Test cases
 console.log(isMultipleOf(6, 3)); // => true
 console.log(isMultipleOf(10, 4)); // => false