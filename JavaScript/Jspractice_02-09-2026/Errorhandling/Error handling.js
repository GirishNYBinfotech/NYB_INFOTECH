try{
    age=12
    if(age>18){
        console.log("yu are eligible")
    }
    else{
        throw new Error("age must be above 18")
    }
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("finally block printed")
}