// CLOSURE
function generateId() {
    let id = 1
    return function () {
        return id++
    }
}
const getId = generateId()

// OOP 
class Employee {
    constructor(name) {
        this.id = getId()
        this.name = name
    }
}

// OOP 
class Task {
    constructor(name) {
        this.id = getId()
        this.name = name
        this.completed = false
    }
}


// DATA
let employees = []
let tasks = []


//LOCAL STORAGE
function saveData() {
    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    )
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    )
}

function loadData() {
    employees = JSON.parse(
        localStorage.getItem("employees") || "[]"
    )
    tasks = JSON.parse(
        localStorage.getItem("tasks") || "[]"
    )
}


// ADD EMPLOYEE
function addEmployee(){
    const name = document.getElementById("empName").value
    if (!name.trim()) {
        alert("Enter employee name")
        return
    }
    const employee = new Employee(name)
    employees.push(employee)
    saveData()
    displayEmployees()
}


// ADD TASK
function addTask() {
    const name = document.getElementById("taskName").value
    if (!name.trim()) {
        alert("Enter task name")
        return
    }
    const task = new Task(name)
    tasks.push(task)
    saveData()
    displayTasks()
}


// DISPLAY EMPLOYEES - MAP()
function displayEmployees(list = employees) {
    const ul = document.getElementById("employeeList")
    ul.innerHTML = ""
    list.map(employee => {
        const li = document.createElement("li")
        li.textContent = employee.name
        ul.appendChild(li)
    })
}


// DISPLAY TASKS
function displayTasks() {
    const ul = document.getElementById("taskList")
    ul.innerHTML = ""
    tasks.forEach(task => {
        const li = document.createElement("li")
        li.textContent = task.name
        ul.appendChild(li)
    })
}


// SEARCH EMPLOYEE - FILTER()
function searchEmployee() {
    const value = document.getElementById("search")
        .value.toLowerCase()
    const result = employees.filter(employee =>
        employee.name.toLowerCase().includes(value)
    )
    displayEmployees(result)
}


// FIND EMPLOYEE - FIND()
function findEmployee(id) {
    return employees.find(employee =>
        employee.id === id
    )
}


// SORT TASKS - SORT()
function sortTasks() {
    tasks.sort((a, b) =>
        a.name.localeCompare(b.name)
    )
    displayTasks()
}


// PROMISE
function getEmployees() {
    return new Promise((resolve, reject) => {
        if (employees.length > 0) {
            resolve(employees)
        } else {
            reject("No employees found")
        }
    })
}


// ASYNC/AWAIT 
async function loadAPI() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("API failed")
        }
        const data = await response.json()
        console.log("API Employees:", data)
    } catch (error) {
        console.log("Error:", error.message)
    }
}


// DEBOUNCING
function debounce(callback, delay) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}


// THROTTLING
function throttle(callback, delay) {
    let lastTime = 0
    return function (...args) {
        const now = Date.now()
        if (now - lastTime >= delay) {
            lastTime = now
            callback.apply(this, args)
        }
    }
}

//EVENT DELEGATION
document.getElementById("taskList")
    .addEventListener("click", function(event) {
        console.log("Clicked task:", event.target.textContent)
    })


// EVENT LISTENERS
document.getElementById("addEmployee")
    .addEventListener("click", addEmployee)
document.getElementById("addTask")
    .addEventListener("click", addTask)


// Debounced search
document.getElementById("search")
    .addEventListener(
        "input",
        debounce(searchEmployee, 500)
    )


// Throttled sorting
const handleSort = throttle(sortTasks, 1000)

// Create sort button dynamically
const sortButton = document.createElement("button")
sortButton.textContent = "Sort Tasks"
sortButton.addEventListener("click", handleSort)
document.body.appendChild(sortButton)


//  INITIALIZE APPLICATION
async function init() {
    try {
        loadData()
        displayEmployees()
        displayTasks()
        await loadAPI()
        getEmployees()
            .then(data => console.log(data))
            .catch(error => console.log(error))
    } catch (error) {
        console.log("Application error:", error)
    }
}
init()
