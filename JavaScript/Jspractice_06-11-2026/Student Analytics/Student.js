const students = [
  { id: 1, name: "Rahul", marks: 85 },
  { id: 2, name: "Girish", marks: 92 },
  { id: 3, name: "Queen", marks: 45 },
  { id: 4, name: "King", marks: 78 },
  { id: 5, name: "Kiran", marks: 35 }
];

// Calculate Results using map()
const results = students.map((student) => {
  return {
    ...student,
    result: student.marks >= 40 ? "Pass" : "Fail"
  }
})

console.log("Student Results:", results)


// Filter Passed Students using filter()
const passedStudents = students.filter(
  (student) => student.marks >= 40
)
console.log("Passed Students:", passedStudents)


// Filter Failed Students
const failedStudents = students.filter(
  (student) => student.marks < 40
);

console.log("Failed Students:", failedStudents);


// Find Top Performer using sort()
const topPerformer = [...students].sort(
  (a, b) => b.marks - a.marks
)[0]

console.log("Top Performer:", topPerformer);


// 5. Calculate Average Marks using reduce()
const totalMarks = students.reduce(
  (total, student) => total + student.marks, 0
)
const averageMarks=totalMarks/students.length
console.log("Average Marks:", averageMarks)


// Calculate Total Students
const totalStudents = students.length
console.log("Total Students:", totalStudents)


// Find a Student using find()
const student = students.find(
  (student) => student.name ==="King"
)
console.log("Search Student:", student)


// Summary Report
const summary = {
  totalStudents: students.length,
  passed: passedStudents.length,
  failed: failedStudents.length,
  averageMarks: averageMarks,
  topper: topPerformer.name
}
console.log("Summary Report:", summary)