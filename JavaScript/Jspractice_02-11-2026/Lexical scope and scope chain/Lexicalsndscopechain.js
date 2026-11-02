//Lexical scope
let name1="King"
function outter(){
    name2="Queen"
    console.log(name2)
    function inner(){
        name3="Girish"
        console.log(name3)
    }
    inner()
}
outter()
console.log(name1)

//scope chain
let a = 10
function outerFunction() {
    let b = 20
    function innerFunction() {
        let c = 30
        console.log(c)
        console.log(b)
        console.log(a)
    }
    innerFunction()
}
outerFunction()

//e-commerce
// Global Scope
let websiteName="Amazon"
function shoppingCart(){
    let customerName = "Rahul"
    function checkout() {
        let totalAmount = 5000
        function payment() {
            let paymentMode = "UPI"
            console.log("Website:", websiteName)
            console.log("Customer:", customerName)
            console.log("Total Amount:", totalAmount)
            console.log("Payment Mode:", paymentMode)
        }
        payment()
    }
    checkout()
}
shoppingCart()