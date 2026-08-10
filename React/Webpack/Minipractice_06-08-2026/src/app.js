// Arrow Function
const greet = (name = "Guest") => {
    console.log(`Hello ${name}`);
};

// Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

// Destructuring
const person = {
    city: "Hyderabad",
    country: "India"
};

const { city, country } = person;

// Template Literal
console.log(`Location: ${city}, ${country}`);

// Spread Operator
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5];

// for...of
for (const num of numbers2) {
    console.log(num);
}

// Promise
const promise = new Promise((resolve) => {
    resolve("Learning Babel");
});

promise.then(message => console.log(message));

greet("Girish");

const student = new Student("Rahul", 22);
student.display();