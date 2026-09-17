//DOM
let Id=document.getElementById("first")
console.log(Id.textContent)
let classname=document.getElementsByClassName("second")
console.log(classname[0].textContent)
let tagname=document.getElementsByTagName("h4")
console.log(tagname[0].textContent)
let query=document.querySelector(".query")
console.log(query.textContent)
let queryselector=document.querySelectorAll(".selector")
console.log(queryselector[0].textContent)

Id.textContent="id has changed"
console.log(Id.textContent)
classname[0].textContent="new class"
console.log(classname[0].textContent)

//adding element dynamically
let a=document.createElement("h3")
a.textContent="newly added element"
a.id="new"
console.log(a.textContent)
document.body.appendChild(a)
console.log(a.hasAttribute("id"))


//removing element 
let b=document.createElement("h2")
b.textContent="added and removed"
console.log(b.textContent)
document.body.appendChild(b)
b.remove()

//Dom traversing
let child=document.getElementById("child")
let parent=document.getElementById("trav")
console.log(parent.children)
console.log(child.parentElement)
console.log(child.previousElementSibling)
console.log(child.nextElementSibling)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

//dynamic list
const users = ["Girish","Rahul","Anil","King"]
const list = document.getElementById("userList")
users.forEach(function (user) {
    const li = document.createElement("li")
    li.textContent=user
    list.appendChild(li)
})