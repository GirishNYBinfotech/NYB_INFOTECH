//default exports
function add(a,b){
    return a+b
}
export default add

//named exports
export function sub(x,y){
    return x-y
}

export function greet(name){
    console.log("hello" + name)
}

export function time(){
    setTimeout(()=>{
        console.log("export to import")
    },2000)
}