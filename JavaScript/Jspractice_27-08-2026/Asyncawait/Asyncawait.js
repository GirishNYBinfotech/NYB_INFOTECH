function getuser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello")
        },2000)
    })
}
async function user(){
    console.log("loding...")
    let data= await getuser()
    console.log(data)
}
user()