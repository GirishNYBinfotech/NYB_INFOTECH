let username = null
console.log(username ?? "Guest")

const user = {
    name: "Girish",
    city: null
}
const city = user.city ?? "Hyderabad"
console.log(city)

let username1 = "Girish"
console.log(username1 ?? "Guest")


let username2= undefined
console.log(username2?? "girish")

let age
let result = age ?? 18
console.log(result)

const user1= {
    name: "Girish"
}
const name = user1?.name ?? "King"
console.log(name)