//iterator()
console.log("iterator")
let i=[20,30,"hello","hai"]
let iterator=i[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
