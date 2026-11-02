// var 
console.log(a)
var a = 10;
console.log(a)

//let
try {
    console.log(b)
} 
catch (error) {
    console.log(error.message)
}
let b = 20
console.log(b)
//const
try {
    console.log(c)
} 
catch (error) {
    console.log(error.message)
}
const c = 30
console.log(c)

//Employee
console.log(employeeId)
var employeeId = 101

// let and const
// console.log(employeeName); // ReferenceError
// console.log(employeeRole); // ReferenceError
let employeeName = "Rahul"
const employeeRole = "Developer"
// Function Hoisting
displayEmployee()
function displayEmployee() {
    console.log("Employee Details")
    console.log(employeeId)
    console.log(employeeName)
    console.log(employeeRole)
}
