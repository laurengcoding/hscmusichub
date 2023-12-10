const todoList = document.querySelector("#todo-list");
const completedTodoList = document.querySelector("#completed-list");
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

let todos = JSON.parse(localStorage.getItem('todos'));
if (!todos) {
  todos = [];
}

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const createTodo = (todo) => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.textContent = todo.text;
  return li;
};

const renderTodos = () => {
  todoList.innerHTML = '';
  completedTodoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = createTodo(todo);
    if (todo.completed) {
      completedTodoList.append(todoItem);
    } else {
      todoList.append(todoItem);
      todoItem.addEventListener('click', () => {
        todo.completed = true;
        saveTodos();
        renderTodos();
      }, { once: true });
    }
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();

  if (!text) {
    return
  }

  const newTodo = {
    text: text,
    completed: false
  };
  todos.push(newTodo);
  saveTodos();
  renderTodos();
  form.reset();
  todoInput.focus();
};

renderTodos();
form.addEventListener('submit', onSubmit);