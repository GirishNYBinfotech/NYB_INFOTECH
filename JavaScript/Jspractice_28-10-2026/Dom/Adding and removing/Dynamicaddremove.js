// Select elements
const heading = document.getElementById("heading");

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");

// Add CSS class
addBtn.addEventListener("click", function () {
    heading.classList.add("highlight");
    console.log("CSS class added");
});

// Remove CSS class
removeBtn.addEventListener("click", function () {
    heading.classList.remove("highlight");
    console.log("CSS class removed");
});

// Toggle CSS class
toggleBtn.addEventListener("click", function () {
    heading.classList.toggle("large");
    console.log("CSS class toggled");
});