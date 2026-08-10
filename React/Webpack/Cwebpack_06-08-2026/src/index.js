
// Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

// Arrow Function + Default Parameter
const add = (a, b = 10) => {
    return a + b;
};

// let and const
let marks = [80, 90, 95];
const extraMarks = [100];

// Spread Operator
const allMarks = [...marks, ...extraMarks];

console.log("All Marks:", allMarks);

// Array Destructuring
const [firstMark, secondMark, thirdMark, fourthMark] = allMarks;

console.log(`First Mark: ${firstMark}`);
console.log(`Second Mark: ${secondMark}`);
console.log(`Third Mark: ${thirdMark}`);
console.log(`Fourth Mark: ${fourthMark}`);

// Object
const studentInfo = {
    name: "Girish",
    age: 22,
    course: "React",
    city: "Hyderabad"
};

// Object Destructuring
const { name, age, course, duration, city } = studentInfo;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Duration: ${duration}`);
console.log(`City: ${city}`);

// Template Literals
console.log(`Welcome ${name} to ${course} Course.`);

// for...of Loop
console.log("Marks:");
for (const mark of allMarks) {
    console.log(mark);
}

// Map Method
const doubledMarks = allMarks.map(mark => mark * 2);

console.log("Doubled Marks:", doubledMarks);

// Rest Parameter
function totalMarks(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("Total Marks:", totalMarks(...allMarks));

// Create Student Object
const student1 = new Student("Rahul", 23);
student1.display();

// Arrow Function
console.log("Addition 1:", add(20));
console.log("Addition 2:", add(20, 30));

// Promise
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise Executed Successfully");
    }, 1000);
});

promise.then(result => {
    console.log(result);
});