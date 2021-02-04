'use strict'
// Please don't delete the 'use strict' line above

let actual;
let expected;

//1. Declare a function sumArray.

/**
 * @param {Array<number>} ??? - the numbers to add together
 * @returns {number} all of the numbers in the given array, added together
 */
/*
function sumArray(arrayOfNumbers) {
  let result = 0;
  for (const number of arrayOfNumbers) {
    result = result + number;
  }
  return result;
}

actual = sumArray([1, 2, 3, 4]);
expected = 10;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/
//2 Declare a function productArray.

/**
 * @param {Array<number>} ??? - the numbers to multiply together
 * @returns {number} all of the numbers in the given array, multiplied together
 */
/*
function productArray(arrayOfNumbers) {
  let result = 1;
  for (const number of arrayOfNumbers) {
    result = result * number;
  }
  return result;
}

actual = productArray([1, 2, 3, 4]);
expected = 24;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/
// Write more tests
/*
function productArray(arrayOfNumbers) {
  let result = 10;
  for (const number of arrayOfNumbers) {
    result = result * number;
  }
  return result;
}

actual = productArray([1, 2, 3, 4]);
expected = 240;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/
//3 Declare a function hasFun.

/**
 * @param {Array<any>} ???
 * @returns {boolean} whether or not the given array includes the string "fun"
 */
/*
function hasFun(strings) {
  let result = false;
  for (const string of strings) {
    if (string === "fun") {
      result = true;
    }   
  }
  return result;
}

actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/
// Write more tests
/*
function hasFun(strings) {
  let result = 0;
  for (const string of strings) {
    result = strings.includes(2);
  }
  return result;
}

actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
*/
//4 Declare a function containsOnlyBooleans.

/**
 * @param {Array<any>} ???
 * @returns {boolean} whether or not every element in the given array is a boolean
 */
/*
function containsOnlyBooleans(booleans) {
  let result = true;
  for (const boolean of booleans) {
    if (typeof(boolean) !== 'boolean') {
      result = false;
    } 
  } 
  return result;   
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// Write more tests
*/
//5 Declare a function concatenate. Don’t use the built-in concat method.

/**
 * @param {Array<any>} ??? - the first array
 * @param {Array<any>} ??? - the second array
 * @returns {Array<any>} the two given arrays, concatenated together
 */

function concatenate(arrays) {
  let array1 = ["eeny", "meeny"];
  let array2 = ["miny", "moe"];
  let result = [];
    for (const array of arrays) {
      result.push(["eeny", "meeny"] + ["miny", "moe"]);
    }
    return result;
  }
 

  

actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];

// Remember, we need to use JSON.stringify to compare arrays (for now)
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// Write more tests
