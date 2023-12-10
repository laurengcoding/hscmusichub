// Let's create some functions!
// Don't forget to console.log the result of calling your functions so you can
// see the output in the console. e.g
// console.log(myFunction('some argument'))

// ======================================================================================
// 1. Square of a number
// Create a function called `squared` that:
// - takes one argument, a number
// - returns the argument multiplied by itself (the square of the number).
// Example:
// console.log(squared(3)) // outputs 9

function squared(num) {
  return num * num;
}

console.log(squared(9));
console.log(squared(5));
console.log(squared(-3));


// ======================================================================================
// 2. Get string length!
// Create a function called `stringLength` that:
// - takes on argument, a string
// - returns the length (the number of characters) of that string
// Example:
// console.log(stringLength("hello")) // outputs 5

function stringLength(str) {
  return str.length;
}

console.log(stringLength('testing'));
console.log(stringLength('This is a longer string.'));


// ======================================================================================
// 3. Create a function called `sayHello` that:
// - takes one argument
// - returns a string that is the combination of "Hello, " + the argument passed
//   into the function
// Example:
// console.log(sayHello("Paul")) // outputs "Hello, Paul"

function sayHello(name) {
  return `Hello, ${name}`;
}

console.log(sayHello('Paul'));


// ======================================================================================
// 4. Create a function called `fahrenheitToCelsius` that:
// - takes one argument, a number
// - return the result of converting the number to celsius
// Example:
// console.log(fahrenheitToCelsius(42)) // outputs 5.555555555555555
function fahrenheitToCelsius(tempF) {
  return (tempF - 32) / 1.8;
}

console.log(fahrenheitToCelsius(42));


// ======================================================================================
// 5. Add two numbers together
// Create a function called addNumbers that:
// - takes two arguments
// - returns the sum of those arguments
// Example:
// console.log(addNumbers(36, 6)) // outputs 42

function addNumbers(x, y) {
  return x + y;
}

console.log(addNumbers(4, 11));
console.log(addNumbers(6, 3));


// ======================================================================================
// 6. Create a function called `whoami` that:
// - takes four arguments:
//    1. name - a string
//    2. birthYear - a number
//    3. hobby1 - a string
//    4. hobby2 - a string
// - return a string using the arguments like so:
// Example:
// console.log(console.log(whoami('Taylor', 2007, 'running', 'trying to be a superhero')));
// outputs "Hi, my name is Taylor. I am 16 years old. My hobbies are running and trying to be a superhero."

function whoami(name, birthYear, hobby1, hobby2) {
  const age = 2023 - birthYear
  return `Hi, my name is ${name}. I am ${age} years old. My hobbies are ${hobby1} and ${hobby2}.`
}

console.log(whoami('Taylor', 2007, 'running', 'trying to be a superhero'));
