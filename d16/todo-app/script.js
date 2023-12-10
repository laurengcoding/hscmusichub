const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const completedList = document.querySelector('#completed-list');

let todos = [];

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement('li');
    li.classList.add('todo-item');
    li.textContent = todo.text;
    todoList.append(todoItem);
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text !== '') {
    const newTodo = {
      text: text,
      completed: false
    };
    todos.push(newTodo);
    renderTodos();
    form.reset();
    todoInput.focus();
  }
});