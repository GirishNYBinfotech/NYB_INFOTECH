//Error Handling
try{
    let a=10
    let b=0
    function div(){
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        console.log(a/b)
    }
    div()
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("done")
}

//fetching the data
async function users(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error("Give the URL correctly")
        }
        let data= await response.json()
        console.log(data)
        
    }
    catch(error){
        console.log(error.message)
    }
    finally{
        console.log("Api request done")
    }
}
users()