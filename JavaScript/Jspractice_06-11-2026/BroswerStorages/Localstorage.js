//Local storage
console.log("Local Storage:")
localStorage.clear()
//to set item 
localStorage.setItem("name","Girish")
localStorage.setItem("id",100)
localStorage.setItem("loc","Hyd")
localStorage.setItem("lang","Js")
//to update item
localStorage.setItem("name","king")
//to get item
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("id"))
console.log(localStorage.getItem("lang"))
//to remove item
localStorage.removeItem("lang")
console.log(localStorage.getItem("lang"))
//to find length
console.log(localStorage.length)