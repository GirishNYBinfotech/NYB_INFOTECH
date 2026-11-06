let par = document.getElementById("parent")
let chi = document.getElementById("child")

chi.addEventListener("click", () => {
    console.log("Bubbling child")
})
par.addEventListener("click", () => {
    console.log("Bubbling parent")
})