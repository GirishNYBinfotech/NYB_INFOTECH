//callback function
function call(x,y,callback){
    callback(x+y)
}
function sec(result){
    console.log("sum "+result)
}
call(10,20,sec)

function nam(name){
    console.log("hai "+ name)
}
function c(callback){
    callback("King")
}
c(nam)