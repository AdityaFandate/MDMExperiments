let todos = JSON.parse(localStorage.getItem("todos")) || [];
const todoList = document.getElementById("todoList");

function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
${todo}
<button onclick="deleteTodo(${index})">X</button>
`;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById("todoInput");
    if (input.value.trim() === "") return;

    todos.push(input.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Load todos on page refresh
renderTodos();