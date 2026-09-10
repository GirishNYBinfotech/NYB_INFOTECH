let input=document.getElementById("taskInput")
let addBtn=document.getElementById("addBtn")
let list=document.getElementById("taskList")
let count=document.getElementById("count")

let tasks=JSON.parse(localStorage.getItem("tasks"))||[]

function displayTasks(){
list.innerHTML=""
tasks.forEach((task,index)=>{
let li=document.createElement("li")
li.innerHTML=task+" <button data-index='"+index+"'>Delete</button>"
list.appendChild(li)
})
count.textContent="TotalTasks:"+tasks.length
}

addBtn.addEventListener("click",()=>{
let task=input.value.trim()

if(task===""){
alert("Enter a task")
return
}

tasks.push(task)
localStorage.setItem("tasks",JSON.stringify(tasks))
input.value=""
displayTasks()
})

list.addEventListener("click",(event)=>{
if(event.target.tagName==="BUTTON"){
let index=event.target.dataset.index

tasks.splice(index,1)
localStorage.setItem("tasks",JSON.stringify(tasks))
displayTasks()
}
})

input.addEventListener("keydown",(event)=>{
if(event.key==="Enter"){
addBtn.click()
}
})
