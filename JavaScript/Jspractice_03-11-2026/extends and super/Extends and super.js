// Parent Class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}
// Child Class
class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary)
        this.language = language
    }
    displayDeveloper() {
        console.log("Programming Language:", this.language)
    }
}
const dev = new Developer("King", 50000, "JavaScript")
dev.displayDetails()
dev.displayDeveloper()