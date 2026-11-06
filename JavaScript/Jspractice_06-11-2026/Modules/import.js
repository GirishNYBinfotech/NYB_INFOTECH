//Imports
//default imports
import greet from "./Export.js"
greet("girish")
greet("king")
greet("Queen")

//named imports
import {add,sub,mul} from "./Export.js"
console.log(add(5,6))
console.log(add(100,30))
console.log(sub(220,400))
console.log(sub(250,100))
console.log(mul(20,100))
console.log(mul(220,40))