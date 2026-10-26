var globalVar=" global scope";

function example() {
    var functionVar = " function-scoped";
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block:", a)
        console.log("Inside block:", b)
        console.log("Inside block:", c)
    }

    console.log("Function scope:", a); 
    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError

    console.log("Function variable:", functionVar);
}

example()
console.log("Global scope:", globalVar)
// console.log(functionVar); // ReferenceError
// console.log(a); // ReferenceError
