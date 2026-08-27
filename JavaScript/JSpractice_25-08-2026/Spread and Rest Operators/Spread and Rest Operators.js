//Spread operator
const fruits = ["apple", "banana", "mango"]
const newFruits = [...fruits, "orange"]
console.log(newFruits)

//Combining arrays
const a=[1, 2, 3]
const b=[4, 5, 6]
const result=[...a, ...b]
console.log(result)

//Rest operator
function add(...numbers) {
    console.log(numbers)
}
add(10, 20, 30, 40)

function show(first, ...remaining) {
    console.log(first)
    console.log(remaining)
}
show(10, 20, 30, 40)