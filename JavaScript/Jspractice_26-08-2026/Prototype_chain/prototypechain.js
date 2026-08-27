const person = {
  greet() {
    console.log("Hello!")
  }
}
const student={
  name:"Alice"
}
Object.setPrototypeOf(student, person)
console.log(student.name)
student.greet()

//
const grandparent={a:1}
const parent={b:2}
const child={c:3}
parent.__proto__=grandparent
child.__proto__=parent
console.log(child.a)
console.log(child.b)
console.log(child.c)