let students = [
    { name:"Girish",marks:85},
    { name:"Rahul",marks:65},
    { name:"John",marks:45},
    { name:"King",marks:92},
    { name:"Queen",marks:75}]

let names = students.map(student=>student.name)
console.log("Names:",names)

let passedStudents = students.filter(student=>student.marks>70)
console.log("Above 70:",passedStudents)

let student = students.find(student=>student.marks>80)
console.log("First student above 80:",student)

let index = students.findIndex(student=>student.marks>80)
console.log("Index:",index)

let hasFailed = students.some(student=>student.marks<50)
console.log("Any student below 50:",hasFailed)

let allPassed = students.every(student=>student.marks>40)
console.log("Everyone scored above 40:",allPassed)

let totalMarks = students.reduce((total,student)=>total+student.marks,0)
console.log("Total Marks:",totalMarks)

let hasGirish = names.includes("Girish")
console.log("Girish exists:",hasGirish)

let sortedStudents = [...students].sort((a,b)=>b.marks-a.marks)
console.log("Sorted students:",sortedStudents)