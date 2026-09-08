let products=[
{name:"Laptop",price:50000,quantity:1},
{name:"Mouse",price:500,quantity:2},
{name:"Keyboard",price:1000,quantity:1},
{name:"Headphones",price:2000,quantity:1}
]

// Normal Function
function calculateTotal(price,quantity){
return price*quantity
}

// Arrow Function
const calculateDiscount=(total)=>{
if(total>=50000)
return total*0.10
return 0
}

// Function Expression
const displayProduct=function(product){
let amount=calculateTotal(product.price,product.quantity)
console.log(product.name+" = Rs."+amount)
}

// Callback Function
function processProducts(products,callback){
for(let product of products){
callback(product)
}
}

// Main Function
function generateBill(){
let total=0


for(let product of products){
total=total+calculateTotal(product.price,product.quantity)
}

console.log("Shopping Bill")
processProducts(products,displayProduct)

console.log("Total = Rs."+total)


if(total>=50000){
console.log("You are eligible for 10% discount")
}
else{
console.log("No discount available")
}

let discount=calculateDiscount(total)
let finalAmount=total-discount

console.log("Discount = Rs."+discount)
console.log("Final Amount = Rs."+finalAmount)
}

generateBill()