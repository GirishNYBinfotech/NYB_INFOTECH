//creating array
let a=new Array
a[0]=1
a[1]=2
a[4]=3
a[3]=4
console.log(a)

let b=[10,20,30,40,"hello",'hai',10,[20,30,1,2]]
console.log(b[0])
console.log(b[2])
console.log(b[7][0])

//Destructuring
let [a1,b1,c1,d1,e1,f1,g1,[q1,w1,r1,t1]]=b
console.log(a1)
console.log(e1)
console.log(g1)
console.log(t1)
console.log(w1)

//arraymethods
//push
b.push("new element")
console.log(b)

//pop
b.pop()
console.log(b)

//unshift
b.unshift("first element")
console.log(b)

//shift
b.shift()
console.log(b)

//includes
console.log(b.includes("hello"))
console.log(b.includes(100))
console.log(b.includes("java"))

//indexOf
console.log(b.indexOf(10))
console.log(b.indexOf("hello"))
console.log(b.indexOf(40))

//lastIndexOf
console.log(b.lastIndexOf(10))
console.log(b.lastIndexOf(20))
console.log(b.lastIndexOf(1))

//find
console.log(b.find(x=>x>20))
console.log(b.find(x=>x>10))

//findIndex
console.log(b.findIndex(x=>x===20))
console.log(b.findIndex(x=>x>10))

//filter
console.log(b.filter(x=>x%2===0))
console.log(b.filter(x=>x>20))

//slice
console.log(b.slice(2,5))
console.log(b.slice(0,7))

//splice
// b.splice(0,3,"hai")
// console.log(b)
b.splice(4,0,"added")
console.log(b)

//forEach
b.forEach(y=>console.log(y))

//for of
for(let x of b){
    console.log(x)
}

//map
console.log(b.map(y=>y*2))

//reduce
console.log(b.reduce((x,y)=>x+y,0))

//concat
let y1=[1,2,3,4,5]
console.log(b.concat(y1))

//join
let z=b.join()
console.log(z)
console.log(typeof(z))

//some
console.log(b.some(x=>x>20))
console.log(b.some(y=>y>40))

//every
console.log(y1.every(x=>x>=1))
console.log(b.every(y=>y>20))

//sort
console.log(b.sort())
console.log(b.sort((a,b)=>a-b))
console.log(b.sort((a,b)=>b-a))

//flattning arrarys
let f=[1,2,3,[4,5,6,[3,4,5,6]]]
let flatting=f.flat(Infinity)
console.log(flatting)

//removing duplicates 
let xy=new Set(b)
console.log(xy)

let xyz=b.filter((value,index)=>{
    return b.indexOf(value)===index
})
console.log(xyz)