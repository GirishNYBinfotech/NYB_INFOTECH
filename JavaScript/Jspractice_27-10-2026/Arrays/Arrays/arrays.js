//Arrays
const fruits = ["Apple", "Banana", "Mango",["Grapes"]];
console.log(fruits);

//creating an array
let n=[]
n.push(10)
n.push(20)
console.log(n)

const colors = new Array("Red", "Green", "Blue");
console.log(colors);

//Accessing Array Elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3][0])
console.log(fruits.length);

//Array destructuring
console.log("Array Destructuring")
let numbers = [10, 20, 30, 40, 50];

// destructuring
let [a, b, c] = numbers;
console.log("Basic:", a, b, c);

// Skipping elements
let [first, , third] = numbers;
console.log("Skipping:", first, third);

// Default value
let [x, y, z, p, q, r = 60] = numbers;
console.log("Default:", r);

// Swapping variables
let m = 100;
let n1 = 200;

[m, n1] = [n1, m];
console.log("Swapping:","m", m,"n1", n1);

// Rest operator
let [num1, num2, ...rest] = numbers;
console.log("Rest:", rest);

// Nested array destructuring
let data = [10, [20, 30]];
let [i, [j, k]] = data;
console.log("Nested:", i, j, k);