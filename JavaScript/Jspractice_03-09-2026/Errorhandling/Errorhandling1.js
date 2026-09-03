async function getUsers() {
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed")
        }
        return response.json()
      })
      .then((users) => {
        console.log("Users:", users)
      })
      .catch((error) => {
        console.log("API Error:",error.message)
      })
    }
  catch (error) {
    console.log(error.message)
  }
}
getUsers()