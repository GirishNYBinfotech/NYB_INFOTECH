// SYNCHRONOUS JAVASCRIPT
function synchronousExample() {
    console.log("Synchronous:Start")
    console.log("Synchronous:Middle")
    console.log("Synchronous:End")
}

// CALL STACK
function firstFunction() {
    console.log("Call Stack:firstFunction")
    secondFunction()
}

function secondFunction() {
    console.log("Call Stack: secondFunction")
    thirdFunction()
}

function thirdFunction() {
    console.log("Call Stack: thirdFunction")
}

// WEB APIs + setTimeout()
function timeoutExample() {
    console.log("setTimeout: Start")

    setTimeout(function() {
        console.log("setTimeout: Callback executed")
    }, 0)

    console.log("setTimeout: End")
}

//  setInterval()
function intervalExample() {
    let count = 0

    const intervalId = setInterval(function() {
        count++

        console.log("setInterval:", count)

        if (count === 3) {
            clearInterval(intervalId)
            console.log("setInterval stopped")
        }
    }, 1000)
}

// CALLBACK QUEUE + EVENT LOOP
function callbackQueueExample() {
    console.log("Callback Queue: Start")

    setTimeout(function() {
        console.log("Callback Queue: setTimeout callback")
    }, 0)

    console.log("Callback Queue: End")
}

// MICROTASK QUEUE
function microtaskExample() {
    console.log("Microtask: Start")

    Promise.resolve().then(function() {
        console.log("Microtask Queue: Promise.then")
    })

    setTimeout(function() {
        console.log("Callback Queue: setTimeout")
    }, 0)

    console.log("Microtask: End")
}

// PROMISE
function createPromise() {
    return new Promise(function(resolve, reject) {
        let success = true

        if (success) {
            resolve("Promise resolved successfully")
        } else {
            reject("Promise rejected")
        }
    })
}

// .then(), .catch(), .finally()
function promiseExample() {
    createPromise()
        .then(function(result) {
            console.log(".then():", result)
        })
        .catch(function(error) {
            console.log(".catch():", error)
        })
        .finally(function() {
            console.log(".finally(): Promise completed")
        })
}

// PROMISE.ALL()
function promiseAllExample() {
    const promise1 = Promise.resolve("User Data")
    const promise2 = Promise.resolve("Product Data")
    const promise3 = Promise.resolve("Order Data")

    Promise.all([promise1, promise2, promise3])
        .then(function(results) {
            console.log("Promise.all():", results)
        })
        .catch(function(error) {
            console.log("Promise.all() Error:", error)
        })
}

//PROMISE.RACE()
function promiseRaceExample() {
    const promise1 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Promise 1 finished")
        }, 2000)
    })

    const promise2 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Promise 2 finished")
        }, 1000)
    })

    Promise.race([promise1, promise2])
        .then(function(result) {
            console.log("Promise.race():", result)
        })
}

//  PROMISE.ALLSETTLED()
function promiseAllSettledExample() {
    const promise1 = Promise.resolve("Success")
    const promise2 = Promise.reject("Failed")
    const promise3 = Promise.resolve("Success again")

    Promise.allSettled([
        promise1,
        promise2,
        promise3
    ])
        .then(function(results) {
            console.log("Promise.allSettled():", results)
        })
}

// PROMISE.ANY()
function promiseAnyExample() {
    const promise1 = Promise.reject("Server 1 failed")

    const promise2 = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Server 2 succeeded")
        }, 1000)
    })

    const promise3 = Promise.reject("Server 3 failed")

    Promise.any([
        promise1,
        promise2,
        promise3
    ])
        .then(function(result) {
            console.log("Promise.any():", result)
        })
        .catch(function(error) {
            console.log("Promise.any() Error:", error)
        })
}

// ASYNC / AWAIT
async function asyncAwaitExample() {
    try {
        console.log("Async/Await: Starting")

        const result = await createPromise()

        console.log("Async/Await:", result)
    }
    catch (error) {
        console.log("Async/Await Error:", error)
    }
    finally {
        console.log("Async/Await: Finally")
    }
}

// ERROR HANDLING
function errorHandlingExample() {
    try {
        console.log("Error Handling: Try block")
        throw new Error("Something went wrong")
    }
    catch (error) {
        console.log("Error Handling: Catch =", error.message)
    }
    finally {
        console.log("Error Handling: Finally block")
    }
}

//GET
async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        )

        const data = await response.json()

        console.log("FETCH GET:", data)
    }
    catch (error) {
        console.log("FETCH GET Error:", error)
    }
}

//  POST
async function createUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Girish",
                    email: "girish@example.com"
                })
            }
        )

        const data = await response.json()

        console.log("FETCH POST:", data)
    }
    catch (error) {
        console.log("FETCH POST Error:", error)
    }
}

// PUT
async function updateUserUsingPUT() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Girish Updated",
                    email: "updated@example.com"
                })
            }
        )

        const data = await response.json()

        console.log("FETCH PUT:", data)
    }
    catch (error) {
        console.log("FETCH PUT Error:", error)
    }
}
// PATCH
async function updateUserUsingPATCH() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Girish PATCH Updated"
                })
            }
        )

        const data = await response.json()

        console.log("FETCH PATCH:", data)
    } catch (error) {
        console.log("FETCH PATCH Error:", error)
    }
}

// DELETE
async function deleteUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "DELETE"
            }
        )

        console.log(
            "FETCH DELETE: Status =",
            response.status
        )
    } catch (error) {
        console.log("FETCH DELETE Error:", error)
    }
}

async function runDemo() {
    // Synchronous
    synchronousExample()
    // Call Stack
    firstFunction()
    // setTimeout / Web API
    timeoutExample()
    // setInterval
    intervalExample()
    // Callback Queue
    callbackQueueExample()
    // Microtask Queue
    microtaskExample()
    // Promise
    promiseExample()
    // Promise.all
    promiseAllExample()
    // Promise.race
    promiseRaceExample()
    // Promise.allSettled
    promiseAllSettledExample()
    // Promise.any
    promiseAnyExample()
    // Async / Await
    asyncAwaitExample()
    // Error Handling
    errorHandlingExample()
    // Fetch GET
    await getUser()
    // Fetch POST
    await createUser()
    //Fetch PUT
    await updateUserUsingPUT()
    // Fetch PATCH
    await updateUserUsingPATCH()
    // Fetch DELETE
    await deleteUser()
}
runDemo()

//promise chinning
Promise.resolve(5)
  .then((value) => {
    console.log(value)
    return value + 5
  })
  .then((value) => {
    console.log(value)
    return Promise.resolve(value * 2)
  })
  .then((value) => {
    console.log(value)
    throw new Error("Failed")
  })
  .catch((error) => {
    console.log(error.message);
    return 50
  })
  .then((value) => {
    console.log(value)
  })

//loading, success, empty, and error states
const message = document.getElementById("message");
    const userList = document.getElementById("userList");
    async function getUsers() {
      // 1. LOADING STATE
      message.textContent = "Loading..."
      userList.innerHTML = ""
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const users = await response.json()
        // EMPTY STATE
        if (users.length === 0) {
          message.textContent = "No users found"
          return
        }
        // SUCCESS STATE
        message.textContent = "Users loaded successfully"
        users.forEach(user => {
          const li = document.createElement("li")
          li.textContent = user.name
          userList.appendChild(li)
        })

      } 
      catch (error) {
        // ERROR STATE
        message.textContent = "Something went wrong!"
        console.log(error)
      }
    }
    getUsers()