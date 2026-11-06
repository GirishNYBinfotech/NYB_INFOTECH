console.log("Rest operator")
//finction
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40)

//Array
const numbers = [10, 20, 30, 40, 50]
const [first, second, ...remaining] = numbers
console.log(first)
console.log(second)
console.log(remaining)

//objects
const employee1= {
    name: "Rahul",
    age: 25,
    city: "Hyderabad",
    salary: 50000
}

const { name, ...otherDetails } = employee1
console.log(name)
console.log(otherDetails)