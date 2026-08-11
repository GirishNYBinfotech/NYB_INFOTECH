import { getStudent } from "./student.js";

const student = getStudent("Ravi", 85);

const message = `Student: ${student.name}`;

console.log(message);
console.log(`Marks: ${student.marks}`);
console.log(`Result: ${student.result}`);