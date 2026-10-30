//Bind
const employee3= {
    name: "queen",
    role: "Developer"
};

function getDetails(city, salary) {
    console.log(this.name);
    console.log(this.role);
    console.log(city)
    console.log(salary)
}
const result = getDetails.bind(employee3, "Hyderabad", 50000)
result()