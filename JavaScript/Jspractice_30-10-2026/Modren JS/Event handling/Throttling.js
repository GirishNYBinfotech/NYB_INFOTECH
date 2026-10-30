//Throttling
let t=document.getElementById("de")
let lastclick=0
t.addEventListener("input",function(){
    let currentclick=Date.now()
    if(currentclick-lastclick>=2000){
        console.log("throutling executed")
        lastclick=currentclick
    }
})