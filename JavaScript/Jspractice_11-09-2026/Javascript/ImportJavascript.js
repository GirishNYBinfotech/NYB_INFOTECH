//default import
import add from "./exportJavascript.js"
console.log(add(10,20))

//named import
import {greet,sub,mul} from "./exportJavascript.js"

console.log(mul(30,4))
console.log(sub(56,45))
greet()

//Iterators
let a=[10,20,30,40]
let iterator=a[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//generators
function* generator(){
    yield 10
    yield 20
    yield 30
}
let gen=generator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//class and object
class Person {
  constructor(name,age) {
    this.name=name
    this.age=age
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}
//object
const person1=new Person("Girish",25)
const person2=new Person("King",30)
console.log(person1.name)
console.log(person1.age)
person1.greet()

//prototype
function Per(name) {
  this.name=name
}
Per.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.name)
}
const person11=new Per("King")
const person22=new Per("queen")
person11.sayHello()
person22.sayHello()

