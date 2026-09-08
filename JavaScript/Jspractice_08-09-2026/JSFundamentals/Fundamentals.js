//Variables
var name="Girish"
let age=25
const city="Vijayawada"

console.log(name)
console.log(age)
console.log(city)

//var
var course="JavaScript"
console.log(course)

course="React"
console.log(course)

//let
let score=80
console.log(score)

score=90
console.log(score)

//const
const country="India"
console.log(country)

//Data Types
//Primitive Data Types
let name1="Girish"          
let age1=25                
let isStudent=true        
let value=null            
let result                
let symbol=Symbol("id")   
let bigNumber=123456789n  

console.log(name1)
console.log(age1)
console.log(isStudent)
console.log(value)
console.log(result)
console.log(symbol)
console.log(bigNumber)

//Reference Data Types
var person={
  name:"Girish",
  age:25
}

var numbers=[10,20,30]

function greet(){
  console.log("Hello")
}

console.log(person)
console.log(numbers)
console.log(greet)

//typeof Operator
console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(isStudent))
console.log(typeof(value))
console.log(typeof(result))
console.log(typeof(numbers))
console.log(typeof(person))
console.log(typeof(greet))

//Type Conversion
let numString="100"
let convertedNumber=Number(numString)
console.log(convertedNumber)
console.log(typeof(convertedNumber))

let number=100
let convertedString=String(number)
console.log(convertedString)
console.log(typeof(convertedString))

let text="true"
let convertedBoolean=Boolean(text)
console.log(convertedBoolean)
console.log(typeof(convertedBoolean))

//Type Coercion
let x=10
let y="20"

console.log(x+y)
console.log(x*y)
console.log(x==y)

//Operators
//Arithmetic Operators
let num1=20
let num2=10
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)
console.log(num1**num2)

//Assignment Operators
let value1=10
value1+=5
console.log(value1)

value1-=3
console.log(value1)

value1*=2
console.log(value1)

value1/=4
console.log(value1)

//Comparison Operators
let a=10
let b=20

console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

//Logical Operators
let marks=80
let attendance=90

console.log(marks>50&&attendance>75)
console.log(marks>90||attendance>75)
console.log(!(marks>50))

//Template Literals
let studentName="Girish"
let studentAge=25

let message=`My name is ${studentName} and my age is ${studentAge}`
console.log(message)