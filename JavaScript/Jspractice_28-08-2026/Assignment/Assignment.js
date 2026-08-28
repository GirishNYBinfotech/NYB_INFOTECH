// Functions and Higher Order Function
function greet(name){
  return `Hello ${name}`
}

function processUser(name,callback){
  return callback(name)
}

console.log(processUser("Girish",greet))

// Object Manipulation
const user={
  name:"Girish",
  age:22,
  course:"JavaScript"
}

user.city="Vijayawada"
console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))

// Classes and Inheritance
class Person{
  constructor(name){
    this.name=name
  }

  showName(){
    console.log(`Name:${this.name}`)
  }
}

class Student extends Person{
  constructor(name,course){
    super(name)
    this.course=course
  }

  showCourse(){
    console.log(`Course:${this.course}`)
  }
}

const student=new Student("Girish","JavaScript")
student.showName()
student.showCourse()

// Promise and Async/Await
function getData(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve("Data received")
    },1000)
  })
}

async function fetchData(){
  const data=await getData()
  console.log(data)
}
fetchData()

// Event Loop and Asynchronous Execution
console.log("Start")

setTimeout(()=>{
  console.log("setTimeout")
},0)

Promise.resolve().then(()=>{
  console.log("Promise")
})
console.log("End")

// Modern ES6+ Features
const numbers=[1,2,3,4,5]
const doubled=numbers.map(n=>n*2)
const[a,b,...rest]=numbers
const newNumbers=[...numbers,6]
console.log(doubled)
console.log(a,b,rest)
console.log(newNumbers)