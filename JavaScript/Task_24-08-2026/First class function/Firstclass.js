//Store a function in a variable
console.log("Store a function in a variable")
const greet = function () {
    console.log("Hello from variable")
}
greet()

//Pass a function as an argument
console.log("Pass a function as an argument")
function greet1() {
    console.log("Hello from argument")
}

function execute(callback) {
    callback();
}

execute(greet1);

//return a function
console.log("Return a function")
function createFunction() {
    return function () {
        console.log("Hello from return")
    }
}
const myFunction = createFunction()
myFunction()

//Store the function in arrray
console.log("Store the function in arrray")
const functions = [
    function () {
        console.log("First function")
    },
    function () {
        console.log("Second function")
    }
]
functions[0]()
functions[1]()