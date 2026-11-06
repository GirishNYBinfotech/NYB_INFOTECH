//HOF
//function as an argument
function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Girish"))
}
processUser(greet)

//function returning as an argument
function multiplier(x) {
    return function(y) {
        return x * y
    }
}

const multiply = multiplier(5)
console.log(multiply(3))