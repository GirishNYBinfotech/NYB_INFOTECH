//Objects
let obj1=new Object
obj1.two=2
obj1.one=1
obj1.three=3
console.log(obj1)

let obj={
    id:111,
    name:"King",
    location:{
        loc:"HYD",
        country:"India",
        number:94057768
    }
}
console.log(obj.name)
console.log(obj["id"])
console.log(obj["location"]["loc"])
obj.name="girish"
obj.id=222
obj.location.number=987654321
obj.location.country='USA'
obj.location.country2="China"
obj.location.number2=102030405
console.log(obj)

//object methods
//object.keys
console.log(Object.keys(obj1))
console.log(Object.keys(obj))

//object.values
console.log(Object.values(obj))
console.log(Object.values(obj1))

//object.enteries
console.log(Object.entries(obj))
console.log(Object.entries(obj1))

//assign
Object.assign(obj1,obj)
console.log(obj1)

//object Destructuring
let {id,name,location:{loc,country,number}}=obj
console.log(country)
console.log(id)
console.log(name)
console.log(number)
console.log(loc)

//spread operator
let a=[22,3,3,444,55]
let a1=[...a,"newone"]
console.log(a1)

let names={
    name:"king",
    name2:"queen"
}
let names1={...names,nmae3:"rahul"}
console.log(names1)

//rest operator
let newdata=(...data)=>{
    console.log(data)
}
newdata(10,"hello","hai",2,3,4)

let obj2={
    id1:123,
    name:"rahul",
    loc:"Chennai"
}
var {id1,...details}=obj2
console.log(obj2)

//copying of objects
//shallow copy
console.log("shallow copy")
let ob={
    id:101,
    name:"Girish",
    con:{
        country:"India",
        capital:"Delhi"
    }
}
console.log(ob)
let obj3={...ob}
obj3.id=100
obj3.con.capital="NewDelhi"
console.log(obj3)
console.log(ob)

//deep copy
console.log("deep copy")
let ob1={
    id:1022,
    name:"King",
    num:{
        Number:12345
    }
}
//let obj4=structuredClone(ob1)
let obj4=JSON.parse(JSON.stringify(ob1))
obj4.name="queen"
obj4.num.Number=54321
console.log(ob1)
console.log(obj4)
console.log(ob1)

//filter and grouping
const employees=[
    { name:"Girish",department:"IT",salary:50000 },
    { name:"Rahul",department:"HR",salary:40000 },
    { name:"Anil",department:"IT",salary:60000 },
    { name:"King",department:"IT",salary:55000 },
    { name:"Queen",department:"HR",salary:45000 }]

const highSalaryEmployees=employees.filter(employee => {
    return employee.salary>50000
})

console.log("High Salary Employees:")
console.log(highSalaryEmployees)
const groupedEmployees=Object.groupBy(employees,employee=>employee.department)

console.log("Employees by Department:")
console.log(groupedEmployees)

//objecct to arrays
let o={
    one:"ONE",
    two:"TWO",
    three:"THREE",
    four:"FOUR"
}
console.log(Object.entries(o))

//arrays to object
const arr=[
    ["name","Girish"],
    ["age",25],
    ["city","HYD"]
]
console.log(Object.fromEntries(arr))

//active employees
const employeess = [
  {
    id: 1,
    name: "Girish",
    salary: 40000,
    active: true
  },{
    id: 2,
    name: "Rahul",
    salary: 25000,
    active: false
  },{
    id: 3,
    name: "King",
    salary: 35000,
    active: true
  },{
    id: 4,
    name: "John",
    salary: 28000,
    active: true
  }
]
const result=employeess
  .filter(employee=>employee.active && employee.salary > 30000)
  .map(employee=>employee.name.toUpperCase())
console.log(result)

//sum of all numbers
const numbers=[10, 20, 30, 40]
let sum = 0
for (let num of numbers) {
    sum +=num
}
console.log(sum)

//employee names
const emp = [
    { name: "Girish", age: 25 },
    { name: "Ravi", age: 30 },
    { name: "Anil", age: 28 }
]
const Names=emp.map(emp => emp.name)
console.log(Names)

//total salary
const emp1= [
    { name: "Girish", salary: 60000 },
    { name: "Ravi", salary: 45000 },
    { name: "Anil", salary: 70000 }
]
const totalSalary = emp1.reduce((total, emp) => total + emp.salary,0)
console.log(totalSalary)

const numbers1= [2, 4, 6, 8, 5, 3, 7]
for (let i = 0; i < numbers1.length; i++) {
    for (let j = i + 1; j < numbers1.length; j++) {
        if (numbers1[i]+numbers1[j]===10) {
            console.log(numbers1[i], numbers1[j])
        }
    }
}