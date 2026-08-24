//passing as argument
console.log("passing function as argument")
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y
}

console.log(calculate(10, 20, add))

//return a function
console.log("Return a function")
function multiplyBy(number) {

    return function(value) {
        return value * number
    }
}

let double = multiplyBy(2)
console.log(double(5))


//Using map
console.log("By using map")
const numbers = [1,2,3,4]
const result = numbers.map(function(num) {
    return num * 2
})
console.log(result)

//using filter
console.log("By using filter")
const greater=numbers.filter(function(num){
    return num>=2
})
console.log(greater)

//using foreach
console.log("By using for each")
numbers.forEach(function(num) {
    console.log(num)
})

//using sort
console.log("By using sorting")
const numbers1=[40,10,30,20]
numbers1.sort(function(a, b) {
    return a - b
})
console.log(numbers1)