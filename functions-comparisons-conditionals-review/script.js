'use strict'
// Please don't delete the 'use strict' line above

let actual;
let expected;

//1
/**
 * @param {string} ??? - the string to test
 * @param {number} ??? - the threshold length
 * @returns {any} whether or not the given string is longer that the given threshold
 */
/*
function isLongerThan(str, num) {
  if (typeof str != "string") {
    return 'Invalid input.';
  } else if (str.length > num) {
    return true;
  } else {
    return false;
  }
}

actual = isLongerThan("three", 3);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isLongerThan("three", 5);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isLongerThan(3, 5);
expected = "Invalid input.";

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
 * @param {number} ??? - the number to test
 * @returns {boolean} whether or not the given number is odd
 */
/*
function isOddWithoutIf(num) {
  if (num % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

actual = isOddWithoutIf(3);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isOddWithoutIf(4);
expected = false;

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
 * @param {number} ??? - the number whose name should be returned (0-10)
 * @returns {'zero'|'one'|'two'|'three'|'four'|'five'|'six'|'seven'|'eight'|'nine'|'ten'} the name of the given number
 */
/*
function getSimpleNumberName(num) {
  if (num === 0) {
    return "zero";
  } else if (num === 1) {
    return "one";
  } else if (num === 2) {
    return "two";
  } else if (num === 3) {
    return "three";
  } else if (num === 4) {
    return "four";
  } else if (num === 5) {
    return "five";
  } else if (num === 6) {
    return "six";
  } else if (num === 7) {
    return "seven";
  } else if (num === 8) {
    return "eight";
  } else if (num === 9) {
    return "nine";
  } else if (num === 10) {
    return "ten";
  }
}

actual = getSimpleNumberName(0);
expected = "zero";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure your code is correct.

actual = getSimpleNumberName(5);
expected = "five";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getSimpleNumberName(10);
expected = "ten";

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
 * @param {number} ??? - the number of sides of the regular polygon (3-8)
 * @returns {'triangle'|'square'|'pentagon'|'hexagon'|'heptagon'|'octagon'} the name of the regular convex polygon with the given number of sides
 */
function getRegularConvexPolygonName(num) {
  if (num === 3) {
    return "triangle";
  } else if (num === 4) {
    return "square";
  } else if (num === 5) {
    return "pentagon";
  } else if (num === 6) {
    return "hexagon";
  } else if (num === 7) {
    return "heptagon";
  } else if (num === 8) {
    return "octagon";
  } else {
    return "beat it";
  }
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure your code is correct.

actual = getRegularConvexPolygonName(8);
expected = "octagon";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getRegularConvexPolygonName(1);
expected = "beat it";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}