console.log("1");
queueMicrotask(() => {
    console.log("2 - Microtask")
})
console.log("3")
setTimeout(() => {
    console.log("4 - Macrotask")
}, 0)
console.log("5")