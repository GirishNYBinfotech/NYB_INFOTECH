//promise chaining
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Rahul" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Laptop", "Mobile"]);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log("User:", user.name);
    return getOrders(user.id);
  })
  .then((orders) => {
    console.log("Orders:", orders);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//promise 
Promise.resolve(10)
  .then((num) => {
    console.log(num);
    return num * 2;
  })
  .then((num) => {
    console.log(num);
    return num + 5;
  })
  .then((num) => {
    console.log(num);
  })
  .catch((error) => {
    console.log("Error:", error);
  });