'use strict'
// Please don't delete the 'use strict' line above

const name = "Blair";
console.log(name);
let age = 45;
console.log(age);
let currentTask = 1;
console.log(currentTask);
let isProgrammer = true;
console.log(isProgrammer);
currentTask = 2;
console.log(currentTask);

const squareSideLength = 2;
const squareArea = squareSideLength * 2;
console.log(squareArea);

const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
const rectangleArea = rectangleBaseLength * rectangleHeightLength;
console.log(rectangleArea);

const triangleBaseLength = 4;
const triangleHeightLength = 5;
const triangleArea = .5 * triangleBaseLength * triangleHeightLength;
console.log(triangleArea);

const circleDiameter = 10;
const circleRadius = 5;
const circleCircumference = 2 * 3.14 * 5;
console.log(circleCircumference);
const circleArea = 3.14 * circleRadius ** 2;
console.log(circleArea);

let a = "B";
let b = "A";
let temp;

temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

let value = 1;
console.log(value);
value = value * 2;
console.log(value);
value = value * 2;
console.log(value);
value = value * 2;
console.log(value);
value = value * 2;
console.log(value);
value = value * 2;
console.log(value);
value = value * 2;
console.log(value);

const firstName = 'Blair';
const lastName = 'Murphy';
const city = 'Tokyo';
console.log(`Hello, my name is ${firstName} ${lastName}. I live in ${city}.`)

let num = 1;
function counter() {
  console.log(num++);
}

counter();
counter();
counter();

function isOdd(givenNumber) {
  if (givenNumber % 2 === 1) {
    console.log("Yes, it's odd");
  } else {
    console.log("No, it's even");
  }
}

isOdd(7);
isOdd(34);

