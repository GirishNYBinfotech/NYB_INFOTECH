function getData(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Data received")
    },3000)
  })
}

async function fetchData(){
  const result=await getData()
  console.log(result)
}
fetchData()

//food delivery
function orderFood(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Food is ready")
    },2000)
  })
}
async function placeOrder(){
  console.log("Ordering food...")
  const result=await orderFood()
  console.log(result)
  console.log("Enjoy your food")
}
placeOrder()