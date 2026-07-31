import React from 'react'

const Nestedobjectestructuring = () => {
    console.log("Nested object Destructuring")
const person = {
  name: "Girish",
  id:2,
  address: {
    city: {
      area: "Madhapur",
      pincode: 500081
    }
  }
};

const {
  name,
  id,
  address: {
    city: { area, pincode }
  }
} = person;

console.log(name)
console.log(id)
console.log(area)
console.log(pincode)
}

export default Nestedobjectestructuring