//array destructuring
let alpha=['a','b','c','d','e']
let A=alpha[0]
let B=alpha[1]
let C=alpha[2]
let D=alpha[3]
console.log(A)
console.log(B)
console.log(C)
console.log(D)

let user=["girish",25,"hyd"]
let [name,age,loc]=user
console.log(name)
console.log(age)
console.log(loc)


//object destructuring
let obj={
    name:"king",
    name2:"queen",
    obj1:{name3:"alpha"}
}
let x=obj.name
let y=obj.name2
let z=obj.obj1.name3

console.log(x)
console.log(y)
console.log(z)


//Template literals
let company="Nyb infotech"
let Location="hyd"
console.log(`currently i am working in ${company} company in the ${Location} location`)