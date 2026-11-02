//Global scope
console.log("global scope:")
let name = "Girish"
function display() {
    console.log(name)
}
function show() {
    console.log(name)
}
display()
show()
console.log(name)

//blockscope
console.log("block scope:")
{
    let bname="King"
    const bage=25
    console.log(bname)
    console.log(bage)
}
// console.log(bname)
// console.log(bage)

//function scope
console.log("function scope:")
function myFunction() {
    var fage = 25
    let fcity = "Hyderabad"
    const fcountry = "India"
    console.log(fage)
    console.log(fcity)
    console.log(fcountry)
}
myFunction()
// console.log(fage)
// console.log(fcity)

//Global scope
let one="one"
//block scope
{
    let two="two"
//function scope
    function scope(){
        three="three"
        console.log("function scope",three)
    }
    scope()
    console.log(two)
    console.log(one)
}
console.log("globalscope:",one)
// console.log("blockscope:",two)
// console.log("function:",three)