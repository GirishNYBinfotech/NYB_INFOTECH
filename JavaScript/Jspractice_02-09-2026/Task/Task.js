const user = {
    name:"Girish",
    email:"girish@gmail.com",
    loggedIn:true
}
localStorage.setItem("user",JSON.stringify(user))
try {
    const storedUser=localStorage.getItem("user")
    if (!storedUser) {
        throw new Error("User information not found")
    }
    const userData=JSON.parse(storedUser)
    if (userData.loggedIn) {
        console.log(`Welcome ${userData.name}`)
    } 
    else {
        throw new Error("Please login")
    }
} 
catch (error){
    console.log("Error:",error.message)
}