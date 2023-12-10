// ======================================================================================
// 1.
// Use a console.log to print out "hello world!" using the given variables. Try
// using both concatenation and interpolation for two different methods. How can
// you do interpolation?
// https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
// Using research sources, like Documentation and Stack Overflow, is a vital
// skill for programmers!
const message = "hello";
const recipient = "world";
console.log(message + ' ' + recipient + '!');
console.log(`${message} ${recipient}!`);


// ======================================================================================
// 2.
// One plus one is...? Research as many ways as you can for adding 1 to the
// number variable.  Then, console.log the phrase "1 + 1 is 2" by using the
// updated value of the number variable.
let number = 1;
number = number + 1;
// number += 1;
// number++;
// ++number;
console.log(`1 + 1 is ${number}`)


// ======================================================================================
// 3.
// Data types can cause unexpected issues in JavaScript. Use the typeof operator
// to investigate and log the type of the following variables. Your console
// messages should be formatted like so: "clearancePrice is a number"
// Documentation on typeof:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
const programmingIsCool = true;
const clearancePrice = 1.99;
const lifeTheUniverseAndEverything = 42;
const theCruelestMonth = "April";
console.log('programmingIsCool is a ' + typeof programmingIsCool);
console.log('clearancePrice is a ' + typeof clearancePrice);
console.log('lifeTheUniverseAndEverything is a ' + typeof lifeTheUniverseAndEverything);
console.log('theCruelestMonth is a ' + typeof theCruelestMonth);


// ======================================================================================
// 4.
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following in variables
// - job title
// - geographic location
// - favourite sport
// - side project
// Using the variables you defined, output your fortune to the console like so:
// "You will be a Programmer in Portugal, playing Tennis while building a Flying Car."
const jobTitle = 'Programmer';
const geographicLocation = 'Portugal';
const favouriteSport = 'Tennis';
const sideProject = 'Flying Car';
console.log(`You will be a ${jobTitle} in ${geographicLocation}, playing ${favouriteSport} while building a ${sideProject}.`);


// ======================================================================================
// 5.
// Search for the formula for converting from Fahrenheit to Celsius.
// Store a fahrenheit temperature into a variable.
// Convert it to celsius and output the result like so:
// "42°F is 5.555555555555555°C"
const fahrenheit = 42;
console.log(`${fahrenheit}°F is ${(fahrenheit - 32) / 1.8}°C`);


// ======================================================================================
// 5.
// For each expression, predict what you think the output will be in a comment
// (`//`) ***without first running the command***. Then run the expression in
// the console. Note the actual output in a comment and compare it with your
// prediction.

// What is the output of each of the expressions below?

console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: NaN
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual: 13

console.log("1" - "3")
// Prediction: -2
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: NaN
// Actual: NaN

console.log(99 * "luftbaloons")
// Prediction: NaN
// Actual: NaN

console.log(5 + true)
// Prediction: 6
// Actual: 6

console.log(5 + false)
// Prediction: 5
// Actual: 5

// WAT! What type weirdness is going on here?  Raad more about Type Conversions
// in JS here: https://javascript.info/type-conversions
