class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Salary:", this.salary);
    }
}
// Creating objects
const emp1 = new Employee("Girish", 25, 30000)
const emp2 = new Employee("King", 28, 40000)
emp1.displayDetails()
emp2.displayDetails()