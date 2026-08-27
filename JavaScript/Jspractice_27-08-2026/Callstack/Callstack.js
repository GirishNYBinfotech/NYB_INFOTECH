function one(){
    console.log("one function")
    two()
}
function two(){
    console.log("two function")
    three()
}
function three(){
    console.log("three function")
}
one()