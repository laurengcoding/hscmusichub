// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// todoForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const text = todoInput.value.trim();
//   if (text === '') {
//     return;
//   }

//   const li = document.createElement('li');
//   li.className = 'todo-item';
//   li.textContent = text;
//   todoList.append(li);

//   // todoInput.value = '';
//   todoForm.reset();
//   todoInput.focus();
// });

// const completedList = document.querySelector('#completed-list');

// function moveToCompleted() {
    
// }

// completedList.addEventListener('click', moveToCompleted);

// // user clicks li
// // li removed from pending todos
// // li added to completed todos

// // if todolist.append(li) is clicked
// // v

// // Listen for click events on each todo item (<li>)
// //   on click:
// //     Remove the <li> from the DOM

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// const addTodo = (todoText) => {
//   const li = document.createElement('li');
//   li.className = 'todo-item';
//   li.textContent = todoText;
//   li.addEventListener('click', () => {
//     // li.removeEventListener('click', fnName)
//     li.remove();
//   }, { once: true });
//   todoList.append(li);
// };

// todoForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const text = todoInput.value.trim();
//   if (text === '') {
//     return;
//   }

//   addTodo(text);

//   // todoInput.value = '';
//   todoForm.reset();
//   todoInput.focus();
// });

// // Listen for click events on each todo item (<li>)
// //   on click:
// //     Remove the <li> from the DOM

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// const addTodo = (todoText) => {
//   const li = document.createElement('li');
//   li.className = 'todo-item';
//   li.textContent = todoText;
//   li.addEventListener('click', () => {
//     // li.removeEventListener('click', fnName)
//     li.remove();
//   }, { once: true });
//   todoList.append(li);
// };

// todoForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const text = todoInput.value.trim();
//   if (text === '') {
//     return;
//   }

//   addTodo(text);

//   // todoInput.value = '';
//   todoForm.reset();
//   todoInput.focus();
// });