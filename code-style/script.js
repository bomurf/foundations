'use strict'
// Please don't delete the 'use strict' line above

//1

// Declare the tdd variables to be used throughout the file.
let expected;
let actual;

/*
getAverage;
function getAverage(num1, num2) {
  const num3 = 2; 
  return (num1 + num2) / num3;
}

expected = 1; // whatever you expect the value of the EXPRESSION to be
actual = getAverage(1, 1); // whatever EXPRESSION you are testing

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 1.5; // whatever you expect the value of the EXPRESSION to be
actual = getAverage(1, 2); // whatever EXPRESSION you are testing

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 2.5;
actual = getAverage(2, 3);

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 3;
actual = getAverage(2, 4);

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
/*
isPositive

function isPositive(thing) {
  if (thing < 0) { 
    return false; 
  } else if (thing > 0) { 
    return true; 
  } else if (thing === 0) { 
    return false; 
  }
}

expected = true // whatever you expect the value of the EXPRESSION to be
actual = isPositive(1); // whatever EXPRESSION you are testing
if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// Add more tests here.

expected = false // whatever you expect the value of the EXPRESSION to be
actual = isPositive(-2); // whatever EXPRESSION you are testing
if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = false // whatever you expect the value of the EXPRESSION to be
actual = isPositive(0); // whatever EXPRESSION you are testing
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
/*
//3
areaOfTriangle

function areaOfTriangle(base, height) {
  const areaOfRectangle = base * height;
  return areaOfRectangle / 2;
}

expected = 7.5; // whatever you expect the value of the EXPRESSION to be
actual = areaOfTriangle(3, 5); // whatever EXPRESSION you are testing

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// Add more tests here.

expected = 10;
actual = areaOfTriangle(4, 5);

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = 35;
actual = areaOfTriangle(7, 10);

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
getMultipleOfSeven

function getMultipleOfSeven(number) {
  const getMultipleOfSeven = number % 7 === 0;

  if (getMultipleOfSeven === true) {
    return true;
  } else {
    return false;
  }
}

// Add tests here.
expected = true;
actual = getMultipleOfSeven(35);

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

expected = false;
actual = getMultipleOfSeven(36);

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

getAbsolute

function getAbsolute(number) {
  const zero = 0;
  if (number < zero) {
    return zero - number;
  }
  return number;
}

// Add tests here.

expected = true;
actual = getAbsolute();

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}