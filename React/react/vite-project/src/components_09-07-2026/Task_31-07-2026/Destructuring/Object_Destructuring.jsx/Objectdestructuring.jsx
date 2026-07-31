import React from 'react'

function Objectdestructuring(){
const object = {
  name: "John",
  age: 25,
  city: "Hyderabad"
};
const { name, age, city } = object
console.log(name)
console.log(age)
console.log(city) 
}
export default Objectdestructuring