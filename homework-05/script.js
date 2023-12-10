// Select the elements that we're going to need multiple times later:
// 1. The form
// 2. The text input 

// Add an event listener on the form. Look for an appropriate event to listen
// for in the table of events here:
// https://www.w3schools.com/jsref/dom_obj_event.asp

// In the event handler function, we'll need to figure out a few things:

// - Normal form submissions go to a backend service, but we want to handle
//   things in the front-end and prevent the form from actually submitting. How
//   can we do this?
//   https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

// - Get the text input field's value (what the user typed). Practice your
//   Google-fu.

// - When dealing with outside input, you always want to clean and normalise
//   data when you get it. Research and try using .trim and .toLowerCase - this
//   will make our conditional detection more consistent.
//   i.e. Whether the user types "SYD" or "syd", our program should be able to
//   treat them the same.

// - Now the conditional logic. We want to check through each possible input
//   a user gives us to make this work properly. Think about conditional
//   statements, going through the list of possible city options.
//   If a user gives us 'Sydney' versus 'Syd' - how can we make those point to
//   the same background? 

// - We want to change the background on the page by switching classes on the
//   body element (study the CSS file). But how do we replace one class with
//   another using JS?

// - We'll also want to clear the text input after we're done so the user has a
//   blank text input and can type another city name easily. Use your
//   Bing/ChatGPT-fu.

// const cityBackground = document.querySelector('body');
// const cityForm = document.querySelector('#citipix-form');
// const userText = document.querySelector('#city-type');
// const sydBackground = document.querySelector('.sydney');

// function changeCity() {
//     const cityBackground = cityBackground.getAttribute('background');
//    if (userText === 'Sydney' || 'SYD') {
//    //  cityText = cityText.trim().toLowerCase();
//     cityBackground.body = ('.sydney')
//    }
// //    cityBackground.classList.remove('background');
// //    sydBackground.classList.add('url');
// }


// cityForm.addEventListener('click', changeCity);






const body = document.querySelector('body');
const cityForm = document.querySelector('#citipix-form');


function changeCityBackground(cityName) {
    const validCities = ('nyc', 'sf', 'la', 'austin', 'sydney');
    if (validCities = true) {
        body.style.backgroundImage = '.sydney';
    }
}

cityForm.addEventListener('click', changeCityBackground);