// Part 1:
// - Select all the rainbow band elements
// - Loop through the elements and:
//   - store the current element in the loop in a variable
//   - get each element's text content (the colour name) using the .textContent
//     property (YOURELEMENT.textContent) and store the colour in a variable
//   - change the element's CSS background colour to the appropriate colour

// const colours = document.querySelectorAll('.rainbow-band');
// for (let i = 0; i < colours.length; i++) {
//   const colourEl = colours[i];
//   const colour = colourEl.textContent;
//   colourEl.style.backgroundColor = colour;
// }


// =============================================================================
// Part 2:
// - Modify your Part 1 code or comment it out and start from scratch below
// - Select all the rainbow band elements
// - Loop through the elements and:
//   - store the current element in the loop in a variable
//   - get each element's text content (the colour name) using the .textContent
//     property (YOURELEMENT.textContent) and store the colour in a variable
//   - define a function that will change the background colour of the element
//   - add an event listener to the element so that when it is clicked, its
//     background colour changes

const colours = document.querySelectorAll('.rainbow-band');
for (let i = 0; i < colours.length; i++) {
  const colourEl = colours[i];
  const colour = colourEl.textContent;
  function applyColour() {
    colourEl.style.backgroundColor = colour;
  }
  colourEl.addEventListener('click', applyColour);
}
