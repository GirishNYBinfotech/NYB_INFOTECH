const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const loading = document.getElementById("loading");
let timer

// Debounce function
function debounce(callback, delay) {
    clearTimeout(timer);
    timer = setTimeout(() => {
        callback();
    }, delay);
}

// Fetch API data
async function searchUsers(searchText) {
    loading.innerText = "Loading...";
    results.innerHTML = "";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("Something went wrong!")
        }
        const users = await response.json()
        // Filter users
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchText.toLowerCase())
        )
        loading.innerText = ""
        if (filteredUsers.length === 0) {
            results.innerHTML = "<p>No users found!</p>"
            return;
        }
        // Display results
        filteredUsers.forEach(user => {
            results.innerHTML += `
                <div>
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                </div>
                <hr>`
        })

    } catch (error) {
        loading.innerText = "";
        results.innerHTML = `<p>Error: ${error.message}</p>`
    }
}

// Search event
searchInput.addEventListener("input", function () {
    const searchText = this.value.trim()
    clearTimeout(timer);
    if (searchText === "") {
        results.innerHTML = "";
        loading.innerText = "";
        return;
    }
    debounce(() => {
        searchUsers(searchText);
    }, 500)
})
