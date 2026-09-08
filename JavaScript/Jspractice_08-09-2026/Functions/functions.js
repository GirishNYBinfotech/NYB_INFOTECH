//function decleration
function newerfun(){
    console.log("function decleration successful")
}
newerfun()

//function expression
//named function
let a=function named(){
    console.log('named function printed')
}
a()

//arrow function
let b=()=>{
    console.log("arrow function printed")
}

//anoymous function
let c=function (){
    console.log("anoymous function printed")
}

//arguments and parameters
function hello(x=10){
    console.log(x)
}
hello()

//argument
let aa=(y)=>{
    console.log(y)
}
aa("hai")

function PandA(a=100){
    console.log(a)
}
PandA(a=200)


//Rest parameter
function newer(...xy){
    console.log(xy)
}
newer(1,2,3,4,5)

//Arguments Object
function arg(){
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments[3])
}
arg(1,2,3,4,5,5)

//Recursive Functions
function countDown(n) {
    if (n===0){
        return
    }
    console.log(n)
    countDown(n-1)
}
countDown(5)

function sum(n){
    if(n===0){
        return 0
    }
    return n + sum(n - 1)
}
console.log(sum(5))

//callback function
function greet(name, callback){
    console.log("Hello "+name)
    callback()
}
function sayBye() {
    console.log("Goodbye!")
}
greet("girish", sayBye)

function yz(name){
    console.log(name)
}
function ab(callback){
    console.log("hai")
    console.log("girish")
}
ab(yz)