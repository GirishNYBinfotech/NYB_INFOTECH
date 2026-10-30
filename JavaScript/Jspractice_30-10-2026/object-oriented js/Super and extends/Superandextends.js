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
        super(name, salary);
        this.language = language;
    }
    displayDeveloper() {
        super.displayDetails();
        console.log("Language:", this.language);
    }
}
const emp1 = new Developer("Rahul", 50000, "JavaScript")
emp1.displayDeveloper()