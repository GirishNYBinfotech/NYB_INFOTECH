//named export
export function greet(name){
    console.log("hello",name)
}

export function add(x,y){
    return x+y
}

//default export 
export default function timer(){
    setTimeout(()=>{
        console.log("timer stopped")
    },1000)
}