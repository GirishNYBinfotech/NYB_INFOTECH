let clickBtn=document.getElementById("clickBtn")
clickBtn.addEventListener("click",function(){
console.log("Click event executed")
})

let doubleBtn=document.getElementById("doubleBtn")
doubleBtn.addEventListener("dblclick",function(){
console.log("Double click event executed")
})

let mouseup=document.getElementById("mouseup")
mouseup.addEventListener("mouseup",function(){
console.log("Mouse up event executed")
})

let moving=document.getElementById("moving")
moving.addEventListener("mousemove",function(){
console.log("Mouse is moving")
})

let mouseenter=document.getElementById("enter")
mouseenter.addEventListener("mouseenter",function(){
console.log("Mouse entered the box")
})

let mouseleave=document.getElementById("leave")
mouseleave.addEventListener("mouseleave",function(){
console.log("Mouse left the box")
})

let mouseover=document.getElementById("mouseover")
mouseover.addEventListener("mouseover",function(){
console.log("Mouse over the box")
})

let box=document.getElementById("box")
box.addEventListener("mouseout",function(){
console.log("Mouse out of the box")
})

let keyboardInput=document.getElementById("keyboardInput")
keyboardInput.addEventListener("keydown",function(event){
console.log("Key down: "+event.key)
})

keyboardInput.addEventListener("keyup",function(event){
console.log("Key up: "+event.key)
})

let nameInput=document.getElementById("name")
nameInput.addEventListener("input",function(event){
console.log("Input event: "+event.target.value)
})

let city=document.getElementById("city")
city.addEventListener("change",function(){
console.log("Selected city: "+city.value)
})

nameInput.addEventListener("focus",function(){
console.log("Input received focus")
})

nameInput.addEventListener("blur",function(){
console.log("Input lost focus")
})

let form=document.getElementById("myForm")
form.addEventListener("submit",function(event){
event.preventDefault()
console.log("Form submitted")
})

form.addEventListener("reset",function(){
console.log("Form reset")
})

document.addEventListener("ContentLoaded",function(){
console.log("HTML document loaded and DOM created")
})

//Event bubbling
let parent1=document.getElementById("parent1");
let child1=document.getElementById("child1");
parent1.addEventListener("click", function () {
    console.log("parent")
})
child1.addEventListener("click", () => {
     console.log("child")
})

//Event capturing
let parent2=document.getElementById("parent2")
var child2=document.getElementById("child2")

parent2.addEventListener("dblclick",()=>{
    console.log("parent")
},true)
child2.addEventListener("dblclick",()=>{
    console.log("child")
},true)

//Event delegation
let numbers=document.getElementById("num")
numbers.addEventListener("click",(event)=>{
    console.log(event.target.textContent)
})

//Normal event
var nor=document.getElementById("normal")
nor.addEventListener("input",()=>{
    console.log("finding...")
})

//throttling
let throt=document.getElementById("throt")
let lasttime=0
throt.addEventListener("click",()=>{
    var currentTime=Date.now()
    if(currentTime-lasttime>=3000){
        console.log("button cliked")
        lasttime=currentTime
    }
})

//debouncing
var debounce=document.getElementById("debounce")
let timer
debounce.addEventListener("input",()=>{
    clearTimeout(timer)
    timer=setTimeout(() => {
        console.log("searching...")
    },1000)
})
