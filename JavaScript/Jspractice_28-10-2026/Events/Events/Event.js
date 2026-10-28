//event bubbling
let parent=document.getElementById("parent")
let child=document.getElementById("child")
parent.addEventListener("click",()=>{
    console.log("parent")
})
child.addEventListener("click",()=>{
    console.log("child")
})

//Eventcapturing
let parent1=document.getElementById("parent2")
let child1=document.getElementById("child2")
parent1.addEventListener("click",()=>{
    console.log("parent")
},true)
child1.addEventListener("click",()=>{
    console.log("child")
},true)

//Event deligation
let parent3 = document.getElementById("parent3");
parent3.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
})