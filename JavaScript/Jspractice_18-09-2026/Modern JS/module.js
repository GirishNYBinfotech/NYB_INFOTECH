//export
//default export
function names(){
    console.log("names exported")
}
export default names

//named export
export function adds(a,b){
    return a+b
}

export function subs(x,y){
    return x-y
} 

export function greets(){
    console.log("greated successfull")
}