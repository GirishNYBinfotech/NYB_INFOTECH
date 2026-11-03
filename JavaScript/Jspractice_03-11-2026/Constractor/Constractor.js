// Constructor Function
// function Employee(id, name, salary) {
//     this.id = id
//     this.name = name
//     this.salary = salary
//     this.displayDetails = function () {
//         console.log(`ID: ${this.id}`)
//         console.log(`Name: ${this.name}`)
//         console.log(`Salary: ${this.salary}`)
//     }
// }
// const emp1 = new Employee(101, "John", 50000)
// const emp2 = new Employee(102, "David", 60000)
// emp1.displayDetails()
// emp2.displayDetails()

//ES6 class
class Employee {
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    displayDetails() {
        console.log(`ID: ${this.id}`)
        console.log(`Name: ${this.name}`)
        console.log(`Salary: ${this.salary}`)
    }
}
const emp1=new Employee(101, "King", 50000)
const emp2=new Employee(102, "Queen", 60000)
emp1.displayDetails()
emp2.displayDetails()