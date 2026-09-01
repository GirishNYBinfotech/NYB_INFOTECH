let obj={
    name:"girish",
    loc:"hyd",
    numb:1234,
    obj1:{
        name1:"king",
        loc1:"Bnglr",
        obj3:{
            name3:"queen",
            loc3:"chennai"
        }
    }
}
//Accessing the objects
console.log(obj.name)
console.log(obj.numb)
console.log(obj.obj1.name1)
console.log(obj.obj1.loc1)
console.log(obj.obj1.obj3.loc3)
console.log(obj.obj1.obj3.name3)

//Destructuring of objects
let {name,loc,numb,obj1}=obj
console.log(name)
console.log(numb)
let {name1,loc1,obj3}=obj1
console.log(name1)
console.log(loc1)
let {name3,loc3}=obj3
console.log(name3)
console.log(loc3)

let all={
    a:"A",
    b:"B",
    
}
let {a,b}=all
console.log(all.a)

all.email="girish@gmai.com"
console.log(all)
all.a="c"
delete all.a
console.log(all)