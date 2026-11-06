console.log("Imutable function")
//Arrays
const numbers = [10, 20, 30, 40];

const updatedNumbers = [...numbers, 50]
console.log("Original:", numbers)
console.log("Updated:", updatedNumbers)

//object
const user = {
    name: "Rahul",
    age: 25
};

// Creating a new object
const updatedUser={...user,age: 26}
console.log("Original:", user)
console.log("Updated:", updatedUser)

const employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Amit", salary: 30000 },
    { id: 3, name: "Priya", salary: 40000 }
];

// Update Rahul's salary
const updatedEmployees = employees.map(emp =>
    emp.id === 1? { ...emp, salary: 35000 }:emp
    )
console.log("Original Employees:", employees)
console.log("Updated Employees:", updatedEmployees)