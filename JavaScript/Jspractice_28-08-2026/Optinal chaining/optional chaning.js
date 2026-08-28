let a={
    name:"girish",
    loc:"Hyd",
    age:null
}
console.log(a.name)
console.log(a.age?.date)


//nullish coalesing
let num
let res=num??10
console.log(res)

let x={
    add:null
}
let x1=x.add??"hyd"
console.log(x1)

const y={
    a1:20,
    y1:{a2:0}
    
}
let y2=y.y1?.a2??20
console.log(y2)
