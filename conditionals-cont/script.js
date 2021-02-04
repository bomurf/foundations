'use strict'
// Please don't delete the 'use strict' line above

let expected;
let actual;

/**
 * @param {number} ??? - the person's age
 * @returns {boolean} whether or not the person with the given age is a teenager. (age 13~19: "thirTEEN" to "nineTEEN")
 */

 //1
 /*
function isTeenager(age) {
  if (age >= 13 && age <= 19) {
    return true;
  } else {
    return false;
  }
}

actual = isTeenager(3);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(14);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure your code is correct.

actual = isTeenager(13);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(20);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
*/

//2
/*
function isTeenager(age) {
  if (age >= 13 && age <= 19) {
    return true;
  } else if (age != Number) {
    return `Invalid! The given age is not a number!`;
  }
}

actual = isTeenager("Hello!");
expected = "Invalid! The given age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager(true);
expected = "Invalid! The given age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager();
expected = "Invalid! The given age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
*/
//3
/**
 * @param {string} ??? - the person's name
 * @param {boolean} ??? - whether or not to use a formal greeting
 * @param {boolean} ??? - true for 'Hello', false for 'Goodbye'
 * @returns {string} a formal or informal greeting or farewell
 */
/*
function anotherGreeting(name, formalGreeting, greeting) {
  if (name  && formalGreeting === true && greeting === true) {
    return `Hello, ${name}-san.`;
  } else if (name && formalGreeting === false && greeting === true) {
    return `Hello, ${name}!`;
  } else if (name && formalGreeting === true && greeting === false) {
    return `Goodbye, ${name}-san.`;
  } else if (name === "string" && formalGreeting != "boolean" || greeting != "boolean") {
    return `Invalid input!`;
  }
}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to see if your code is correct.

actual = anotherGreeting("Dion", true, true);
expected = "Hello, Dion-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Eli", false, true);
expected = "Hello, Eli!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//Medium ******************************************************************

//1 *********************WRONG*******************
actual = anotherGreeting(true, false, true);
expected = "Invalid input!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Sam", true, 0);
expected = "Invalid input!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
*/

//2

/**
 * @param {number} ??? - the numerical grade, from 0 to 100
 * @returns {'A'|'B'|'C'|'D'|'F'} the letter grade for the given numerical grade
 */
/*
function getLetterGrade(number) {
  if (number >= 90 && number <= 100) {
    return `A`;
  } else if (number >= 80 && number <= 89) {
    return `B`;
  } else if (number >= 70 && number <= 79) {
    return `C`;
  } else if (number >= 60 && number <= 69) {
    return `D`;
  } else if (number <= 59 && number >= 0) {
    return `F`;
  } else if (number < 0 || number > 100) {
    return `Invalid grade.`
  }
}

actual = getLetterGrade(95);
expected = "A";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.

actual = getLetterGrade(59);
expected = "F";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getLetterGrade(74);
expected = "C";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//3 
actual = getLetterGrade(101);
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.

actual = getLetterGrade(-1);
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
*/
//4

/**
 * @param {'A'|'B'|'C'|'D'|'F'} ??? - the letter grade
 * @returns {number} the best numerical grade for the given letter grade
 */
/*
 function getBestNumericalGrade(grade) {
   if (grade === 'A') {
     return 100;
   } else if (grade === `B`) {
     return 89;
   } else if (grade === `C`) {
     return 79;
   } else if (grade === `D`) {
     return 69;
   } else if (grade === `F`) {
     return 59;
   } else {
     return `Invalid grade.`
   }
 }

actual = getBestNumericalGrade("A");
expected = 100;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("B");
expected = 89;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.

actual = getBestNumericalGrade("F");
expected = 59;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//5

actual = getBestNumericalGrade("dinosaurs are awesome");
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade(100);
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.

actual = getBestNumericalGrade("a");
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
*/
//Warm Up
/**
 * @param {'Spring'|'Summer'|'Fall'|'Winter'} ??? - the current season
 * @param {'warm'|'hot'|'cool'|'cold'} ??? - the current temperature
 * @returns {'The temperature is normal for the season.'|'The temperature is unusual for the season.'} a description of the weather, depending on the given season and temperature
 */
function describeTheWeather(season, temperature) {
  if (season === "Spring" && temperature === "warm") {
    return `The temperature is normal for the season.`;
  } else {
    return `The temperature is unusual for the season.`;
  }
}

actual = describeTheWeather("Spring", "warm");
expected = "The temperature is normal for the season.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("Spring", "cold");
expected = "The temperature is unusual for the season.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure your code is correct.