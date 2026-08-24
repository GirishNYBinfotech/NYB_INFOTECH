const getName = (user) => user.name
const upperCase = (name) => name.toUpperCase()
const addGreeting = (name) => `Hello ${name}`
const user = {
    name: "girish"
}
const result = addGreeting(upperCase(getName(user)))
console.log(result)