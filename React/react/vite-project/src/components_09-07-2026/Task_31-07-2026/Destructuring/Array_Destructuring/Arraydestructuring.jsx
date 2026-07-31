import React from 'react'

const Arraydestructuring = () => {

const fruits = ["Apple", "Mango", "Orange"]
const [first, second, third] = fruits
console.log("Array Destructuring")
console.log(first)
console.log(second)
console.log(third)


const student = [
  "Girish",
  24,
  ["React", "Java", "Python"]
];
const [
  name,
  age,
  [course1, course2, course3]
] = student;

console.log("nested array destructuring")
console.log(name);
console.log(age);
console.log(course1);
console.log(course2);
console.log(course3);
}

export default Arraydestructuring