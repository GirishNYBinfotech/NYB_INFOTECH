//objects
let obj={
    id:101,
    name:"Girish",
    add:{
        loc1:"HYD",
        loc2:"BNGLR"
    }
}
console.log(obj)
console.log(obj.name)
console.log(obj.add.loc2)
console.log(obj.add.loc1)

//object Destructuring
let name1=obj.name
let id1=obj.id
let loc11=obj.add.loc1
let loc22=obj.add.loc2
console.log(id1)
console.log(name1)
console.log(loc22)
console.log(loc11)
//(or)
let {id,name,add:{loc1,loc2}}=obj
console.log(id)
console.log(name)
console.log(loc1)
console.log(loc2)