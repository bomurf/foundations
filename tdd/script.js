'use strict'
// Please don't delete the 'use strict' line above

//console.log("Hello TDD");
/*
let actual;
let expected;

function addTen(n) {
  return n + 10;
}

actual = addTen(5);
expected = 15;

if (actual === expected) {
  console.log("You are correct!");
} else {
  console.error("Whoops!");
  console.group("Result:");
  console.log("actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = addTen(12);
expected = 22;

if (actual === expected) {
  console.log("You are correct!");
} else {
  console.error("Whoops!");
  console.group("Result:");
  console.log("actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/

//1
/**
 * @param {string} firstName - the first name
 * @param {string} lastName - the last name
 * @returns {string} the first name and last name joined with a space
 */

 let actual;
 let expected; 

/*
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

actual = getFullName("Ken", "Watanabe");
expected = "Ken Watanabe";

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/

//2
/**
 * @param {string} name - the person's name
 * @param {boolean} isFormal - whether or not a formal greeting should be used
 * @returns {string} a greeting (formal or informal) for the given person's name
 */
/*
function simpleGreeting(name, isFormal) {
  if (isFormal === true) {
   return `Hello, ${name}-san.`;
  } else {
    return `Hello, ${name}.`;
  }
}

actual = simpleGreeting("Amy", true);
expected = "Hello, Amy-san.";

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/

//3
/**
 * @param {number} ??? - the first number
 * @param {number} ??? - the second number
 * @returns {boolean} whether or not the given first number is greater than the given second number
 */
/*
function isGreaterThan(num1, num2) {
  if (num2 > num1) {
    return false;
  } else {
    return true;
  }
}
actual = isGreaterThan(5, 4);
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isGreaterThan(3, 4);
expected = false;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/

//4 
/*
function add(a, b) {
  return a + b;
}

// Convert OLD style…
// console.log(add(4, 3)); // should return 7
// console.log(add(100, 42)); // => 142

// …to NEW style
actual = add(4, 3);
expected = 7;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

//Previous functions
//1A
function subtract(num1, num2) {
  return num1 - num2;
}

actual = subtract(4, 3);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = subtract(100, 42);
expected = 58;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

//2A
function greeting(name) {
  return(`Hello, ${name}!`);
}

//console.log(greeting("Alex"));
//console.log(greeting("Beau"));

actual = greeting("Alex");
expected = "Hello, Alex!";

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = greeting("Beau");
expected = "Hello, Beau!";

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

//3A
function cube(x) {
  return x ** 3;
}

//console.log(cube(3));

actual = cube(3);
expected = 27;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

//4A
function isMultipleOfThree(num) {
  if (num % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

actual = isMultipleOfThree(198);
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

//5A
function surfAreaCube(side) {
  return 6 * (side ** 2);
}

//console.log(surfAreaCube(3));

actual = surfAreaCube(2);
expected = 24;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/

//5
/**
 * @param {'+'|'-'|'*'|'/'|'**'|'%'} ??? - the arithmetic operator to use
 * @param {number} ??? - the first operand
 * @param {number} ??? - the second operand
 * @returns {number} The result of executing the given operator on the given operands, in order
 */
// Declare your function here.
/*
function operate(operator, num1, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "**") {
    return num1 ** num2;
  } else if (operator === "%") {
    return num1 % num2;
  }
}

actual = operate("+", 1, 2);
expected = 3;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = operate("-", 100, 33);
expected = 67;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
actual = operate("*", 100, 2);
expected = 200;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
actual = operate("/", 35, 5);
expected = 7;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
actual = operate("**", 2, 3);
expected = 8;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
actual = operate("%", 33, 2);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// Write your own tests for *, /, **, and %
*/

//6

/**
 * @param {string} ??? - the color to check
 * @returns {boolean} whether or not the given color is a rainbow color
 */

// Declare your function here.

function isRainbowColor(color) {
  const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  let lowerCaseColor = color.toLowerCase();
  if (rainbowColors.includes(color.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

actual = isRainbowColor("red");
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("rED");
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("Brown");
expected = false;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// Write more tests for other rainbow colors.

actual = isRainbowColor("blue");
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("indigo");
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("hi");
expected = false;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("green");
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isRainbowColor("YELLow");
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


//Medium
//1
/*
getRange

function getRange(input, lower, upper) {
  if (input >= lower) {
    return true;
  } else if (input <= upper) {
    return true;
  } else if (input > upper) {
    return false;
  } else if (input < lower) {
    return false;
  }
}

// Add tests here.
actual = getRange(5, 1, 10);
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = getRange(1, 5, 10);
expected = true;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/
//Warm Up for 1/27/21
/**
 * @param {number} ??? - the first number
 * @param {number} ??? - the second number
 * @returns {'X is equal to Y' | 'X is less than Y' | 'X is greater than Y'} an explanation of how the given numbers compare
 */
// Declare your function here.
function compareTwoNumbers(num1, num2) {
  if (num1 === num2) {
    return `${num1} is equal to ${num2}`;
  } else if (num1 < num2) {
    return `${num1} is less than ${num2}`;
  } else if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  }
}

actual = compareTwoNumbers(1, 1);
expected = "1 is equal to 1";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = compareTwoNumbers(3, 4);
expected = "3 is less than 4";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write your own test for "X is greater than Y".
actual = compareTwoNumbers(100, 99);
expected = "100 is greater than 99";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}