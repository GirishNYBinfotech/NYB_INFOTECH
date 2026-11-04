//Debouncing
let i=document.getElementById("i")
let timer
i.addEventListener("input",()=>{
    clearTimeout(timer)
    timer=setTimeout(() => {
        console.log(" serching for Debouncing")
    },2000);
})

//throttling
let inn=document.getElementById('in')
let LastClick=0
inn.addEventListener("input",()=>{
    let currentclick=Date.now()
    if(currentclick-LastClick>=1000){
        console.log("Serching....")
        LastClick=currentclick
    }
})