//iterators
console.log("iterators")
const fruits = ["Apple", "Banana", "Mango"]
const iterator = fruits[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())