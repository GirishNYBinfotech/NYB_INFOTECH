//promise 
let p=new Promise((resolve,reject)=>{
    resolve("resolved")
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

//resolve/reject
let p1 = new Promise((resolve, reject) => {
    let success=true
    if (success){
        resolve("Promise Resolved Successfully")
    } 
    else{
        reject("Promise Rejected")
    }
})
p1.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log("Promise Completed")
})

//promise chaining
let p2= new Promise((resolve) => {
    resolve(10)
})
p2.then((res)=>{
    console.log(res)
    return res*2
})
.then((res)=>{
    console.log(res)
    return res*3
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})