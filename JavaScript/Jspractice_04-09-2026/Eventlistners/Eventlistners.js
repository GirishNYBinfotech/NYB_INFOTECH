const clickBtn=document.getElementById("clickBtn")
clickBtn.addEventListener("click",function(){
    console.log("Button was clicked!")
})


const dblClickBtn=document.getElementById("dblClickBtn")
dblClickBtn.addEventListener("dblclick",function(){
    console.log("Button was double clicked!")
})


const mouseBox=document.getElementById("mouseBox")
mouseBox.addEventListener("mouseover",function(){
    mouseBox.innerText="Mouse is over the box"
})
mouseBox.addEventListener("mouseout",function(){
    mouseBox.innerText="Mouse left the box"
})
mouseBox.addEventListener("mousedown",function(){
    mouseBox.innerText="Mouse button is pressed"
})
mouseBox.addEventListener("mouseup",function(){
    mouseBox.innerText="Mouse button released"
})


const keyInput=document.getElementById("keyInput")
keyInput.addEventListener("keydown",function(event){
    console.log("Key Down:",event.key)
})
keyInput.addEventListener("keyup",function(event){
    console.log("Key Up:",event.key)
})


const nameInput=document.getElementById("nameInput")
const output=document.getElementById("output")
nameInput.addEventListener("input",function(){
    output.innerText="You entered:"+nameInput.value
})


const course=document.getElementById("course")
const courseOutput=document.getElementById("courseOutput")
course.addEventListener("change",function(){
    courseOutput.innerText="Selected course:"+course.value
})


const focusInput=document.getElementById("focusInput")
focusInput.addEventListener("focus",function(){
    console.log("Input is focused")
})
focusInput.addEventListener("blur",function(){
    console.log("Input lost focus")
})


const myForm=document.getElementById("myForm")
myForm.addEventListener("submit",function(event){
    event.preventDefault()
    const email=document.getElementById("email").value
    console.log("Email:",email)
    console.log("Form submitted successfully!")
})