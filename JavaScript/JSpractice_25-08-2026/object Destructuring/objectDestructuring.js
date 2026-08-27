var person = {
  name: "Alice",
  age: 25,
  city: "New York"
}
const { name, age } = person
console.log(name)
console.log(age)
console.log(person.city)

//nested destructuring
console.log("nested destructuring")
const student = {
  name1: "John",
  address: {
    city: "Boston"
  }
}

var {
    name1,
  address: { city }
} = student
console.log(name1)
console.log(city)

//Renaming variables
console.log("Renaming variables")
const person1 = {
  name2: "Girish",
  age: 25
}
const { name2: fullName, age: yearsOld }=person1
console.log(fullName)
console.log(yearsOld)