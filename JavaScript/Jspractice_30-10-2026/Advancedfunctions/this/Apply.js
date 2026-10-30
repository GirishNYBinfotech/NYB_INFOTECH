//Apply
const employee = {
    name: "King",
    role: "Developer"
};

function getDetails(city, salary) {
    console.log(this.name);
    console.log(this.role);
    console.log(city);
    console.log(salary);
}
getDetails.apply(employee, ["Hyderabad", 50000])