const API_URL = "https://jsonplaceholder.typicode.com/users"
const output = document.getElementById("output")
const loading = document.getElementById("loading")

function showLoading(){
    loading.textContent="Loading..."
}

function hideLoading(){
    loading.textContent=""
}

function displayResponse(data) {
    output.textContent=JSON.stringify(data,null,2)
}

// GET REQUEST
async function getUsers() {
    showLoading()
    try {
        const response = await fetch(API_URL)
        console.log("GET Response:", response)
        console.log("Status:", response.status)
        if (!response.ok) {
            throw new Error("GET request failed")
        }
        const data = await response.json()
        console.log("GET JSON Data:", data)
        displayResponse(data)
    } 
    catch (error) {
        console.error("GET Error:", error)
        displayResponse({
            error: error.message
        })
    } 
    finally {
        hideLoading()
    }
}

//  POST REQUEST
async function createUser() {
    showLoading()
    try {
        const userData = {
            name: "Girish",
            username: "girish123",
            email: "girish@gmail.com"
        }
        const response = await fetch(API_URL, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        console.log("POST Response:", response)
        console.log("Status:", response.status)
        if (!response.ok) {
            throw new Error("POST request failed")
        }
        const data = await response.json()
        console.log("POST JSON Data:", data)
        displayResponse(data)
    } 
    catch (error) {
        console.error("POST Error:", error)
        displayResponse({
            error: error.message
        })
    } 
    finally {
        hideLoading()
    }
}

// PUT REQUEST
async function updateUser() {
    showLoading()
    try {
        const userData = {
            id: 1,
            name: "Girish Updated",
            username: "girish_updated",
            email: "updated@gmail.com"
        }
        const response = await fetch(`${API_URL}/1`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        console.log("PUT Response:", response)
        console.log("Status:", response.status)
        if (!response.ok) {
            throw new Error("PUT request failed")
        }
        const data = await response.json()
        console.log("PUT JSON Data:", data)
        displayResponse(data)
    } 
    catch (error) {
        console.error("PUT Error:", error)
        displayResponse({
            error: error.message
        })
    }
    finally {
        hideLoading()
    }
}

//  PATCH REQUEST
async function patchUser() {
    showLoading()
    try {
        const userData = {email: "newemail@gmail.com"}
        const response = await fetch(`${API_URL}/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        console.log("PATCH Response:", response)
        console.log("Status:", response.status)
        if (!response.ok) {
            throw new Error("PATCH request failed")
        }
        const data = await response.json()
        console.log("PATCH JSON Data:", data)
        displayResponse(data)
    } 
    catch (error) {
        console.error("PATCH Error:", error)
        displayResponse({
            error: error.message
        })
    } 
    finally {
        hideLoading()
    }
}


// DELETE REQUEST
async function deleteUser() {
    showLoading()
    try {
        const response = await fetch(`${API_URL}/1`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log("DELETE Response:", response)
        console.log("Status:", response.status)
        if (!response.ok) {
            throw new Error("DELETE request failed")
        }
        displayResponse({
            message: "User deleted successfully"
        })
    } 
    catch (error) {
        console.error("DELETE Error:", error)
        displayResponse({
            error: error.message
        })

    } 
    finally {
        hideLoading()
    }
}
document.getElementById("getBtn").addEventListener("click", getUsers)
document.getElementById("postBtn").addEventListener("click", createUser)
document.getElementById("putBtn").addEventListener("click", updateUser)
document.getElementById("patchBtn").addEventListener("click", patchUser)
document.getElementById("deleteBtn").addEventListener("click", deleteUser)