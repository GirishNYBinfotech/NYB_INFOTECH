//default import 
import add from "./exports.js"
console.log(add(10,5))

//named import
import {sub,greet} from "./exports.js"
console.log(sub(1234,9876))
greet("girish")

import {time} from "./exports.js"
time()