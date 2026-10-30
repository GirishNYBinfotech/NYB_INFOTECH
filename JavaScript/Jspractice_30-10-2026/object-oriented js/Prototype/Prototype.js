const employee = {
    name: "Rahul",
    salary: 50000
}

const developer = {
    language: "JavaScript"
}
Object.setPrototypeOf(developer, employee)
console.log(developer.name)
console.log(developer.salary)
console.log(developer.language)