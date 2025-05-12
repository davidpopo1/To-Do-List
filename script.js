const todoInput = document.querySelector('.todo-input'); //user input field
const todoSubmit = document.querySelector('.todo-submit'); //submit button
const todoDelete = document.querySelector('.todo-delete'); //delete button
const todoList = document.querySelector('.todo-list'); //Where submissions will be stored

const todo = (event) => {
    event.preventDefault();
    if (todoInput.value === ''){
        alert('Please enter a task');
    } else {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('todo-delete');
        deleteButton.addEventListener('click', () => {
            todoDiv.remove();
        });
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);
        todoInput.value = '';
    }
}

todoSubmit.addEventListener('click', todo);