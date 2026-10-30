//genrator()
console.log("genrator")
function* g(){
    yield 20
    yield "hai"
    yield "new"
}
let y=g()
console.log(y.next())
console.log(y.next())
console.log(y.next())
console.log(y.next())
console.log(y.next())
