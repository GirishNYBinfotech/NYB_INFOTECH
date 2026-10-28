const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const filterInput = document.getElementById("filterInput");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

// Load tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add or Edit task
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = taskInput.value.trim();

  // Form validation
  if (title === "") {
    message.textContent = "Please enter a task!";
    return;
  }

  message.textContent = "";

  if (editId !== null) {
    const task = tasks.find(task => task.id === editId);
    task.title = title;
    editId = null;
    submitBtn.textContent = "Add Task";
  } 
  else {
    tasks.push({
      id: Date.now(),
      title: title,
      completed: false
    });
  }

  taskInput.value = "";
  saveTasks();
  renderTasks();
});

// Render tasks dynamically
function renderTasks() {
  taskList.innerHTML = "";

  const searchText = searchInput.value.toLowerCase();
  const filter = filterInput.value;

  const filteredTasks = tasks.filter(task => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchText);

    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement("li");

    // Task title
    const span = document.createElement("span");
    span.textContent = task.title;

    if (task.completed) {
      span.classList.add("completed");
    }

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Done";

    completeBtn.addEventListener("click", function () {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");

    editBtn.addEventListener("click", function () {
      taskInput.value = task.title;
      editId = task.id;
      submitBtn.textContent = "Update Task";
      taskInput.focus();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", function () {
      tasks = tasks.filter(item => item.id !== task.id);

      if (editId === task.id) {
        editId = null;
        taskInput.value = "";
        submitBtn.textContent = "Add Task";
      }

      saveTasks();
      renderTasks();
    });

    li.append(span, completeBtn, editBtn, deleteBtn);
    taskList.appendChild(li);
  });

  if (filteredTasks.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No tasks found.";
    taskList.appendChild(li);
  }
}

// Search tasks
searchInput.addEventListener("input", renderTasks);

// Filter tasks
filterInput.addEventListener("change", renderTasks);

// Initial rendering
renderTasks();
