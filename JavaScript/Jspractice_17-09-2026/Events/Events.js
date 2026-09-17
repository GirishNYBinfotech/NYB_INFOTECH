//Events
// CLICK EVENT
const clickBtn=document.getElementById("clickBtn")
clickBtn.addEventListener("click", function () {
    document.getElementById("clickResult").textContent="Button was clicked!"
})

// INPUT EVENT
const nameInput=document.getElementById("nameInput")
nameInput.addEventListener("input", function (event) {
    document.getElementById("inputResult").textContent="You are typing: "+event.target.value
})

// CHANGE EVENT
const course=document.getElementById("course")
course.addEventListener("change", function (event) {
    document.getElementById("changeResult").textContent="Selected course: "+event.target.value
})

// SUBMIT EVENT
const myForm=document.getElementById("myForm")
myForm.addEventListener("submit", function (event){
    event.preventDefault()
    document.getElementById("submitResult").textContent="Form submitted successfully!"
})


// MOUSE EVENTS
const mouseBox=document.getElementById("mouseBox")

// Mouse enters the box
mouseBox.addEventListener("mouseenter", function () {
    document.getElementById("mouseResult").textContent="Mouse entered the box"
})

// Mouse leaves the box
mouseBox.addEventListener("mouseleave", function () {
    document.getElementById("mouseResult").textContent="Mouse left the box"
})
// Mouse clicks the box
mouseBox.addEventListener("click", function () {
    document.getElementById("mouseResult").textContent="Mouse clicked the box"
})


// KEYBOARD EVENTS
const keyInput=document.getElementById("keyInput")
// Key is pressed
keyInput.addEventListener("keydown", function (event) {
    document.getElementById("keyboardResult").textContent="Key pressed: " + event.key
})

//Event bubbling
let ep=document.getElementById("Eparent")
let ec=document.getElementById("Echild")

ep.addEventListener("click",()=>{
    console.log("parent")
})
ec.addEventListener("click",function(){
    console.log("child")
})

//Event capturing
let ep1=document.getElementById("Eparent1")
let ec1=document.getElementById("Echild1")

ep1.addEventListener("click",()=>{
    console.log("parent")
},true)
ec1.addEventListener("click",function(){
    console.log("child")
},true)

//Event delegation
let ep2=document.getElementById("Eparent2")

ep2.addEventListener("click",(event)=>{
    console.log(event.target.textContent)
})

//normal event
let n=document.getElementById("normal")
n.addEventListener("input",()=>{
    console.log("entered")
})

//Debouncing
let d=document.getElementById("debounce")

let timer
d.addEventListener("input",()=>{
    clearTimeout(timer)
    timer=setTimeout(()=>{
        console.log("text entered")
    },4000)
})

//Throttling
let t=document.getElementById("throt")
lastclick=0
t.addEventListener("click",function(){
    currentclick=Date.now()
    if(currentclick-lastclick>=2000){
        console.log("clicked")
        lastclick=currentclick
    }
})


