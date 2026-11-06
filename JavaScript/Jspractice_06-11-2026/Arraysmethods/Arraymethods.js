const employees = [
  { id:1,name:"Girish",age:25,salary:30000,skills:["HTML","CSS"]},
  { id:2,name:"David",age:30,salary:40000,skills:["JavaScript","React"]},
  { id:3,name:"King",age:22,salary:25000,skills:["Node.js","MongoDB"]},
  { id:4,name:"Rahul",age:28,salary:50000,skills:["Redux","React"]}
]

// map()
const names = employees.map(emp => emp.name)
console.log("Map:", names)

// filter()
const highSalary = employees.filter(emp => emp.salary > 30000)
console.log("Filter:", highSalary)

// reduce()
const totalSalary = employees.reduce((total, emp) => {
    return total + emp.salary
}, 0)
console.log("Reduce:", totalSalary)

// find()
const employee = employees.find(emp => emp.age > 25)
console.log("Find:", employee);

// some()
const hasHighSalary = employees.some(emp => emp.salary > 45000)
console.log("Some:", hasHighSalary);

// every()
const allAdults = employees.every(emp => emp.age >= 18)
console.log("Every:", allAdults);

// flat()
const nestedArray = [1, 2, [3, 4], [5, 6]];
const flatArray = nestedArray.flat();
console.log("Flat:", flatArray);

// flatMap()
const skills = employees.flatMap(emp => emp.skills);
console.log("FlatMap:", skills)

//forEach()
employees.forEach((emp, index) => {
  console.log(`Employee ${index + 1}: ${emp.name}, Salary: ${emp.salary}`)
})

//includes
const result = employees.filter(emp =>
  emp.skills.includes("JavaScript")
)
console.log(result)