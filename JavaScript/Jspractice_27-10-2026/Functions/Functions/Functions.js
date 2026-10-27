//Function Declaration
function add(a, b) {
  return a + b;
}
console.log("Addition:", add(10, 20));

// Function Expression
//named function
const subtract = function(a, b) {
  return a - b;
};
console.log("Subtraction:", subtract(20, 10));

//Arrow Function
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(5, 4));

//Anonymous Function
setTimeout(function() {
  console.log("Anonymous Function: Hello!");
}, 1000);

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("IIFE: Executed immediately");
})();

// Default Parameter Function
function greet(name = "Student") {
  return "Hello " + name;
}
console.log(greet());
console.log(greet("Rahul"));

// Callback Function
function divide(a, b, callback) {
  callback(a / b);
}

divide(20, 4, function(result) {
  console.log("Division:", result);
});
