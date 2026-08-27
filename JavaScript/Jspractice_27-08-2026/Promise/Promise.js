let a=new Promise((resolve,reject)=>{
    let success=false
    if(success){
       resolve("operation done")
    }
    else{
        reject("operation unsuccessfull")
    }
})
a.then((come)=>{
    console.log(come)
})
.catch((error)=>{
    console.log(error)
})