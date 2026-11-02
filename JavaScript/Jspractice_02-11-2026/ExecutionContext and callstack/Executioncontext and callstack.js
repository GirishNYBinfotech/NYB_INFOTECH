var name = "Girish";
var age = 25;
function greet() {
    var message = "Hello";
    console.log(message);
    console.log(name);
}
greet()

// execution flow
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()

//sum
var a = 10
function first() {
    var b = 20
    function second() {
        var c = 30
        console.log("sum:",a + b + c)
    }
    second()
}
first()

//shopping
console.log("Website Started")
// Global Execution Context
function login() {
    console.log("User Login")
    addToCart()
}

function addToCart() {
    console.log("Product Added to Cart")
    makePayment()
}

function makePayment() {
    console.log("Payment Processing")
    paymentSuccess()
}
function paymentSuccess() {
    console.log("Payment Successful")
}
// Function calls
login()
console.log("Continue Shopping")