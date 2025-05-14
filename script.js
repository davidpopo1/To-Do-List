const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const errorMessage = document.querySelector(".error-message");
const taskList = document.querySelector("#tasks");
const deleteButton = document.querySelector(".delete-button");
const editButton = document.querySelector(".todo-edit");
const updateButton = document.querySelector(".todo-update");

taskForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    if (taskInput.value === "") {
        errorMessage.innerText = "Please enter a task";
        errorMessage.classList.add("error");
        setTimeout(() => errorMessage.remove(), 3000);
    } else {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTask = document.createElement("li");
        newTask.appendChild(document.createTextNode(taskInput.value));
        todoDiv.appendChild(newTask);

        taskList.appendChild(todoDiv);
        taskInput.value = "";

        //Edit Button Start
        const editButton = document.createElement('button');
        editButton.innerText = 'Modify';
        editButton.classList.add('edit-button');
        
        editButton.addEventListener('click', () => {
            const currentText = newTask.innerText;
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = currentText;
            inputField.classList.add('edit-input');
            editButton.remove(); //hides edit button
            deleteButton.remove(); //hides delete button

            //Update Button Start
            const updateButton = document.createElement('button');
            updateButton.innerText = 'Update';
            updateButton.classList.add('update-button');
            updateButton.addEventListener('click', () => {
                const updatedText = inputField.value.trim();
                newTask.innerText = updatedText || currentText;
                inputField.replaceWith(newTask);
                updateButton.remove();
                todoDiv.appendChild(editButton); // Re-add the edit button
                todoDiv.appendChild(deleteButton); // Re-add the delete button
            });
            //Update Button End

            todoDiv.appendChild(updateButton);
            newTask.replaceWith(inputField);
            inputField.focus();
        });
        todoDiv.appendChild(editButton); // Append the edit button to the todoDiv
        //Edit Button End
        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            newTask.remove();
            editButton.remove();
            deleteButton.remove();
        });

        // Append delete button to the list item
        todoDiv.appendChild(deleteButton);
        newTask.replaceChild(inputField, newTask.firstChild);
    }
}

/*
const todoInput = document.querySelector('.todo-input'); //user input field
const todoSubmit = document.querySelector('.todo-submit'); //submit button
const todoDelete = document.querySelector('.todo-delete'); //delete button
const todoList = document.querySelector('.todo-list'); //Where submissions will be stored
const todoEdit = document.querySelector('.todo-edit'); //edit button
const todoUpdate = document.querySelector('.todo-update'); //update button


const todo = (event) => {
    event.preventDefault();
    
    if (todoInput.value === ''){ //Error message if input is empty
        const errorMessage = document.createElement('h4');
        errorMessage.innerText = 'Please enter a task';
        errorMessage.classList.add('error-message');
        document.body.prepend(errorMessage);
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    } else { //If input is not empty, create a new todo item w/delete and edit buttons
        //Create a new div to hold the todo item that the delete and edit buttons append to
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        todoList.appendChild(todoDiv);
        todoInput.value = '';

        //Edit Button Start
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.classList.add('todo-edit');
        
        editButton.addEventListener('click', () => {
            const currentText = newTodo.innerText;
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = currentText;
            inputField.classList.add('edit-input');
            editButton.style.display = 'none'; //hides edit button
            deleteButton.style.display = 'none'; //hides delete button

            const updateButton = document.createElement('button');
            updateButton.innerText = 'Update';
            updateButton.classList.add('todo-update');
            updateButton.addEventListener('click', () => {
                const updatedText = inputField.value.trim();
                newTodo.innerText = updatedText || currentText;
                inputField.replaceWith(newTodo);
                updateButton.remove();
                editButton.style.display = 'block';
                deleteButton.style.display = 'block';
            });

            todoDiv.appendChild(updateButton);
            newTodo.replaceWith(inputField);
            inputField.focus();
        });
        todoDiv.appendChild(editButton); // Append the edit button to the todoDiv
        //Edit Button End

        //Delete Button Start
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('todo-delete');
        deleteButton.addEventListener('click', () => {
            todoDiv.remove();
        });
        todoDiv.appendChild(deleteButton); // Append the delete button to the todoDiv
        //Delete Button End
    }
}
todoSubmit.addEventListener('click', todo);*/