// Preview: https://gafewd.netlify.app/homework/06/

// Part 1
// Given the array of objects in `contacts.js`:
console.log(contacts);
// Write code that loops over this array of objects, creates the necessary DOM
// elements, and adds them to the `#rolodex` div. Each contact should have this
// DOM structure if you want the styles to apply:
//
// <div class="contact">
//   <h3>Sofia Files</h3>
//   <p>sfiles0@yahoo.co.jp</p>
//   <p>4301327952</p>
// </div>
//
// But feel free to disregard the existing styles and write your own!


function createContactContainer(contact) {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact';
    

    // const rolodex = document.querySelector('#rolodex');
    // rolodex.appendChild(contactDiv);

    const contactName = document.createElement('h3');
    contactName.textContent = `${contact.firstname} ${contact.lastname}`;
   // contactName.classList.add(contact)

    const contactEmail = document.createElement('p');
    contactEmail.textContent = contact.email;

    const contactPhone = document.createElement('p');
    contactPhone.textContent = contact.mobile;

    contactDiv.appendChild(contactName);
    contactDiv.appendChild(contactEmail);
    contactDiv.appendChild(contactPhone);

    return contactDiv;
};

function contactsToRolodex(contacts) {
    const rolodex = document.querySelector('#rolodex');

    for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    const addContact = createContactContainer(contact);
    rolodex.appendChild(addContact);
    }
};

contactsToRolodex(contacts);




const addNewContact = document.getElementById('add-contact');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('mobile');

function formSubmit(event) {
    event.preventDefault();

    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
    const email = emailInput.value;
    const mobile = phoneInput.value;

    const newContact = {
        firstname, lastname, email, mobile
    };

    const newContactContainer = createContactContainer(newContact);
    rolodex.appendChild(newContactContainer);
}

addNewContact.addEventListener('submit', formSubmit);