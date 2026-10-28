//CLICK EVENT
document.getElementById("clickBtn").addEventListener("click", function () {
    alert("Button clicked!");
});


// INPUT EVENT
document.getElementById("inputBox").addEventListener("input", function (event) {
    document.getElementById("inputOutput").textContent ="You typed: " + event.target.value;
});


// CHANGE EVENT
document.getElementById("city").addEventListener("change", function (event) {
    document.getElementById("cityOutput").textContent = "Selected city: " + event.target.value;
});


// SUBMIT EVENT
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    alert("Form submitted by: " + username);
});

// KEYBOARD EVENT
document.getElementById("keyBox").addEventListener("keydown", function (event) {
    document.getElementById("keyOutput").textContent = "Key pressed: " + event.key;
});


// MOUSE EVENTS
const mouseBox = document.getElementById("mouseBox");
mouseBox.addEventListener("mouseover", function () {
    mouseBox.style.backgroundColor="lightblue";
    mouseBox.textContent="Mouse is over the box!";
})
mouseBox.addEventListener("mouseout", function () {
    mouseBox.style.backgroundColor = "lightgray";
    mouseBox.textContent="Move your mouse here";
});