try{
    let success=false
    if(success){
        console.log("done")
    }
    else{
        throw new Error("success failed")
    }
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("finally block executed")
}