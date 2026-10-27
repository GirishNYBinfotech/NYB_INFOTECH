//callback function
console.log("callback function:")
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Girish");
}

processUser(greet);


function calculate(a, b, callback) {
  callback(a + b);
}

function display(result) {
  console.log("Sum:", result);
}

calculate(10, 20, display);
