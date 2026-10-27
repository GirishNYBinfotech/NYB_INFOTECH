let numbers = [10, 20, 30];

// 1. SPREAD OPERATOR (...)
let newNumbers = [...numbers, 40, 50];

console.log("Original Array:", numbers);
console.log("Spread Array:", newNumbers);


// 2. REST OPERATOR (...)
function sum(...values) {
    return values.reduce((total, num) => total + num, 0);
}
console.log("Rest Result:", sum(10, 20, 30, 40));


// SPREAD WITH OBJECTS
let employee = {
    name: "Rahul",
    age: 25
}
let updatedEmployee = {
    ...employee,
    city: "Hyderabad"
}
console.log("Original Employee:", employee);
console.log("Spread Object:", updatedEmployee);

// REST WITH ARRAY DESTRUCTURING
let colors = ["Red", "Green", "Blue", "Yellow"]
let [first, second, ...remainingColors] = colors
console.log("First Color:", first)
console.log("Second Color:", second)
console.log("Remaining Colors:", remainingColors)
