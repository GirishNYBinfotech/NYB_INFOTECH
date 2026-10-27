//tradition js to modrenjs
// var → let / const
var name = "Rahul";
let age = 25;
const city = "Hyderabad";

// Normal function → Arrow function
function add(a, b) {
    return a + b;
}
const addES6 = (a, b) => a + b;

//String concatenation → Template literals
var message = "Hello " + name + ", your age is " + age;
const messageES6 = `Hello ${name}, your age is ${age}`;

//Object properties shorthand
var userName = "Rahul";
var userAge = 25;
var user = {
    userName: userName,
    userAge: userAge
}
const userES6 = { userName, userAge };

//Array operations → map()
var numbers = [1, 2, 3, 4, 5]
var doubled = numbers.map(function(num) {
    return num * 2;
})
const doubledES6 = numbers.map(num => num * 2);

// Object destructuring
var employee = {
    id: 101,
    name: "Rahul",
    salary: 30000
}
var id = employee.id
var name2 = employee.name
const { id: employeeId, name: employeeName } = employee;

// Spread operator
var arr1 = [10, 20, 30];
var arr2 = arr1.concat([40, 50])
const arr2ES6 = [...arr1, 40, 50]

// Default parameters
function greet(name) {
    name = name || "Guest";
    return "Hello " + name;
}
const greetES6 = (name = "Guest") => `Hello ${name}`;

//for loop → for...of
var values = [10, 20, 30];
for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}
for (const value of values) {
    console.log(value);
}