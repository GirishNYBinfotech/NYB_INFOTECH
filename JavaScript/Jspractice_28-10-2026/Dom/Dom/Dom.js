// Select DOM elements
const heading = document.getElementById("heading");
const paragraphs = document.querySelectorAll(".para");
const button = document.querySelector("#btn");

//Add click event
button.addEventListener("click", function () {
    heading.textContent = "DOM Manipulated Successfully!"
    heading.style.color = "blue";
    heading.style.backgroundColor = "lightyellow"
    paragraphs.forEach(function (para) {
        para.textContent = "Paragraph updated!";
        para.style.color = "green";
        para.style.fontSize = "20px";
    })
    button.textContent = "Clicked!";
});