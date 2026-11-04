//callback
function greet(name) {
    console.log("Hello " + name)
}

function user(callback) {
    let name = "Girish"
    callback(name);
}
user(greet)

function add(a, b, callback) {
    let result = a + b
    callback(result)
}
function display(value) {
    console.log("Addition is:", value)
}
add(10, 20, display)

//callbackhell
function getUser(callback) {
    setTimeout(() => {
        console.log("1.User details received")
        callback()
    },1000)
}
function getProducts(callback) {
    setTimeout(() => {
        console.log("2.Products received")
        callback()
    },1000)
}

function placeOrder(callback) {
    setTimeout(() => {
        console.log("3.Order placed")
        callback()
    },1000)
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("4.Payment successful")
        callback()
    },1000)
}
// Callback Hell
getUser(function (){
    getProducts(function (){
        placeOrder(function (){
            makePayment(function (){
                console.log("5.Process completed")
            })
        })
    })
})