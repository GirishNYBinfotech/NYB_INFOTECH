//local storage
localStorage.clear()
localStorage.setItem("id",100)
localStorage.setItem("name","Girish")
localStorage.setItem("role","Developer")
localStorage.setItem("company","NYB infotech")
let Name=localStorage.getItem("name")
console.log(Name)
let role=localStorage.getItem("role")
console.log(role)
let company=localStorage.getItem("company")
console.log(company)
localStorage.removeItem("id")

//Session storage
sessionStorage.setItem("id",102)
sessionStorage.setItem("name1","King")
sessionStorage.setItem("role1","Tester")
sessionStorage.setItem("company1","NYB infotech")
sessionStorage.setItem("loc","HYD")
let Name1=sessionStorage.getItem("name1")
console.log(Name1)
let role1=sessionStorage.getItem("role1")
console.log(role1)
let company1=sessionStorage.getItem("company1")
console.log(company1)
sessionStorage.removeItem("loc")

//retrive and update the data
const username = document.getElementById("username");
const result = document.getElementById("result");
// Save data
document.getElementById("saveBtn").addEventListener("click", function () {
    if (username.value.trim() === "") {
        result.textContent = "Please enter a username.";
        return;
    }
    localStorage.setItem("username", username.value.trim());
    result.textContent = "Data saved successfully";
});

// Retrieve data
document.getElementById("retrieveBtn").addEventListener("click", function () {
    const storedData = localStorage.getItem("username");
    if (storedData === null) {
        result.textContent = "No data found.";
    } 
    else {
        username.value = storedData;
        result.textContent = "Retrieved data: " + storedData;
    }
});

// Update data
document.getElementById("updateBtn").addEventListener("click", function () {
    const storedData = localStorage.getItem("username");
    const newData = username.value.trim();
    if (storedData === null) {
        result.textContent = "Save data before updating.";
    } 
    else if (newData === "") {
        result.textContent = "Please enter new data.";
    } 
    else {
        localStorage.setItem("username", newData);
        result.textContent = "Data updated successfully!";
    }
});
