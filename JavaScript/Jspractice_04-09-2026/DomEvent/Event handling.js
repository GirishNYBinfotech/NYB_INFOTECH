let parent=document.getElementById("parent")
let child=document.getElementById("btn")
let parent1=document.getElementById("parent2")
let child1=document.getElementById("child")
var order=document.getElementById("order")

//Event bubbling
parent.addEventListener("click",function(){
    console.log("parent")
})
child.addEventListener("click",()=>{
    console.log("child")
})

//Event capturing
parent1.addEventListener("click",function(){
    console.log("parent")
},true)
child1.addEventListener("click",()=>{
    console.log("child")
},true)

//Event Delegation
order.addEventListener("click",function(event){
    console.log(event.target.textContent)
})