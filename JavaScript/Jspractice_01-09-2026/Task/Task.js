const student={
  id:101,
  name:"Girish",
  age:22,
  address:{
    city:"Hyd",
    state:"Telangana"
  },
  skills:{
    frontend:["HTML","CSS","JavaScript","React"]
  },
  education:{
    degree:"B.Tech",
    college:"ABC College",
    year:2026
  }
}
//Access nested data
console.log(student.name)
console.log(student.address.city)
console.log(student.skills.frontend[2])
console.log(student.education.degree)
//Nested destructuring
const {address: { city,state}}=student
console.log(city)
console.log(state)
//Updating nested objects
student.address.city="Hyderabad"
student.education.year=2027
console.log(student.address.city)
console.log(student.education.year)
//Adding new properties
student.address.country="India"
student.skills.frontend.push("TypeScript")
console.log(student.address)
console.log(student.skills.frontend)

console.log(Object.keys(student))
console.log(Object.values(student.address))
console.log(Object.entries(student.address))

const area =student.address.location?.area ?? "Area not available"
console.log(area)