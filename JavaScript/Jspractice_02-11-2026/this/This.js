//this
console.log(this)

//inside the function
const user={
    name1:"King",
    age:25,
    display: function() {
        console.log(this.name1)
        console.log(this.age)
    }
}
user.display()

function Employee(name,salary) {
    this.name=name;
    this.salary=salary;
}
const emp1=new Employee("Rahul",50000)
const emp2=new Employee("Queen",60000)
console.log(emp1.name)
console.log(emp2.name)

//Shoppingcart
const shoppingCart = {
    customer: "Rahul",
    items: 3,
    totalAmount: 2500,
    addProduct: function() {
        this.items++
        console.log("Customer:", this.customer)
        console.log("Total Items:", this.items)
    },
    checkout: function() {
        console.log(this.customer + " has to pay Rs." + this.totalAmount)
    }
}
shoppingCart.addProduct()
shoppingCart.checkout()