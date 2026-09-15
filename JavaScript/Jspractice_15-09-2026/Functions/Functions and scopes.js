//function decleration
function add(a,b){
    console.log(a+b)
}
add(100,400)

//function Expression
//named function
let a=function hello(){
    console.log("hello function printed")
}
a()

//arrow function
let b=()=>{
    console.log("arrow function done")
}
b()

function hello1(){
    console.log("normal function")
}
hello1()


// let b1=()=>{
//     console.log("hello1 converted to arrow function")
// }
// b1()

let b1=()=>console.log("hello1 converted to arrow function")
b1()

// Anonymous Functions
let c=function (){
    console.log("Anonymous Functions printed")
}
c()

//callback function
function greet(name){
    console.log("Hello "+ name)
}
function greeted(callback){
    callback("girish")
}
greeted(greet)

function placeOrder(product, callback) {
    console.log("Placing order for:", product)
    setTimeout(function (){
        console.log("Order processing completed")
        callback()
    },2000)
}
function showSuccessMessage() {
    console.log("Order placed successfully!")
}
placeOrder("Laptop", showSuccessMessage)


//HOF(Higher Order Function)
//taking fuction as an argument
function ope(a,b,operation){
return operation(a,b)
}
function sub(x,y){
    return x-y
}
console.log(ope(300,94,sub))

//returning another function
function mul(x){
    return function (y){
        return x*y
    }
}
var multipleBy=mul(10)
console.log(multipleBy(200))

//Default parameters
function calculate(a=10,b=4){
    return a+b
}
console.log(calculate())


//Rest parameters
function rest(...x){
    console.log(x)
}
rest(10,20,30,40,50,10,20)

//arguments object
function x(){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[4])
    console.log(arguments[5])
     console.log(arguments)
}
x(1,2,3,4,true,"hello")


//scope
//global scope
let age=18
function neededage(){
    console.log(age)
}
neededage()
console.log(age)

//functional scope
function fs(){
    var aa=10
    console.log(aa)
}
fs()
// console.log(aa)

//block scope
{
    let aa1=100
    console.log(aa1)
}
// console.log(aa1)

//lexical scope
let l=150

function test() {
    let l1=20
    console.log(l)
    console.log(l1)
}
test()
console.log(l)
// console.log(l1)

//clousers
function outer(){
    let count=0
    function inner() {
        count++
        console.log(count)
    }
    return inner
}
const counter=outer()
counter()
counter()
counter()

//variable decleration
//var
//let
//const

//decleration of variable
var x1=10
let x2=20
const x3=40
console.log(x1)
console.log(x2)
console.log(x3)

//Redeclaration
var v=1
var v=2

let ll=1
// let ll=12

const cc=10
// const cc=20

//reassignment
var age1=20
age1=25
let salary=30000
salary=40000

console.log(age)
console.log(salary)

const country="India"
// country="USA"
console.log(country)

//block scope
if (true) {
    var ab=10
    let bc=20
    const cd=30
}

console.log(ab)
// console.log(bc)
// console.log(cd)

//hosting 
console.log(ha)

var ha=10
console.log(ha)

// console.log(hb)
let hb=100
console.log(hb)

// console.log(hc)
const hc=20
console.log(hc)

//IIFE
;(function greet1(){
    console.log("hello girish")
})()

;(function hai(){
    console.log("hai is printed")
})()


//function
function addNumbers(aa,bb){
    return aa+bb
}
console.log(addNumbers(10,20))
console.log(addNumbers(5,7))


let xy=10
function test1() {
    let xy=250
    console.log(xy)
}
test1()
console.log(xy)

// total price
function calculateTotal(price, quantity) {
    return price * quantity;
}
let total1 = calculateTotal(500,2)
console.log("Customer1 Total:", total1)
let total2 = calculateTotal(1000, 3)
console.log("Customer2 Total:", total2)

//login
function validateLogin(username, password) {
    if (username==="Girish"&&password==="1234"){
        return "Login successful"
    }
    return "Invalid username or password"
}
console.log(validateLogin("Girish", "1234"))


//payment
const payByCard = function(amount) {
    return "Paid Rs"+amount+" using Card"
}
const payByUPI = function(amount) {
    return "Paid Rs"+amount+" using UPI"
}
console.log(payByCard(1000))
console.log(payByUPI(500))