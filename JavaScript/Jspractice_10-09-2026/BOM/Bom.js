//BOM
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(location.href)
console.log(navigator.userAgent)
console.log(navigator.language)
console.log(screen.width)
console.log(screen.height)

//outputmethods
console.log("printed")
// alert("alerted")
document.write("write printed")
document.getElementById("output").innerHTML="<h3>inner</h3>"
document.getElementById("output1").textContent="textContent printed"

//Webstorages
//local storages
localStorage.clear()
localStorage.setItem("girish",true)
localStorage.setItem("isloggedin","yes")
localStorage.setItem("theme","dark")
localStorage.setItem("logout",false)
console.log(localStorage.getItem("girish"))
console.log(localStorage.getItem("logout"))
localStorage.removeItem("girish")

//session storage
sessionStorage.clear()
sessionStorage.setItem("King","queen")
sessionStorage.setItem("form","submitted")
console.log(sessionStorage.getItem("King"))
console.log(sessionStorage.getItem("form"))
sessionStorage.removeItem("form")

