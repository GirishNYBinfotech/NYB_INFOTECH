var loading=document.getElementById("loading")
let error=document.getElementById("error")
let userContainer=document.getElementById("userContainer")

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
     if(!response.ok) {
        throw new Error("Failed to fetch data")
        }
        return response.json()
})
.then(users=>{
    loading.hidden=true
    users.forEach(user=>{
        const userDiv=document.createElement("div")
        userDiv.innerHTML=`<h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>`
        userContainer.appendChild(userDiv)
    })
})
.catch(err=>{
    loading.hidden=true
    error.textContent="Error:"+err.message
})