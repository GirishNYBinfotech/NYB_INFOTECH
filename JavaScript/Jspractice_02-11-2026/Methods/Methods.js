//call()
function employee(){
    this.name="Girish"
}
    function detail(sal,loc){
        console.log(this.name)
        console.log("salary:",sal)
        console.log("location:",loc)
    }
let emp=new employee()
detail.call(emp,2000,"Hyd")

//apply()
let employee1 = {
    name: "Girish"
}
let employee2 = {
    name: "Rahul"
}
function details(salary, location, role) {
    console.log("Name:", this.name)
    console.log("Salary:", salary)
    console.log("Location:", location)
    console.log("Role:", role)
}
details.apply(employee1, [30000, "Hyderabad", "Developer"])
details.apply(employee2, [40000, "Bangalore", "Tester"])

//bind()
function Bind(){
    this.fruit1="Mango"
}
function greenfruit(fruit2,fruit3){
    console.log(this.fruit1)
    console.log(fruit2)
    console.log(fruit3)
}
let h1=new Bind()
let h2=greenfruit.bind(h1,"greenapple","grapes")
h2()

//product
let product1={
    name:"Laptop",
    price:50000
}
let product2={
    name:"Mobile",
    price:20000
}
function calculateBill(quantity, discount) {
    let total = this.price * quantity
    let finalAmount = total - discount
    console.log("Product:", this.name)
    console.log("Price:", this.price)
    console.log("Quantity:", quantity)
    console.log("Discount:", discount)
    console.log("Final Amount:", finalAmount)
}
//CALL METHOD
console.log("CALL")
calculateBill.call(product1, 2, 5000)
//APPLY METHOD
console.log("APPLY")
calculateBill.apply(product2, [3, 2000])
//BIND METHOD
console.log("BIND:")
let result = calculateBill.bind(product1, 1, 3000)
result()