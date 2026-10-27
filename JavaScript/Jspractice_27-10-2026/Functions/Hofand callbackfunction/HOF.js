//higher oder function
console.log("Higher order function:")
//Accepting a function
function greet() {
  console.log("Hello!");
}
function executeFunction(callback) {
  callback();
}
executeFunction(greet);

//Returning a function
function outerFunction() {
  return function () {
    console.log("Hello from inner function!");
  };
}
const result = outerFunction()
result();