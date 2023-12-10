// For each number below, you should:
//   - study the HTML in the Dev Tools or your editor and choose an appropriate CSS selector for the element(s) you need
//   - use either querySelector or querySelectorAll to select the correct element(s)
//   - save the selected element(s) in a variable
//   - console.log the variable
// e.g.
// const divs = document.querySelectorAll('div');
// console.log(divs);

// ======================================================================================
// 1. Select the element that contains an avocado emoji (or avocado text if you
// don't see the emojis). Your console should show *ONE* element.
const avocado = document.querySelector('#avocado');
console.log(avocado);


// ======================================================================================
// 2. Select the elements that contain a banana emoji (or banana text if you
// don't see the emojis). Your console should show a NodeList of 3 elements.
const bananas = document.querySelectorAll('.banana');
console.log(bananas);


// ======================================================================================
// 3. Select the elements that contain a strawberry emoji (or strawberry text if
// you don't see the emojis). Your console should show a NodeList of 4 elements.
const strawberries = document.querySelectorAll('h4');
console.log(strawberries);


// ======================================================================================
// 4. Select the elements that contain a watermelon emoji (or watermelon text if
// you don't see the emojis). Your console should show a NodeList of 4 elements.
const watermelons = document.querySelectorAll('.watermelons p');
console.log(watermelons);


// ======================================================================================
// 5. Select the first element (first in source order) that contains a kiwi
// emoji (or kiwi text if you don't see the emojis). Your console should show
// only *ONE* element not a NodeList.
const kiwi = document.querySelector('.kiwi');
console.log(kiwi);
