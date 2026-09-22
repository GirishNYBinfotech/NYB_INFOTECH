// Destructuring
const user={name:"Girish",age:25,city:"Vijayawada"}
const {name,age,city}=user
console.log(name,age,city)

// Array Destructuring
const numbers=[10,20,30]
const [first,second,third]=numbers
console.log(first,second,third)

// Spread Operator
const arr1=[1,2,3]
const arr2=[4,5,6]
const combined=[...arr1,...arr2]
console.log(combined)

// Rest Operator
function add(...values){
return values.reduce((sum,value)=>sum+value,0)
}
console.log(add(10,20,30,40))

// Template Literals
const username="Girish"
const profession="Developer"
console.log(`My name is ${username} and I am a ${profession}`)

// Optional Chaining
const employee={name:"Girish",address:{city:"Vijayawada"}}
console.log(employee.address?.city)
console.log(employee.contact?.phone)

// Nullish Coalescing
const username2=null
const displayName=username2??"Guest"
console.log(displayName)

const age2=0
console.log(age2??18)

// Map
const employees=new Map()
employees.set(1,"Girish")
employees.set(2,"Rahul")
employees.set(3,"Anil")
console.log(employees)
console.log(employees.get(1))
console.log(employees.has(2))

// Set
const uniqueNumbers=new Set([10,20,20,30,30,40])
console.log(uniqueNumbers)
uniqueNumbers.add(50)
console.log(uniqueNumbers.has(30))

// WeakMap
const weakMap=new WeakMap()
const employeeObj={}
weakMap.set(employeeObj,"Employee Data")
console.log(weakMap.get(employeeObj))
console.log(weakMap.has(employeeObj))

// WeakSet
const weakSet=new WeakSet()
const userObj={}
weakSet.add(userObj)
console.log(weakSet.has(userObj))

//Modules
//default import
import names from "./module.js"
names()

// named imports
import { adds, subs, greets } from "./module.js"
console.log(adds(20,40))
console.log(subs(40,20))
greets()