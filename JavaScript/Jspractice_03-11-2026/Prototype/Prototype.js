// Parent object
const Person = {
    greet: function () {
        console.log("Hello, I am a person")
    }
}
// Child object
const Employee = {
    work: function () {
        console.log("I am working")
    }
}
Object.setPrototypeOf(Employee,Person)
Employee.greet()
Employee.work()

//prototype chain
const person = {
    name: "John",
    age: 25
}
const employee = Object.create(person);
employee.salary = 50000
console.log(employee.salary)
console.log(employee.name)
console.log(employee.age)

//Employee and developer
// Parent constructor
function Employee1(name, salary) {
    this.name = name
    this.salary = salary
}
// Parent prototype method
Employee1.prototype.getDetails = function () {
    console.log(`Name: ${this.name}`)
    console.log(`Salary: ${this.salary}`)
}
// Child constructor
function Developer(name, salary, language) {
    Employee1.call(this, name, salary)
    this.language = language
}
Developer.prototype = Object.create(Employee1.prototype)
Developer.prototype.constructor = Developer
Developer.prototype.writeCode = function () {
    console.log(`${this.name} writes ${this.language} code`)
}
const dev1 = new Developer("Rahul", 50000, "JavaScript")
dev1.getDetails()
dev1.writeCode()