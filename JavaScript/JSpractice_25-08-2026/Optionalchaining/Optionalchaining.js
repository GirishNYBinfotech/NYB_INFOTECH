const user1= {
  name: "Girish"
}

// console.log(user1.address.city)
console.log(user1.address?.city)

const user = {
  name: "Girish",
  address: {
    city: "Vijayawada"
  }
}
console.log(user?.address?.city)