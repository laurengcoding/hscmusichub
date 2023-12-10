// 1) Make the responsive menu work!
const burgerBtn = document.querySelector('.rover-menu-button');
const roverNav = document.querySelector('.rover-nav');
function toggleNav() {
  roverNav.classList.toggle('is-showing');
}
burgerBtn.addEventListener('click', toggleNav);

// 2) Make the modal sign up form work!
//    Show the modal sign up form when someone clicks the "Book your next Rover sitter" link/button.
//    Want to prevent the browser from jumping to the top of the page when you click on the "Book your..." link? Use `event.preventDefault()`. Read more here:
//    - https://javascript.info/introduction-browser-events#event-object
//    - https://javascript.info/default-browser-action
const roverBookBtn = document.querySelector('.rover-book');
const modal = document.querySelector('#modal');

const modalCloseBtn = modal.querySelector('.modal-close');
const modalBg = modal.querySelector('.modal-bg');

function showModal(event) {
  event.preventDefault();
  modal.classList.add('is-showing');
}

function hideModal() {
  modal.classList.remove('is-showing');
}

roverBookBtn.addEventListener('click', showModal);
modalCloseBtn.addEventListener('click', hideModal);
modalBg.addEventListener('click', hideModal);

// An alternative, better solution for hiding the modal that only requires one
// click event listener on the parent #modal element. This uses a few things you
// might not have seen yet:
// - Event delegation
//   https://javascript.info/event-delegation
// - Event object
//   https://javascript.info/introduction-browser-events#event-object
// - element.closest
//   https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// - If statements
//   https://javascript.info/ifelse
//
// function hideModal(event) {
//   if (!event.target.closest('.modal-content')) {
//     modal.classList.remove('is-showing');
//   }
// }
// modal.addEventListener('click', hideModal);
