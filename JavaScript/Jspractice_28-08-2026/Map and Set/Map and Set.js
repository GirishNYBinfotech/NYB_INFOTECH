//Map
let m=new Map()
m.set("name","Girish")
m.set("loc","hyd")
console.log(m.get("name"))
console.log(m.get("loc"))

//WeakMap
const userData=new WeakMap()
let user={ name:"King"}
userData.set(user,{age:25})
console.log(userData.get(user))

//Set
let set=new Set()
set.add(20)
set.add(30)
set.add(40)
set.add(20)
console.log(set)

//WeakSet
const visited=new WeakSet()
let obj={id:1}
visited.add(obj)
console.log(visited.has(obj))