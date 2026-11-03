// Parent Class
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method
    displayDetails() {
        console.log(`ID: ${this.id}`)
        console.log(`Name: ${this.name}`)
        console.log(`Salary: ${this.salary}`)
    }
    calculateBonus() {
        return this.salary * 0.10;
    }
}

// Child Class 1
class Developer extends Employee {
    constructor(id, name, salary, programmingLanguage) {
        // Calling parent constructor
        super(id, name, salary)
        this.programmingLanguage = programmingLanguage
    }

    // Method Overriding (Polymorphism)
    calculateBonus() {
        return this.salary * 0.20;
    }
    displayDetails() {
        super.displayDetails()
        console.log(`Language: ${this.programmingLanguage}`)
    }
}

// Child Class 2
class Manager extends Employee {
    constructor(id, name, salary, teamSize) {
        super(id, name, salary)
        this.teamSize = teamSize
    }
    calculateBonus() {
        return this.salary * 0.30
    }
    displayDetails() {
        super.displayDetails();
        console.log(`Team Size: ${this.teamSize}`)
    }
}

// Creating Objects
const emp1 = new Employee(101, "Rahul", 30000)
const emp2 = new Developer(102,"Girish",50000,"JavaScript")
const emp3 = new Manager( 103, "Queen",80000,10)

// Display Employee Details
console.log("Employee Details:")
emp1.displayDetails()

console.log("Developer Details:")
emp2.displayDetails()

console.log("Manager Details:")
emp3.displayDetails()

// Calculate Bonuses
console.log("Employee Bonus:", emp1.calculateBonus())
console.log("Developer Bonus:", emp2.calculateBonus())
console.log("Manager Bonus:", emp3.calculateBonus())