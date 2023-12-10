// =============================================================================
// 1. 
// Greater Num
// Create two variables containing numbers, num1 and num2.
// Write a conditional statement:
// - if num1 is bigger than num2, output "num1 is greater than num2"
// - if num1 is smaller than num2, output "num1 is less than num2"
// - if the two numbers are equal, output "num1 is equal to num2"
// Test your code by changing the values of your variables
const num1 = 42
const num2 = 21
if (num1 > num2) {
  console.log('num1 is greater than num2')
} else if (num1 < num2) {
  console.log('num1 is less than num2')
} else {
  console.log('num1 is equal to num2')
}


// =============================================================================
// 2. 
// Bouncer Part 1
// You're a bouncer at a bar. Create an age variable and a conditional statement
// that satisfies the following requirements:
// - If a patron is 21 or older, output "Come on in!".
// - If a patron is 18-20, output "Come on in (but no drinking)!".
// - If a patron is younger than 18, output "You're too young to be in here!".
const age = 17
if (age >= 21) {
  console.log('Come on in!')
} else if (age >= 18 && age <= 20) {
  console.log('Come on in (but no drinking)!')
} else if (age < 18) {
  console.log("You're too young to be in here!")
}


// =============================================================================
// 3. 
// Number of Students
// Create a variable called studentCount and set it to any integer.
// With a conditional statement:
// - output "A small class" if there are fewer than 6 students
// - output "A slightly larger class" if there are between 5 and 10 (inclusive) students
// - output "A medium sized class" if between 11 and 15 (inclusive)
// - output "A large class" if the student count exceeds 15
const studentCount = 42
if (studentCount < 6) {
  console.log('a small class');
} else if (studentCount >= 5 && studentCount <= 10) {
  console.log('A slightly larger class');
} else if (studentCount >= 11 && studentCount <= 15) {
  console.log('A medium sized class');
} else if (studentCount > 15) {
  console.log('A large class');
}


// =============================================================================
// 4. 
// Bouncer Part 2
// Bar patrons must have an ID if the bouncer is even going to consider what age
// they are.
// - If the patron has an ID, the bouncer will then check if they are of the
//   proper age
// - If the patron does not have an ID, the bouncer will tell them "No ID, no
//   entry."
// Hint: Whether the patron has an ID or not can be stored in a `hasId`
// variable. What do you think the stored data type should be?
const hasId = true
if (!hasId) {
  console.log('No ID, no entry')
} else {
  if (age >= 21) {
    console.log('Come on in!')
  } else if (age >= 18 && age <= 20) {
    console.log('Come on in (but no drinking)!')
  } else if (age < 18) {
    console.log("You're too young to be in here!")
  }
}


// =============================================================================
// 5.
// Pizza/Pasta
// Use the prompt function (https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) to record what a user would like to eat in a variable.
// With a conditional statement:
// - Check if they like pizza, and if they do then output `"yay pizza!!"`
// - Otherwise check if they like pasta, and if they do then output `"ooh I love pasta!!"`
// - If they don't like either one, then output `"brussel sprouts for you!"`
//
// BONUS 1: Use .trim and .toLowerCase to "normalise" what the user entered.
// - trim removes extra spaces (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
// - toLowerCase converts all characters to lower case which will simplify your conditions (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
//
// BONUS 2: If you did BONUS 1, make your code more robust by checking for nulls.
// - When a user presses the cancel button in a prompt, the prompt function returns null. If you don't account for this scenario, then your program will throw an error when it tries to call .trim or .toLowerCase on null. Fix it by ensuring the value is a string or not null before performing any operation on it.
let foodChoice = prompt('Would you like some pizza or pasta?');
if (foodChoice !== null) {
  foodChoice = foodChoice.trim().toLowerCase();
  if (foodChoice === 'pizza') {
    console.log('yay pizza!!');
  } else if (foodChoice === 'pasta') {
    console.log('ooh I love pasta!!');
  } else {
    console.log('brussel sprouts for you!');
  }
}
