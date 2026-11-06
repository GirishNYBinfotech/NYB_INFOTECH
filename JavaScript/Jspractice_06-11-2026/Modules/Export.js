//Exports
//default exports
function greet(name){
    console.log("hello ",name)
}
export default greet

//named export
export function add(a,b){
    return a+b
}

export function sub(x,y){
    return x-y
}

export function mul(m,n){
    return m*n
}