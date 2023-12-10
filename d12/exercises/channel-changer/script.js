// Write a program so that each time the #channel-up button is clicked, the tv
// changes its channel to the next channel up until it reaches channel 4, where
// it should wrap back around to channel 1. Do the reverse for the #channel-down
// button. Channel 0 should only be shown at the start.

// To "change the channel", change the src attribute/property of the #tv-screen
// img element (more on this below).

// These are the channel numbers and their corresponding image names:
// | Ch. # | Image                 |
// |-------+-----------------------|
// |     0 | colour-bars.png       |
// |     1 | blue-planet.jpg       |
// |     2 | deadpool.jpg          |
// |     3 | gravity.jpg           |
// |     4 | good-will-hunting.jpg |

// In addition to some .addEventListener functions and your event handler
// functions, you'll need the .getAttribute method (more on this below) and
// conditional statements to check the channel the tv is currently on and which
// channel to change to.

// .getAttribute and .src
// If you have this img element in html:
//   <img id="my-image" src="img/image-0.png" />
// Then in your JS you can get and set the img's src attribute value like so:
//   const myImg = document.querySelector('#my-image')
//   console.log(myImg.getAttribute('src')) // => "img/image-0.png"
//   myImg.src = 'img/image-1.png'
//   console.log(myImg.getAttribute('src')) // => "img/image-1.png"

// Remember: Write small pieces at a time and test them early and often!

const tvScreen = document.querySelector('#tv-screen');
// console.log(tvScreen.getAttribute('src'));
// tvScreen.src = 'img/blue-planet.png';
// console.log(tvScreen.getAttribute('src'));
const channelUp = document.querySelector('#channel-up');
const channelDown = document.querySelector('#channel-down');


function clickChannelUp() {
    const currentScreen = (tvScreen.getAttribute('src'));
    if (currentScreen === 'img/colour-bars.png') {
        tvScreen.src = 'img/blue-planet.jpg'
    } else if (currentScreen === 'img/blue-planet.jpg') {
        tvScreen.src = 'img/deadpool.jpg'
    } else if (currentScreen === 'img/deadpool.jpg') {
        tvScreen.src = 'img/gravity.jpg'
    } else if (currentScreen === 'img/gravity.jpg') {
        tvScreen.src = 'img/good-will-hunting.jpg'
    } else if (currentScreen === 'img/good-will-hunting.jpg') {
        tvScreen.src = 'img/colour-bars.png'
    }
}

function clickChannelDown() {
    const currentScreen = (tvScreen.getAttribute('src'));
    if (currentScreen === 'img/colour-bars.png') {
        tvScreen.src = 'img/good-will-hunting.jpg'
    } else if (currentScreen === 'img/good-will-hunting.jpg') {
        tvScreen.src = 'img/gravity.jpg'
    } else if (currentScreen === 'img/gravity.jpg') {
        tvScreen.src = 'img/deadpool.jpg'
    } else if (currentScreen === 'img/deadpool.jpg') {
        tvScreen.src = 'img/blue-planet.jpg'
    } else if (currentScreen === 'img/blue-planet.jpg') {
        tvScreen.src = 'img/colour-bars.png'
    }
}


channelUp.addEventListener('click', clickChannelUp);
channelDown.addEventListener('click', clickChannelDown);