//passing a function as argument
function hof(name){
    console.log("hai "+ name)
}
function hello(callback){
    callback('girish')
}
hello(hof)

//enhanced function
function ef(x){
    return function(y){
        console.log(x*y)
    }
}
let result=ef(5)
result(20)