//call 
const employee1 = {
    name: "Girish",
    role: "Developer"
};

const employee2 = {
    name: "Rahul",
    role: "Tester"
};

function getDetails(city, salary) {
    console.log(this.name)
    console.log(this.role)
    console.log(city)
    console.log(salary)
}
getDetails.call(employee1, "Hyderabad", 50000)
getDetails.call(employee2, "Bangalore", 40000)