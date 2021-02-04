'use strict'
// Please don't delete the 'use strict' line above
/*
5 + 6;
console.log(6 + 6);

//1
function add(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(add(10, 11));
console.log(add(7, 4));
//2
console.log(add(100));
console.log(add(1, 4, 5));

//3

function simpleFunctionA() {
  return "Hello simple function A";
}

function simpleFunctionB() {
  console.log("Hello simple function B");
}

console.log(simpleFunctionA(), "--> From running Simple Function A");
console.log(simpleFunctionB(), "--> From running Simple Function B");

//4

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(4, 3));
console.log(subtract(100, 42));

//5 
function greeting(name) {
  return("Hello, " + name + "!");
}

console.log(greeting("Alex"));
console.log(greeting("Beau"));

//6
function average(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(average(7, 5));

//7

function square(5) { <--number as parameter
  return 5 * 5;
}
function square("x") { <--quotations around parameter
  return "x" * "x";
}


function Square(monkey) {
  return monkey * monkey;
}


//8
function cube(x) {
  return x ** 3;
}

console.log(cube(3));
*/

// Medium
//1
/*
function simpleHelloA() {  (Not sure what I'm looking for here)
  console.log("hello");
}

function simpleHelloB() {
  return "hello";
}

const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b);
*/

//2
function createGreeting(greetingPhrase, instructorName) {
  return greetingPhrase + ", " + instructorName + "!";
}

console.log(createGreeting("Good morning", "Mike")); // should print 'Good morning, Mike!'
console.log(createGreeting("Hello", "Beau")); // should print 'Hello, Beau!'
console.log(createGreeting("Good evening", "Alex")); // should print 'Good evening, Alex!'

//3
//square
function areaSquare (side) {
  return side ** 2;
}

console.log(areaSquare(4));

function perimeterSquare(side) {
  return side * 4;
}

console.log(perimeterSquare(5));

//rectangle
function areaRectangle(length, width) {
  return length * width;
}

console.log(areaRectangle(2, 7));

function perimeterRectangle(length, width) {
  return (length * 2) + (width * 2);
}

console.log(perimeterRectangle(3, 5));

//parallelogram
function areaParallelogram (length, height) {
  return length * height;
}

console.log(areaParallelogram(3, 4));

function perimeterParallelogram(length, width) {
  return (length * 2) + (width * 2);
}

console.log(perimeterParallelogram(2, 4));

//trapezoid
function areaTrapezoid(height, base1, base2) {
  return .5 * height * (base1 + base2);
}

console.log(areaTrapezoid(4, 4, 7));

function perimeterTrapezoid(side1, side2, base1, base2) {
  return side1 + side2 + base1 + base2;
}

console.log(perimeterTrapezoid(4, 7, 5, 5));

//triangle
function areaTriangle(base, height) {
  return .5 * base * height;
}

console.log(areaTriangle(5, 4));

function perimeterTriangle(side1, side2, base) {
  return side1 + side2 + base;
}

console.log(perimeterTriangle(3, 5, 7));
  
//circle
function areaCircle(radius) {
  return Math.PI * (radius ** 2);
}

console.log(areaCircle(10));

function circumferenceCircle(radius) {
  return (2 * Math.PI) * radius;
}

console.log(circumferenceCircle(10));

//rectangular solid
function volumeRectSolid(length, width, height) {
  return length * width * height;
}

console.log(volumeRectSolid(6, 2, 3));

function surfAreaRectSolid(length, width, height) {
  return (2 * length * height) + (2 * width * height) + (2 * width * length);
}

console.log(surfAreaRectSolid(6, 2, 3));

//cube
function volumeCube(side) {
  return side ** 3;
}

console.log(volumeCube(3));

function surfAreaCube(side) {
  return 6 * (side ** 2);
}

console.log(surfAreaCube(3));

//right circular cylinder 
function volumeRtCircCyl(radius, height) {
  return Math.PI * (radius ** 2) * height;
}

console.log(volumeRtCircCyl(5, 10));

function surfAreaRtCircCyl(radius, height) {
  return (2 * Math.PI) * (radius * height) + (2 * Math.PI) * (radius ** 2);
}

console.log(surfAreaRtCircCyl(2, 6));

//sphere
function volumeSphere(radius) {
  return (4 / 3) * Math.PI * (radius ** 3); 
}

console.log(volumeSphere(3));

function surfAreaSphere(radius) {
  return (4 * Math.PI) * (radius ** 2);
}

console.log(surfAreaSphere(3));

//right circular cone
function volumeRtCircCone(radius, height) {
  return (1 / 3) * Math.PI * (radius ** 2) * height;
}

console.log(volumeRtCircCone(3, 5));

function surfAreaRtCircCone(radius, height) {
  return Math.PI * (radius * Math.sqrt(radius ** 2 + height ** 2));
}

console.log(surfAreaRtCircCone(3, 5));

//rectangular pyramid
function volumeRectPyramid(length, width, height) {
  return (1 / 3) * length * width * height;
}

console.log(volumeRectPyramid(5, 4, 6));

//frustum of right circular cone 
function volumeFrustum(smallRad, bigRad, height) {
  return Math.PI * ((smallRad ** 2) + (smallRad * bigRad) + (bigRad ** 2)) * height / 3;
}

console.log(volumeFrustum(2, 4, 6));

function surfAreaFrustum(side, bigRad, smallRad) {
  return Math.PI * (side * (bigRad + smallRad));
}

console.log(surfAreaFrustum(7, 4, 2));

