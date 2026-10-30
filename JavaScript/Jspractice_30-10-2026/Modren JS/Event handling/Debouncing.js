//Debouncing
let d=document.getElementById("btn")
let timer
d.addEventListener("click",()=>{
    clearTimeout(timer)
    timer=setTimeout(()=>{
        console.log("Debouncing Clicked")
    },1000)
})