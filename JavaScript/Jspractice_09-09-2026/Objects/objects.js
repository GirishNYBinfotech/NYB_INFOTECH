let obj=new Object
obj.name="girish"
obj.id=121
obj.loc="HYD"
console.log(obj)

let obj1={
    address:"hitech city",
    country:"India",
    capitals:{
         capital:"Delhi",
         capital2:"Chennai"
    }
}

obj1.capitals.capital="New Delhi"
console.log(obj1)
console.log(obj1.address)
console.log(obj1["country"])

//Destructuring
let {address,country,capitals:{capital,capital2}}=obj1
console.log(capital)
console.log(country)
console.log(capital2)
console.log(address)

//object methods
//Object.keys
console.log(Object.keys(obj1))
console.log(Object.keys(obj1.capitals))

//Object.values
console.log(Object.values(obj1))
console.log(Object.values(obj1.capitals))

//Object.assign
console.log(Object.assign(obj,obj1))

//object.entries
console.log(Object.entries(obj1))
console.log(Object.entries(obj))

//copying of objects
//normal copy
//Changes to OBJ will affect obj1
console.log("Normal copy")
let OBJ=obj1
console.log("OBJ",OBJ)
OBJ.address="new address"
OBJ.capitals.capital="Delhi"
console.log("updated OBJ",OBJ)
console.log("obj1",obj1)

//shallow copy
////if any changes in new copied object it will not change in orginal object also.
//here we change the nested copied object but it orginal object also will be changed
console.log("shallow copy")
let OBJ1={...obj1}
console.log("OBJ1",OBJ1)
OBJ1.address="HI Tech City"
OBJ1.capitals.capital="new Delhi"
console.log("updated OBJ1",OBJ1)
console.log("obj1",obj1)


//deep copy
//if any changes iddone it will not effect to orginal object
//here we can change the nested object it will not effect to orginal object
console.log("deep copy")
// let OBJ2=structuredClone(obj1)
let OBJ2=JSON.parse(JSON.stringify(obj1))
console.log("OBJ2",OBJ2)
OBJ2.address="Tirupati"
OBJ2.capitals.capital="delhi"
console.log("Updated OBJ2",OBJ2)
console.log("obj1",obj1)