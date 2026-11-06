//Session storage
console.log('session storage:')
sessionStorage.clear()
//to set item 
sessionStorage.setItem("name","Rahul")
sessionStorage.setItem("id",101)
sessionStorage.setItem("loc","Bnglr")
sessionStorage.setItem("lang","HTML")
//to update item
sessionStorage.setItem("name","Queen")
sessionStorage.setItem("id",102)
//to get item
console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("id"))
console.log(sessionStorage.getItem("lang"))
//to remove item
sessionStorage.removeItem("loc")
console.log(sessionStorage.getItem("loc"))
//to find length
console.log(sessionStorage.length)