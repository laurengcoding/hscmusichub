// js for clicking burger button. 
// user clicks button 
// activate .nav-links display

// burger button

const burgerBtn = document.querySelector('.burger-button');
const navLinks = document.querySelector('.nav-links');

function displayLinks() {
    navLinks.classList.toggle('active');
    console.log('button click click');
}

burgerBtn.addEventListener('click', displayLinks);

// create a chat pop up box

//carousel of reviews

// "subscribe to our newsletter" pop up when users visit page

// function modalMain() {
//     const modalContainer = document.querySelector('.modal-container');
//     const modalExitBtn = document.querySelector('.modal-close-btn');
//     const modalForm = document.querySelector('.modal-signup')

//     function displayModal() {
//         modalContainer.style.display = 'block';
//     }

//     function closeModal() {
//         modalContainer.style.display = 'none';
//     }

//         setTimeout(displayModal, 5000);

//     modalExitBtn.addEventListener('click', closeModal);
    
// }

// document.addEventListener('DOMContentLoaded', modalMain);



// user visits webpage
// 3 seconds pass
// modal container displays
// user has option to either submit form OR close modal
// event listener on click for closeModal
// if user closes form, store info in local storage
// if modalClosed = true, do not display modal again


function modalMain() {
    const modalContainer = document.querySelector('.modal-container');
    const modalExitBtn = document.querySelector('.modal-close-btn');
    const modalForm = document.querySelector('.modal-signup');

    function displayModal() {
        modalContainer.style.display = 'block';
    }

    function closeModal() {
        modalContainer.style.display = 'none';
    }

    const formSubmitted = localStorage.getItem('formSubmitted');
    if (!formSubmitted) {
        setTimeout(displayModal, 3000); // Display modal after 5 seconds
    }

    modalExitBtn.addEventListener('click', () => {
        closeModal();
        localStorage.setItem('formSubmitted', 'true');
    });

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        closeModal();
        localStorage.setItem('formSubmitted', 'true');
    });
}

document.addEventListener('DOMContentLoaded', modalMain);