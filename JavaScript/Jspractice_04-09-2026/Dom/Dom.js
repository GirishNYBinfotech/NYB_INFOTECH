let id=document.getElementById("2")
console.log(id.textContent)
let className=document.getElementsByClassName("name")
console.log(className[0].textContent)
let tagname=document.getElementsByTagName("p")
console.log(tagname[0].textContent)
let querys=document.querySelector("h3")
console.log(querys.textContent)
let queryall=document.querySelectorAll(".qsa")
console.log(queryall[0].textContent)

id.addEventListener("mouseover",function(){
    console.log("mouse overed")
})

className[0].addEventListener("click",()=>{
    console.log("button clicked")
})

tagname[0].addEventListener("dblclick",()=>{
    console.log("doubleclicked")
})

querys.addEventListener("mouseout",()=>{
    console.log("mouseout")
})

//student list
const button = document.getElementById("addBtn")
let  button1=document.getElementById("addbtn1")
const list = document.getElementById("studentList")
button.addEventListener("click", function () {
    const newStudent = document.createElement("li")
    newStudent.innerText = "Girish"
    list.appendChild(newStudent)
    console.log("student added")
})
button1.addEventListener("click",()=>{
    const course=document.createElement("li")
    course.innerText="JAVASCRIPT"
    list.appendChild(course)
    console.log("course added")
})

document.addEventListener("contentloaded",()=>{
    console.log("clicked")
})