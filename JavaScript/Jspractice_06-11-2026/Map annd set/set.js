//set
console.log("Set")
const numbers = new Set()

// Adding values
numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(10)

console.log(numbers)

// Checking value
console.log(numbers.has(20))

// Deleting value
numbers.delete(30)

// Iterating
numbers.forEach((value) => {
    console.log(value)
})

//weakset()
let user1 = { name: "John" }
let user2 = { name: "David" }

const weakSet = new WeakSet()
// Adding objects
weakSet.add(user1)
weakSet.add(user2)

// Checking object
console.log(weakSet.has(user1))

// Deleting object
weakSet.delete(user2)

console.log(weakSet.has(user2))
