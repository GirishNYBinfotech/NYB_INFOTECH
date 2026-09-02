let a={"name":"girish","id":2}
let a1=a
console.log(a1.name)
console.log(a1.id)
console.log(a1)

let b=`["hello","hai","read",1,2,3]`
let b1=JSON.parse(b)
console.log(b1)

const jsonUsers=`[
  {"name":"Girish","age":25},
  {"name":"Rahul","age":26},
  {"name":"John","age":24}
]`
const users=JSON.parse(jsonUsers)
console.log(users[0].name)
console.log(users[1].name)
console.log(users[2].age)
console.log(users[1].age)