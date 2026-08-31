let arr=[1,2,3,4,"hello","hai",1,2,3,4,30,40,10,20,"a"]
console.log(arr)
console.log("push")
arr.push(20)
console.log(arr)

console.log("pop")
arr.pop()
console.log(arr)

console.log("unshift")
arr.unshift(10)
console.log(arr)

console.log("shift")
arr.shift()
console.log(arr)

// console.log("slice")
// console.log(arr.slice(1,4))

// console.log("splice")
// arr.splice(2,4)
//  console.log(arr)
// arr.splice(2,0,"hello2")
// console.log(arr)
// arr.splice(3,3,"hello3")
// console.log(arr)

console.log("indexOf")
console.log(arr.indexOf("hello"))

console.log("lastindexOf")
console.log(arr.lastIndexOf(4))

console.log("includes")
console.log(arr.includes(10))

console.log("find")
console.log(arr.find(x=>x>3))

console.log("findIndex")
console.log(arr.findIndex(x=>x>2))

console.log("filter")
console.log(arr.filter(x=>x>2))

console.log("map")
console.log(arr.map(x=>x+2))

console.log("some")
console.log(arr.some(x=>x>10))

console.log("every")
console.log(arr.every(x=>x>0))

console.log("reverse")
console.log(arr.reverse())

console.log("sort")
console.log(arr.sort())
console.log(arr.sort((a,b)=>a-b))
console.log(arr.sort((a,b)=>b-a))

console.log("join")
let a=arr.join()
console.log(a)
console.log(typeof(a))

console.log("forEach")
arr.forEach(x=>console.log(x))

let arr1=[10,20,30]
console.log("concat")
console.log(arr.concat(arr1))

console.log("reduse")
console.log(arr.reduce((x,y)=>x+y,0))
