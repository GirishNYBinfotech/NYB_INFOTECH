//Pure function
console.log("Pure function")
function add(a, b) {
    return a + b;
}

console.log(add(10, 20))
console.log(add(10, 20))

//impure function
console.log("impure function")
let count = 0
function increment() {
    count++
    return count
}

console.log(increment())
console.log(increment())
console.log(increment())