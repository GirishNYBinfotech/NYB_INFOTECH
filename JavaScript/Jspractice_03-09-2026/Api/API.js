fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    if(!response.ok){
        throw new Error("unable to fetch the data")
    }
    return response.json()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error.message)
})

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        id:101,
        name:"Girish",
        loc:"HYD"
    })
})
.then(response=>response.json())
.then(data=>{
    console.log(data)
   
})
.catch(error=>{
    console.log(error)
})

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"PUT",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        id:102,
        name:"King"
    })
})
.then(response=>response.json())
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"PATCH",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        id:102,
        name:"queen"
    })
})
.then(response=>response.json())
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"DELETE",
})
    .then(response => {
    if (!response.ok) {
        throw new Error("Delete failed")
    }
    console.log("User deleted successfully")
})
.catch(error=>{
    console.log(error)
})