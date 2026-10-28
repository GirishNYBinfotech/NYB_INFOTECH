// Select HTML elements
const input = document.getElementById("userInput")
const button = document.getElementById("addBtn")
const container = document.getElementById("container")

// Create a dynamic element on button click
button.addEventListener("click", function () {
    const name = input.value.trim();
    if (name === "") {
        alert("Please enter your name");
        return;
    }
    const paragraph = document.createElement("p")
    paragraph.textContent="Hello, "+name
    paragraph.style.color="blue"
    paragraph.style.fontSize="20px"
    container.appendChild(paragraph)
    input.value = ""
})