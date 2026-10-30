//Deep copy()
console.log("Deep copy")
let o={
    one:1,
    Two:2,
    three:{
        four:4,
        five:5
    }
}
let co=structuredClone(o)
console.log("original object:" ,o)
co.one="one"
co.three.four="four"
console.log("updated nested object:", co)
