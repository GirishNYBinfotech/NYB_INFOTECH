const user = {
    name: "Girish",
    age: 25,
    city: "Vijayawada"
}

console.log("Original Object:")
console.log(user);


//Object.keys()
console.log(" Object.keys():")
console.log(Object.keys(user))


//Object.values()
console.log("Object.values():")
console.log(Object.values(user))


//Object.entries()
console.log("Object.entries():")
console.log(Object.entries(user))


// Object.assign()
console.log("Object.assign():")
const address = {
    country: "India"
}
const mergedUser = Object.assign( user, address)
console.log(mergedUser)