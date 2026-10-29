async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json()
    console.log(users);
    users.forEach((user) => {
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
    });
  } 
  catch (error) {
    console.error("Error:", error.message);
  }
}

getUsers()
