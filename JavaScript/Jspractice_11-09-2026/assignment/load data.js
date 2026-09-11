// VARIABLES AND DATA TYPES

const userForm = document.getElementById("userForm")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")

const searchInput = document.getElementById("search")
const userList = document.getElementById("userList")
const message = document.getElementById("message")

const loadUsersButton = document.getElementById("loadUsers")
const clearUsersButton = document.getElementById("clearUsers")

// String
let appName = "User Management App"

// Number
let userCount = 0

// Boolean
let isLoading = false

// Array
let users = []

// LOCAL STORAGE

// Get previously saved users
const savedUsers = localStorage.getItem("users")
if (savedUsers) {
    users = JSON.parse(savedUsers);
} else {
    users = [];
}

// 3. FUNCTION

function saveUsers() {
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    )
}

// FUNCTION + CONDITIONAL STATEMENT
function showMessage(text, type) {
    message.textContent = text
    if (type === "success") {
        message.style.color = "green"
    } else if (type === "error") {
        message.style.color = "red"
    } else {
        message.style.color = "black"
    }
}

// ARRAY + LOOP + DOM MANIPULATION

function displayUsers(userArray = users){
    userList.innerHTML = ""
    userCount = userArray.length
    // Conditional statement
    if (userArray.length === 0) {
        userList.innerHTML = "<p>No users found.</p>"
        return
    }

    // Loop
    userArray.forEach(function(user) {
        // Object destructuring
        const { id, name, email } = user
        // DOM manipulation
        const userDiv = document.createElement("div")
        userDiv.className = "user"
        userDiv.innerHTML = `
            <div>
                <strong>${name}</strong>
                <br>
                <small>${email}</small>
            </div>
            <button class="delete" data-id="${id}">Delete</button>`
        userList.appendChild(userDiv)
    })
}

// EVENT HANDLING
userForm.addEventListener("submit", function(event) {
    // Prevent page refresh
    event.preventDefault()
    const name = nameInput.value.trim()
    const email = emailInput.value.trim()

    // Conditional statement
    if (name === "" || email === "") {
        showMessage("Please enter name and email","error")
        return
    }
    // Object
    const newUser = {
        id: Date.now(),
        name: name,
        email: email
    }
    // Array method: push()
    users.push(newUser)
    // Save to localStorage
    saveUsers()
    // Display users
    displayUsers()
    showMessage("User added successfully!","success")
    // Clear inputs
    userForm.reset()
})

// EVENT DELEGATION
userList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        const id = Number(event.target.dataset.id)
        // Array method: filter()
        users = users.filter(function(user) {
            return user.id !== id
        })
        saveUsers()
        displayUsers()
        showMessage("User deleted successfully!","success")
    }
})


// SEARCH + ARRAY METHODS

searchInput.addEventListener("input", function() {
    const searchText =searchInput.value.toLowerCase()
    // Array method: filter()
    const filteredUsers = users.filter(function(user) {
        return (
            user.name
                .toLowerCase()
                .includes(searchText)
        )
    })
    displayUsers(filteredUsers)
})


// ASYNCHRONOUS JAVASCRIPT
// API CALL
// ERROR HANDLING
async function loadUsersFromAPI() {
    try {
        isLoading = true
        showMessage("Loading users...","normal")

        // Fetch API
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // Conditional statement
        if (!response.ok) {
            throw new Error(
                "Failed to fetch users"
            )
        }
        // Convert response to JSON
        const data = await response.json()

        // Array method: map()
        const apiUsers = data.map(function(user) {
            return {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
        // Store API users
        users = apiUsers
        // Save API users
        saveUsers()
        // Display users
        displayUsers()
        showMessage("Users loaded successfully!","success")
    } 
    catch (error) {
        // Error handling
        console.error(error)
        showMessage(
            "Error: " + error.message,
            "error"
        )
    } 
    finally {
        isLoading = false
    }

}

// BUTTON EVENT
loadUsersButton.addEventListener(
    "click",
    loadUsersFromAPI
)

// CLEAR USERS
clearUsersButton.addEventListener(
    "click",
    function() {
        // Conditional statement
        if (users.length === 0) {
            showMessage("There are no users to clear.","error")
            return
        }

        // Confirm dialog
        const confirmDelete =confirm("Are you sure you want to clear all users?")
        if (confirmDelete) {
            users = []
            localStorage.removeItem("users")
            displayUsers()
            showMessage("All users cleared!","success")
        }
    }
)

// INITIAL DISPLAY
displayUsers()


