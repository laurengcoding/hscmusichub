// // Listen for click events on each todo item (<li>)
// //   on click:
// //     Remove the <li> from the DOM

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');
// const completedList = document.querySelector('#completed-list');

// const addTodo = (todoText) => {
//   const li = document.createElement('li');
//   li.className = 'todo-item';
//   li.textContent = todoText;

//   li.addEventListener('click', () => {
//     // li.removeEventListener('click', fnName)
//     completedList.appendChild(li);
//     li.classList.add('completed');
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