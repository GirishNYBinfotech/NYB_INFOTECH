//Shallow copy()
console.log("Shallow copy")
let obj={
    name:"girish",
    loc:"HYD",
    address:{
        ad1:"Banglore",
        ad2:"chennai"
    }
}

let cobj={...obj}
console.log(cobj)
cobj.name="King"
cobj.address.ad1="HYD"
console.log("updated nested obj:",cobj)
console.log("orginal obj:" , obj)