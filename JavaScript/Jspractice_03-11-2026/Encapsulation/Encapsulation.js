class Employee {
    #salary = 50000
    constructor(name) {
        this.name = name
    }
    getSalary() {
        return this.#salary
    }
    setSalary(amount) {
        if (amount > 0) {
            this.#salary = amount
        } 
        else {
            console.log("Invalid salary")
        }
    }
}
const emp = new Employee("Girish")
console.log("Employee name:",emp.name)
console.log("Employee salary:",emp.getSalary())
emp.setSalary(60000)
console.log("Updated salary:",emp.getSalary())

//Reusable class method
class Calculator {
    add(a,b) {
        return a+b
    }
    subtract(a,b) {
        return a-b
    }
    multiply(a,b) {
        return a*b
    }
}
const calc1 = new Calculator()
const calc2 = new Calculator()
console.log(calc1.add(10, 20))
console.log(calc2.add(50, 10))
console.log(calc1.multiply(5, 5))
console.log(calc2.subtract(10,30))
console.log(calc2.multiply(50,40))