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

function squared (number) {
    return number * number;
}
console.log(squared(4));
console.log(squared(34));


// ======================================================================================
// 2. Get string length!
// Create a function called `stringLength` that:
// - takes on argument, a string
// - returns the length (the number of characters) of that string
// Example:
// console.log(stringLength("hello")) // outputs 5

function stringLength(characters) {
    return characters.length;
}
console.log(stringLength("how many characters?"))

// ======================================================================================
// 3. Create a function called `sayHello` that:
// - takes one argument
// - returns a string that is the combination of "Hello, " + the argument passed
//   into the function
// Example:
// console.log(sayHello("Paul")) // outputs "Hello, Paul"

function sayHello(name) {
    return `Hello, ${name}` 
}
console.log(sayHello("Lauren"))


// ======================================================================================
// 4. Create a function called `fahrenheitToCelsius` that:
// - takes one argument, a number
// - return the result of converting the number to celsius
// Example:
// console.log(fahrenheitToCelsius(42)) // outputs 5.555555555555555

function fahrenheitToCelsius(number) {
    return (number - 32) * 5/9;
}
console.log(fahrenheitToCelsius(79));


// ======================================================================================
// 5. Add two numbers together
// Create a function called addNumbers that:
// - takes two arguments
// - returns the sum of those arguments
// Example:
// console.log(addNumbers(36, 6)) // outputs 42

function addNumbers (number1, number2) {
    return number1 + number2;
}
console.log(addNumbers(29, 65))


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

function whoAmI (name, birthYear, hobby1, hobby2) {
    const age = 2023 - birthYear;
    return `Hi, my name is ${name}. I am ${age} years old. My hobbies are ${hobby1} and ${hobby2}.`
}
console.log(whoAmI('Lauren', '1996', 'playing music', 'being a silly goose'));
console.log(whoAmI('Max', '1991', 'writing music', 'being the best man' ));
console.log(whoAmI('Brian', '2022', 'being feral', 'riding my big sister like she is a bus'));
console.log(whoAmI('Jeff', '2014', 'being a nice woom', 'screaming at my rotten little brother whomst I did not ask for'))
console.log(whoAmI('Mimi', ''))