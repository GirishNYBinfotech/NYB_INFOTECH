//promises
let success=true
const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Operation successful");
  } 
  else {
    reject("Operation failed");
  }
})
.then((result) => {
    console.log(result);
  })
.catch((error) => {
    console.log(error)
  })
.finally(()=>{
    console.log("finally block executed")
})
//callback into promise
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id:1,name:"Rahul"}
      resolve(user);
    }, 1000);
  });
}
getUser()
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });

//resolve and reject
function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Cannot divide by zero"));
    } 
    else {
      resolve(a / b);
    }
  });
}
// divide(10, 2)
divide(10, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message))