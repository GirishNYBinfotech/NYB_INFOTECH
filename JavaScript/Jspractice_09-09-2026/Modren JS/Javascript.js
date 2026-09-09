//spread operator
let a=[10,3,56,"hello","hai"]
console.log(a)
let b=[...a,"newly added","added"]
console.log(b)
let c=[a,...b]
console.log(c)

let user={
    name:"Girish",
    age:25
};
let user2={...user}

console.log(user2);
// { name: "Girish", age: 25 }

//rest operator
let d1=(...d)=>{
    console.log(d)
}
d1("girish","hai",192,98)

let user1={
    name1:"Girish",
    age1:25,
    city1:"Vijayawada"
}
let {name1,...otherDetails}=user1
console.log(name)
console.log(otherDetails)

//optical chaining
const x=null
// console.log(x.name)
console.log(x?.name)
const user3= {
    name3: "Girish",
    address3: {
        city3: "Vijayawada"
    }
}
console.log(user3?.address3?.city3)
console.log(user3?.address3?.city3?.loc)


//Nullish coalesling
const username=null
console.log(username??"Guest")

const user4= {
    name4: "king"
}
const city = user?.address?.city ?? "Unknown"
console.log(city)