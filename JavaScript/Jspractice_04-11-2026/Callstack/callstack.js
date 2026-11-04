//callstack
function first() {
    console.log("First")
    second()
}
function second() {
    console.log("Second")
    third()
}

function third() {
    console.log("Third")
}
first()

//Callback queue
console.log("A")

setTimeout(() => {
    console.log("B")
}, 0)

Promise.resolve().then(() => {
    console.log("C")
})
console.log("D")