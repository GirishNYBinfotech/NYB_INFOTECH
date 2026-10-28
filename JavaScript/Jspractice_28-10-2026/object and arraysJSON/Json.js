//JSON.stringify()
//object
const employee = {
  id: 101,
  name: "Rahul",
  salary: 25000
};
//object to string
const jsonData = JSON.stringify(employee);
console.log(jsonData)
console.log(typeof jsonData)
//storing the object in local storage
localStorage.setItem("employee",JSON.stringify(employee))
let emp=JSON.parse(localStorage.getItem("employee"))
console.log(emp)

//Array
const fruits = ["Apple", "Banana", "Mango"]
//arrays to string
const jsonData1= JSON.stringify(fruits)
console.log(jsonData1)
console.log(typeof jsonData1)
//storing the array in localstorage
localStorage.setItem("fruits",JSON.stringify(fruits))
var f=JSON.parse(localStorage.getItem("fruits"))
console.log(f)

//JSON.parse()
const jsonData2 = '{"id":101,"name":"Rahul","salary":25000}';
//string to object
const employee2 = JSON.parse(jsonData2)
console.log(employee2)
console.log(employee2.name)
console.log(typeof employee2)

//Arrays
const jsonData3 = '["Apple","Banana","Mango"]';
//string to array
const fruits1 = JSON.parse(jsonData3);
console.log(fruits1);
console.log(fruits1[0]);
console.log(Array.isArray(fruits1));