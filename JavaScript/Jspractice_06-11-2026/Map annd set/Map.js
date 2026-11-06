//map
console.log("Map")
const employee = new Map()
// Adding data
employee.set("name", "John")
employee.set("age", 25)
employee.set(101, "Employee ID")

// Getting data
console.log(employee.get("name"))
console.log(employee.get("age"))

// Checking key
console.log(employee.has("name"))

// Deleting data
employee.delete("age")


employee.forEach((value, key) => {
    console.log(key, value);
})


//WeakMap()
let user = {
    name: "John",
    age: 25
}
const weakMap = new WeakMap();
// Adding data
weakMap.set(user, "User Details")

// Getting data
console.log(weakMap.get(user))
// Checking key
console.log(weakMap.has(user))

// Deleting data
weakMap.delete(user)

// Output
console.log(weakMap.has(user))