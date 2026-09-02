//Local storage
localStorage.setItem("girish",true)
localStorage.setItem("rahul","prepared")
localStorage.setItem("hai",null)
localStorage.setItem("Hello",undefined)
console.log(localStorage.getItem("girish"))
console.log(localStorage.getItem("rahul"))
console.log(localStorage.getItem("hai"))
console.log(localStorage.getItem("Hello"))
localStorage.removeItem("girish")
console.log(localStorage.key(1))
localStorage.clear()


//session storage
sessionStorage.setItem("id",101)
sessionStorage.setItem("queen","new")
sessionStorage.setItem("king","done")
console.log(sessionStorage.getItem("king"))
console.log(sessionStorage.getItem("queen"))
console.log(sessionStorage.getItem("id"))
sessionStorage.removeItem("king")
sessionStorage.removeItem("id")
console.log(sessionStorage.key(2))
sessionStorage.clear()

