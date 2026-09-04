const taskInput=document.getElementById("taskInput")
const addBtn=document.getElementById("addBtn")
const clearBtn=document.getElementById("clearBtn")
const searchInput=document.getElementById("searchInput")
const taskList=document.getElementById("taskList")
const loadBtn=document.getElementById("loadBtn")
const userList=document.getElementById("userList")


let tasks=JSON.parse(localStorage.getItem("tasks"))||[]

function displayTasks(list=tasks){
    taskList.innerHTML=""
    list.map(function(task){
        const li=document.createElement("li")
        li.innerHTML=`${task}<button class="delete">Delete</button>`
        taskList.appendChild(li)
    })
}

addBtn.addEventListener("click",function(){
    const task=taskInput.value
    if(task===""){
        return
    }
    tasks=[...tasks,task]
    localStorage.setItem("tasks",JSON.stringify(tasks))
    taskInput.value=""
    displayTasks()
})

clearBtn.addEventListener("click",function(){
    tasks=[]
    localStorage.setItem("tasks",JSON.stringify(tasks))
    displayTasks()
})

searchInput.addEventListener("input",function(){
    const searchText=searchInput.value.toLowerCase()
    const result=tasks.filter(function(task){
        return task.toLowerCase().includes(searchText)
    })
    displayTasks(result)
})

taskList.addEventListener("click",function(event){
    if(event.target.classList.contains("delete")){
        const task=event.target.parentElement.firstChild.textContent.trim()
        tasks=tasks.filter(function(item){
            return item!==task
        })
        localStorage.setItem("tasks",JSON.stringify(tasks))
        displayTasks()
    }
})

async function getUsers(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const users=await response.json()
        userList.innerHTML=""
        users.map(function(user){
            const li=document.createElement("li")
            li.textContent=user.name
            userList.appendChild(li)
        })
    }
    catch(error){
        console.log("APIError",error)
    }
}
loadBtn.addEventListener("click",getUsers)
displayTasks()