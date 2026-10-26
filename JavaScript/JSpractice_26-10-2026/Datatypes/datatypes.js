console.log(" DATA TYPES");
//Primitive datatype
//  STRING
let name = "Rahul";
let city = 'Hyderabad';
let message = `Hello, ${name}`;

console.log(" STRING");
console.log(name);
console.log(city);
console.log(message);
console.log(typeof name); 


// NUMBER
let age = 25;
let price = 99.50;
let temperature = -10;

console.log(" NUMBER");
console.log(age);
console.log(price);
console.log(temperature);
console.log(typeof age);


// BIGINT
let bigNumber = 123456789012345678901234567890n;

console.log(" BIGINT");
console.log(bigNumber);
console.log(typeof bigNumber);


// BOOLEAN
let isStudent = true;
let isEmployed = false;

console.log(" BOOLEAN");
console.log(isStudent);
console.log(isEmployed);
console.log(typeof isStudent); 

// UNDEFINED
let salary;
console.log("UNDEFINED");
console.log(salary); 
console.log(typeof salary);


// NULL
let selectedProduct = null;

console.log(" NULL");
console.log(selectedProduct);
console.log(typeof selectedProduct); 


// SYMBOL
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log("SYMBOL");
console.log(id1);
console.log(id1 === id2); 
console.log(typeof id1); 


//Non-primitive datatype
//  OBJECT
let employee = {
    name: "Rahul",
    age: 25,
    department: "IT"
};

console.log(" OBJECT");
console.log(employee);
console.log(employee.name);
console.log(typeof employee); 


// ARRAY
let fruits = ["Apple", "Banana", "Mango"];

console.log(" ARRAY");
console.log(fruits);
console.log(fruits[0]); 
console.log(fruits.length); 
console.log(typeof fruits); 
console.log(Array.isArray(fruits)); 


//  FUNCTION
function add(a, b) {
    return a + b;
}

console.log(" FUNCTION");
console.log(add(10, 20)); 
console.log(typeof add);


// DATE OBJECT
let today = new Date();

console.log(" DATE OBJECT");
console.log(today);
console.log(typeof today); 


// REGULAR EXPRESSION OBJECT
let pattern = /hello/i;

console.log(" REGULAR EXPRESSION");
console.log(pattern.test("Hello World")); 
console.log(typeof pattern);


// TYPE CONVERSION
let numberString = "100";
let convertedNumber = Number(numberString);

console.log("TYPE CONVERSION");
console.log(numberString, typeof numberString);
console.log(convertedNumber, typeof convertedNumber);



