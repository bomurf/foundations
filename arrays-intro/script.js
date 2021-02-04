'use strict'
// Please don't delete the 'use strict' line above


let actual;
let expected;
/*
//Pair Problems
//1
const instructors = ["Kimiko", "Yan", "Dustin", "Dylan"];

console.log(instructors[instructors.length - 1]);

//2
const numbers = [1, 2, 3];

console.log(numbers[2]); // 3
console.log(numbers[0]); // 1
console.log(numbers[numbers.length - 1]); // 3

// Read the docs (MDN) closely for the following!

console.log(numbers.pop() + numbers.pop()); // 5?

numbers.unshift(4, 5, 6);
console.log(numbers); // 4,5,6,1

console.log(numbers.shift()); // 4

console.log(numbers.length); // 3

numbers.push(5);
numbers.push(6);

console.log(numbers.pop() * numbers.pop()); // 30
console.log(numbers[0]); // 5


//3
const numbers = [
  [0, 1, 2, 3],
  ["zero", "one", "two", "three"],
  ["rei", "ichi", "ni", "san"],
];
console.log(numbers[2]); // ["rei", "ichi", "ni", "san"]
console.log(numbers[1][1]); // "one"
console.log(numbers[0][2]); // 2
console.log(numbers[numbers.length - 1][0]); // "rei"
console.log(numbers[2].length); // 4
console.log(numbers.pop()); // ["rei", "ichi", "ni", "san"]
console.log(numbers[0].push(4)); // 5
console.log(numbers.length); // 2

//4
const string = "hello";
console.log(string.length); // 5
console.log(string[0]); // h
console.log(string[3]); // l
console.log(string[string.length - 1]); // o
*/

//Basic
//1
/* When dealing with objects (like arrays), a simple comparison won't work.
We'll need to use a built-in function called JSON.stringify to compare the objects.
More about that in a future lesson. */
/*
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}
*/
/**
 * @param {Array<string>} arrayOfPeople - an array of people's names
 * @returns {number} the length of the given array of names
 */
/*
function numberOfPeople(arrayOfPeople) {
  arrayOfPeople = ["Alex", "Beau", "Carlos", "Dustin"];
  return arrayOfPeople.length;
}

actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
expected = 4;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

//2

const students = ["Dion", "Eli", "Hal", "Sarah", "Kenny"];

function numberOfPeople(students) {
  //students = ["Dion", "Eli", "Hal", "Sarah", "Kenny"];
  return students.length;
}


actual = numberOfPeople(students);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

//3
students.push("Jim", "Michael", "Dwight");
function numberOfPeople(students) {
  return students.length;
}

actual = numberOfPeople(students);
expected = 8;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}
*/
//4
/**
 * @param {Array<any>} array - an array of elements
 * @returns {any} the last element of the given array
 */
/*
const array = ["one", "two", "three", "four", "five"];
function last(array) {
  
  return array[4];
}

// Write your own tests

actual = last(array);
expected = "five";

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}
*/

//5
/**
 * @param {Array<any>} ??? - an array of elements
 * @param {any} ??? - the value to add to the end of the given array
 * @returns {number} the new length of the given array
 */

let array = [1, 2, 3, 4];
function push(array) {
  
  array = 5;
  return array;
}
// Test that the function returns the correct result.
actual = push(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// Test that the function modifies the given array correctly.

//let array = [1, 2, 3, 4];

function push(array) {
  array[array.length] = 5;
  array = 5;
  return array;
}

actual = array;
expected = [1, 2, 3, 4, 5];

// When dealing with objects (like arrays), a simple comparison won't work. We'll need to use a built-in function called JSON.stringify to compare the objects.
// More about that in a future lesson.
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

// Write your own tests