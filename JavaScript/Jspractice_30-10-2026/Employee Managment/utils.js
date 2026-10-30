// Object-Oriented JavaScript

export class Employee {
    constructor(id, name, email, department, salary) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} - ${this.department}`;
    }
}

// Debouncing function
export function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

// Reusable ID generator
export function generateId() {
    return Date.now().toString();
}
