//Spread 
let fruits=["apple","bananna","mango"]
let newfruit=[...fruits,"orange"]
console.log(newfruit)

//rest 
function a(...numbers){
    console.log(numbers)
}
a(4,5,6,7,8,9,10)