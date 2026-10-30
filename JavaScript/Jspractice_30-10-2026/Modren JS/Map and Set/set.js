//Set()
console.log("Set()")
let set=new Set()
set.add(10)
set.add(20)
set.add(10)
set.add(40)
console.log(set)
console.log(set.has(10))
set.delete(10)
console.log(set)

const numbers = [10, 20, 10, 30, 20, 40]
const uniqueNumbers = [...new Set(numbers)]
console.log(uniqueNumbers)

//WeakSet()
console.log("weakSet()")
let user1={ name: "Rahul"}
let user2={ name: "King"}
const weakSet = new WeakSet()
weakSet.add(user1)
weakSet.add(user2)
console.log(weakSet)
console.log(weakSet.has(user1))
weakSet.delete(user1)
console.log(weakSet.has(user1))