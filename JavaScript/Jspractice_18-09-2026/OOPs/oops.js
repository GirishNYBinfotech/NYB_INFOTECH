// Object
const person = {
  name: "Girish",
  age: 25,
  greet() {
    console.log(`Hello ${this.name}`)
  }
}
person.greet()

// Constructor Function
function Employee(name, salary) {
  this.name = name
  this.salary = salary
}
// Method using Prototype
Employee.prototype.getSalary = function() {
  return this.salary
}

const emp1 = new Employee("Girish", 50000)
console.log(emp1.name)
console.log(emp1.getSalary())

// Class
class Developer {
  // Constructor
  constructor(name, language) {
    this.name = name
    this.language = language
  }
  // Method
  code() {
    console.log(`${this.name} is coding in ${this.language}`)
  }
}
const dev1 = new Developer("Girish", "JavaScript")
dev1.code()

// Inheritance
class SeniorDeveloper extends Developer {
  constructor(name, language, experience) {
    super(name, language)
    this.experience=experience
  }
  // Method
  showExperience() {
    console.log(`${this.name} has ${this.experience} years experience`)
  }
}
const seniorDev = new SeniorDeveloper("Girish", "JavaScript", 5)
seniorDev.code()
seniorDev.showExperience()

// Prototype Chain
console.log(seniorDev instanceof SeniorDeveloper)
console.log(seniorDev instanceof Developer)
console.log(seniorDev instanceof Object)

// Encapsulation
class BankAccount {
  balance = 0
  constructor(name, balance) {
    this.name = name
    this.balance = balance
  }
  deposit(amount) {
    this.balance += amount
  }
  getBalance() {
    return this.balance
  }
}
const account = new BankAccount("Girish", 1000)
account.deposit(500)
console.log(account.getBalance())

// Iterator
const numbers = [10, 20, 30]
const iterator = numbers[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// Generator
function* numberGenerator() {
  yield 10
  yield 20
  yield 30
}
const generator = numberGenerator()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())