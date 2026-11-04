function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received")
        }, 2000)
    })
}

async function getData() {
    console.log("Fetching data...")
    const result = await delay()
    console.log(result)
}
getData()

//Api calls
async function manageUsers() {
    // GET API
    const getResponse = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await getResponse.json()
    console.log("GET Users:", users)


    // POST API
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "John",
                email: "john@gmail.com"
            })
        }
    )
    const newUser = await postResponse.json()
    console.log("POST User:", newUser);


    // PUT API 
    const putResponse = await fetch("https://jsonplaceholder.typicode.com/users/1",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Updated John",
                email: "updated@gmail.com"
            })
        }
    )
    const updatedUser = await putResponse.json()
    console.log("PUT User:", updatedUser)

    let patchrequest=await fetch("https://jsonplaceholder.typicode.com/users/1",
        {
            method:"PATCH",
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify({
                name:"only name"
            })
        }
    )
    let patchdata=await patchrequest.json()
    console.log("patch user",patchdata)


    //DELETE API
    const deleteResponse = await fetch("https://jsonplaceholder.typicode.com/users/1",
        {
            method: "DELETE"
        }
    )
    console.log("DELETE Status:", deleteResponse.status)
}
manageUsers()