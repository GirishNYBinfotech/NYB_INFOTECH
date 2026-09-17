let todos = JSON.parse(localStorage.getItem("todos")) || [];

let todoInput = document.getElementById("todoInput")
let addBtn = document.getElementById("addBtn")
let todoList = document.getElementById("todoList")


// Add Todo
addBtn.addEventListener("click", function () {
    let text = todoInput.value.trim()
    if (text === "") {
        return
    }
    let todo = {
        id: Date.now(),
        text: text,
        completed: false
    }
    todos.push(todo)
    saveTodos()
    renderTodos()
    todoInput.value = ""
})


// Render Todos
function renderTodos(filter = "all") {
    todoList.innerHTML = ""
    let filteredTodos = todos
    if (filter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed)
    }
    if (filter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed)
    }
    filteredTodos.forEach(function (todo) {
        let li = document.createElement("li")
        li.innerHTML = `
            <span class="${todo.completed ? "completed" : ""}">
                ${todo.text}
            </span>
            <div>
                <button onclick="completeTodo(${todo.id})">
                    ${todo.completed ? "Undo" : "Complete"}
                </button>
                <button onclick="editTodo(${todo.id})">
                    Edit
                </button>
                <button onclick="deleteTodo(${todo.id})">
                    Delete
                </button>
            </div> `
        todoList.appendChild(li)
    })
}


// Mark as Completed
function completeTodo(id) {
    todos = todos.map(function (todo) {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    })
    saveTodos()
    renderTodos()
}


// Edit Todo
function editTodo(id) {
    let todo = todos.find(todo => todo.id === id)
    let newText = prompt("Edit Todo", todo.text)
    if (newText !== null && newText.trim() !== "") {
        todo.text = newText.trim()
        saveTodos()
        renderTodos()
    }
}

function deleteTodo(id) {
    todos = todos.filter(function (todo) {
        return todo.id !== id
    })
    saveTodos()
    renderTodos()
}

function filterTodos(type) {
    renderTodos(type);
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}
renderTodos();
