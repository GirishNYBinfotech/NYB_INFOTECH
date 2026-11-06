//impur function 
console.log("impure function")
let total=10
function add(value) {
    total = total + value
    return total
}
console.log(add(5))
console.log(add(5))
console.log(add(5))

let salary = 30000;
function calculateSalary(bonus) {
    salary = salary + bonus
    return salary
}
console.log("salary 5000",calculateSalary(5000))
console.log("salary 5000",calculateSalary(5000))