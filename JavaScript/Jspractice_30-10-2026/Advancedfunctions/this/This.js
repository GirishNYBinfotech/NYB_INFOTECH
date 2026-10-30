//this keyword
console.log(this);

//object
const user = {
    name: "John",
    greet: function () {
        console.log(this.name);
    }
}
user.greet()

//function
function show() {
    console.log(this);
}
show()

//arror function
const user1= {
    name: "John",

    greet1() {
        const display = () => {
            console.log(this.name);
        };

        display();
    }
}
user1.greet1();

//Constructor Function
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}
const emp1 = new Employee("John", 50000)
console.log(emp1.name)
console.log(emp1.salary)