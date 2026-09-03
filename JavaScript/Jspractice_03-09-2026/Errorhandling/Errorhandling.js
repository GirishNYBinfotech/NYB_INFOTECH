async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response.ok) {
      throw new Error(`${response.status}`)
    }
    const data = await response.json()
    console.log(data)
  } 
  catch (error) {
    console.log("Something went wrong:", error.message)
  }
}
getUsers()



