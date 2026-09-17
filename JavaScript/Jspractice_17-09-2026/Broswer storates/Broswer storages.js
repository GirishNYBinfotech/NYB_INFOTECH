//Broswer Storage
//session storage
sessionStorage.clear()
sessionStorage.setItem("hello",true)
sessionStorage.setItem("entered",false)
sessionStorage.setItem("null","nul")
sessionStorage.setItem("given","Not given")
sessionStorage.setItem("loggedIn","yes")
console.log(sessionStorage.getItem("hello"))
console.log(sessionStorage.getItem("entered"))
console.log(sessionStorage.getItem("null"))
console.log(sessionStorage.getItem("given"))
console.log(sessionStorage.getItem("loggedIn"))
sessionStorage.removeItem("hello")
sessionStorage.removeItem("null")
console.log(sessionStorage.key(1))
console.log(sessionStorage.key(2))
console.log(sessionStorage.key(0))

//local storage
localStorage.clear()
localStorage.setItem("local","local")
localStorage.setItem("hello","done")
localStorage.setItem("hai","notdone")
localStorage.setItem("locally","accected")
console.log(localStorage.getItem("local"))
console.log(localStorage.getItem("hello"))
console.log(localStorage.getItem("hai"))
console.log(localStorage.getItem("locally"))
localStorage.removeItem("locally")
console.log(localStorage.key(0))
console.log(localStorage.key(1))
console.log(localStorage.key(2))


//jSON.stringify
let a={
    name:"girish"
    ,id:101
    ,Number:10293874
}
let a1=JSON.stringify(a)
console.log(a)
console.log(a1)

let b=[1,3,2,4,5,6,["hello","hai",2]]
let b1=JSON.stringify(b)
console.log(b1)
console.log(b)

//JSON.parse
let c=`{"name":"King","number":123}`
let c1=JSON.parse(c)
console.log(c1)

let d=`[1,"hai","new","no"]`
let d1=JSON.parse(d)
console.log(d1)


//data persistence
const user={
  name: "Girish",
  age: 25,
  city: "Hyderabad"
}
localStorage.setItem("user", JSON.stringify(user))

const data=localStorage.getItem("user")
const userData=JSON.parse(data)
console.log(userData.name)
console.log(userData.city)
console.log(userData.age)