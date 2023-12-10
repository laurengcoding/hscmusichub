// =============================================================================
// 1.
// - Create an array containing three of your favorite colours.
// - Log the first element of your array to the console.
// - Store the second element of your array in a variable and log the variable to the console.

const faveColours = ['Green', 'Pink', 'Blue'];
console.log(faveColours[0]);
const secondFave = faveColours[1];
console.log(secondFave);

// =============================================================================
// 2.
// Answer the following without manually editing the array definitions below.
// - Change Tonto's favourite flavour to "Cardboard"
// - Sailor just had his birthday, change his age (3) to reflect him being a year older
// - Add Adelaide as Tonto's hometown
//
// name, breed, age, favourite flavour, hometown
let tonto = ['Tonto', 'German Shepherd', 5, 'Bacon'];
tonto[3] = 'Cardboard';
tonto.push('Adelaide');
console.log(tonto);

let sailor = ['Sailor', 'Labrador', 3, 'everything', 'Adelaide'];
sailor[2] = '4';
console.log(sailor);

// DO NOT TOUCH THE ARRAYS ABOVE


// =============================================================================
// 3.
// Access and log "Kitkat bar 3" to the console.
const confectioneries = [
  ['Pecan Snickers', 'Dude, Sweet Chocolate Salami'],
  [
    'Lindt truffles',
    'Easter egg',
    ['Kitkat bar 1', 'Kitkat bar 2', 'Kitkat bar 3', 'Kitkat bar 4']
  ]
];

console.log(confectioneries[1][2][2]);


// =============================================================================
// 4.
// Write a loop that logs the numbers from 0 to 12.
// Example output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12

// for (let i = 0; i < 5; i++ ) {
//     console.log(i);

// for (let i = 0; i <= 12; i++) {
//   console.log(i);
// }



// =============================================================================
// 5.
// Write a loop that logs all the even numbers between 2 and 14.
// Example output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14

// for (let i = 2; i <= 14; i+=2) {
//   console.log(i)
// }


// =============================================================================
// 6.
// - Loop over the bestPups array and log the index number and name of each pup
//   to the console.
// Example output:
// 0 - Tonto
// 1 - Sailor
// 2 - Scout
// 3 - Odin
// 4 - Poppy
const bestPups = ['Tonto', 'Sailor', 'Scout', 'Odin', 'Poppy'];
for (let i = 0; i < bestPups.length; i++) {
  console.log(`${i} - ${bestPups[i]}`);
}


// =============================================================================
// 7.
// - Create an array that contains three or more animals (as strings, e.g.
//   'dog', 'cat').
// - Loop over your animals array and log the animal name and the sound it
//   makes (e.g. 'woof', 'meow').
// Example output:
// dog says woof
// cat says meow
// cow says moo
// pig says oink
// crow says KAKAW

const animals = ['dog', 'cat', 'bird'];
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[0]} says woof`);
  console.log(`${animals[1]} says meow`);
  console.log(`${animals[2]} says tweet`);
}


// =============================================================================
// BONUS ROUND
// =============================================================================
//
//
// =============================================================================
// 8.
// Write a loop that logs the following lines to the console:
// 9 times 0 is 0
// 9 times 1 is 9
// 9 times 2 is 18
// 9 times 3 is 27
// 9 times 4 is 36
// 9 times 5 is 45
// 9 times 6 is 54
// 9 times 7 is 63
// 9 times 8 is 72
// 9 times 9 is 81
// 9 times 10 is 90

const multiplier = 9;
for (i = 0; i <= 10; i++) {
  const result = multiplier * i;
  console.log(multiplier + ' * ' i + ' = ' result);
}


// =============================================================================
// 9.
// Write a loop that logs the following lines to the console:
// 16 bananas
// 14 bananas
// 12 bananas
// 10 bananas
// 8 bananas
// 6 bananas


// =============================================================================
// 10.
// Write a program that will loop over the numbers array below and sum all the
// values in a sum variable. Print the resulting sum (129) when the loop is
// finished.
// Hint: You'll need to declare the sum variable outside of the loop (what
// should be its starting value?) and use a compound assignment operator inside
// the loop.
const numbers = [23, 19, 23, 52, 12];
