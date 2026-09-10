let Id=document.getElementById("firstid")
console.log(Id.textContent)
console.log(Id.id)
let classname=document.getElementsByClassName("firstclass")
console.log(classname[0].textContent)
let tagname=document.getElementsByTagName("p")
console.log(tagname[0].textContent)
let query=document.querySelector(".query")
console.log(query.textContent)
let queryall=document.querySelectorAll("h4")
console.log(queryall[0].textContent)

//readinging and modifying
let title=document.getElementById("title")
let input=document.getElementById("name")
console.log(title.textContent)
title.textContent = "Welcome to JavaScript"
console.log(title.textContent)
console.log(input.value)
input.value="KING"
console.log(input.value)
console.log(input.type)
input.type="password"
console.log(input.type)

//Dom traversing
var travc=document.getElementById("text")
var travp=document.getElementById("parent")

console.log(travp.children)
console.log(travc.parentElement)
console.log(travc.previousElementSibling)
console.log(travc.nextElementSibling)

//adding dynamically
let heading = document.createElement("h2")
heading.textContent = "Hello Girish"
heading.id="new"
document.body.appendChild(heading)
console.log(heading.hasAttribute("id"))
//removing element
var rem=document.getElementById("para")
console.log(rem.textContent)
rem.remove()


