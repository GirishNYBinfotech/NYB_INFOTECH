let par1=document.getElementById("parent1")
let chi1=document.getElementById("child1")

par1.addEventListener("click",()=>{
    console.log("capturing parent")
},true)
chi1.addEventListener("click",()=>{
    console.log("capturing child")
},true)