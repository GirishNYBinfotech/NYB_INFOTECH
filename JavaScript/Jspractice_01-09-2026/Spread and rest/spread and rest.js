//spread operator
const user={
  name: "Girish",
  age: 25
}
const address={
  city: "Hyd",
  country: "India"
}
const person={
  ...user,
  ...address
}
console.log(person)
let updateuser={
    ...person,
    age:20
}
console.log(updateuser)

//Rest operator
let {name,...users}=person
console.log(users)
const employee={
  id:101,
  name:"Girish",
  role:"Developer"
}
const { id,...employeeDetails}=employee
console.log(employee)
console.log(employeeDetails)
