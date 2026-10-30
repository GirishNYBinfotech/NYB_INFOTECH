//name imports
import {add,greet} from "./Export.js"
console.log(add(123,456))
console.log(add(200,50))
console.log(add(500,420))
greet("King")
greet("Queen")
greet("Rahul")

//default import
import timer from "./Export.js"
timer()