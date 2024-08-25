import { Todo } from "./class.js";

//finding elements
const todoForm = document.querySelector(".todoForm");
const inputTodo = document.querySelector("#inputTodo");
const todoList = document.querySelector("#lists");
const messageElement = document.querySelector("#message");

//show message
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`todo${status}`);
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.classList.remove(`todo${status}`);
    }, 1000);
}

//creating todo
const createTodo = (newTodo) => {
    const todoElement = document.createElement("li");
    todoElement.id = newTodo.todoId;
    todoElement.classList.add("liStyle");
    todoElement.innerHTML =
        `<span>${newTodo.todoValue}</span>
    <span> <button class="btn deleteButton"><i class="fa fa-trash"></i></button> </span>`;
    todoList.appendChild(todoElement);

    //deleting todo
    const deleteButton = todoElement.querySelector(".deleteButton");
    deleteButton.addEventListener("click", deleteTodo);
}

//delete todo
const deleteTodo = (event) => {
    const selectedTodo = event.target.closest("li");
    if (selectedTodo) {
        todoList.removeChild(selectedTodo);
        showMessage("todo is deleted", "Delete");

        let todos = getTodosFromLocalStorage();
        todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
        localStorage.setItem("myTodos", JSON.stringify(todos));
    }
};

// get todos from local storage
const getTodosFromLocalStorage = () => {
    return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
};

//add todo
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = inputTodo.value;

    // if (todoValue.trim() === "") {
    //     showMessage("Todo cannot be empty", "Error");
    //     return;
    // } no need cause input is required in html

    // unique id generate
    const todoId = Date.now().toString();
    const newTodo = new Todo(todoId,todoValue);

    createTodo(newTodo);
    showMessage("todo is added", "Success");

    //add todo to localStorage
    const todos = getTodosFromLocalStorage();
    todos.push(newTodo);
    localStorage.setItem("myTodos", JSON.stringify(todos));
    inputTodo.value = "";
}

//load todos
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.forEach((todo) => createTodo(todo)); // Fixed this line
};

//adding listeners
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);
