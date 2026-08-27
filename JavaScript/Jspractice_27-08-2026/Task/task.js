setTimeout(()=>{
    console.log("output of setTimeout")
},2000)

let a=new Promise((resolve)=>{
    resolve("done")
    reject("not done")
})
.then((result)=>{
console.log(result)
})
.catch((error)=>{
    console.log(error)
})

async function user(){
    console.log("async fuction")
    await Promise.resolve()
    console.log("after await")
}
user()