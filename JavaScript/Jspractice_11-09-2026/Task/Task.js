const API_URL = "https://jsonplaceholder.typicode.com/users"
const result = document.getElementById("result")


// GET REQUEST
async function getUsers() {
    result.innerHTML = "Loading users..."
    try {
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error("Failed to fetch users")
        }
        const users = await response.json()
        console.log("GET Response:", users)
        result.innerHTML = ""
        users.slice(0, 5).forEach(user => {
            result.innerHTML += `
                <div>
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address.city}</p>
                    <hr>
                </div>`
        })
    } 
    catch (error) {
        console.error("GET Error:", error)
        result.innerHTML=`<p style="color:red">Error: ${error.message}</p>`
    }
}


// POST REQUEST
async function createUser() {
    result.innerHTML = "Creating user..."
    try {
        const newUser = {
            name: "Girish",
            username: "girish123",
            email: "girish@example.com"
        }
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })

        if (!response.ok) {
            throw new Error("Failed to create user")
        }
        const data = await response.json()
        console.log("POST Response:", data)
        result.innerHTML=`
            <h3>User Created Successfully</h3>
            <p>Name:${data.name}</p>
            <p>Username:${data.username}</p>
            <p>Email:${data.email}</p>`

    } 
    catch (error){
        console.error("POST Error:",error)
        result.innerHTML=`<p style="color:red">Error:${error.message}</p>`
    }
}

// PUT REQUEST
async function updateUser() {
    result.innerHTML = "Updating user..."
    try {
        const updatedUser = {
            id: 1,
            name: "Girish Updated",
            username: "girish_new",
            email: "newemail@example.com"
        }
        const response = await fetch(`${API_URL}/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
        if (!response.ok) {
            throw new Error("Failed to update user")
        }
        const data = await response.json()
        console.log("PUT Response:", data)
        result.innerHTML = `
            <h3>User Updated Successfully</h3>
            <p>Name: ${data.name}</p>
            <p>Username: ${data.username}</p>
            <p>Email: ${data.email}</p>`
    } 
    catch (error) {
        console.error("PUT Error:", error)
        result.innerHTML = `<p style="color:red">Error: ${error.message}</p>`
    }
}


// DELETE REQUEST
async function deleteUser() {
    result.innerHTML = "Deleting user..."
    try {
        const response = await fetch(`${API_URL}/1`, {
            method: "DELETE"
        })
        if (!response.ok) {
            throw new Error("Failed to delete user")
        }
        console.log("DELETE Response:", response)
        result.innerHTML=`<p style="color:green">User deleted successfully!</p>`
    } 
    catch (error) {
        console.error("DELETE Error:", error)
        result.innerHTML=`<p style="color:red">Error: ${error.message}</p>`
    }
}


function promiseExample() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Request failed")
            }
            return response.json()
        })
        .then(data => {
            console.log("Promise Response:", data);
        })
        .catch(error => {
            console.error("Promise Error:", error)
        })
}