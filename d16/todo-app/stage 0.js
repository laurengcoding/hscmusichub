// // user types to do list item
// // user submits via "add" button OR by pressing enter
// // to do item displays as <li> in 'pending todos' div


// const addBtn = document.getElementById('submit');
// const userInput = document.getElementById('todo-input');
// const userText = userInput.value;

// // function addToDo -->
// // userText -> addBtn --> 
// // check for blank space, capital letters, prevent default --> 
// // append userText textContent in ul as li


// function addToDoItem() {
//     const pendingToDos = document.querySelector('#todo-list');
//     const newToDo = document.createElement('li');

//     pendingToDos.appendChild(newToDo);
// }

// // addBtn.addEventListener('submit', addToDoItem);

// // // userText.textContent

// // // userText.value

// const toDoList = document.querySelector('#todo-list');
// const toDoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input')

// toDoForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const text = todoInput.value.trim();
//     if (text === '') {
//         return;
//     }
//     const li = document.createElement('li');
//     li.className = 'todo-item';
//     li.textContent = text;
//     toDoList.append(li);

//     // todoInput.value = ''; this to clear the input after user submits OR:
//     toDoForm.reset();
// })