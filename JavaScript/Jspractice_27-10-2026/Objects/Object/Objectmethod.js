// Object Methods
let employee = {
    id: 101,
    name: "Girish",
    role: "Developer",
    salary: 30000
};

// Object.keys()
console.log("Object Keys:");
console.log(Object.keys(employee));

// Object.values()
console.log("Object Values:");
console.log(Object.values(employee));

// Object.entries()
console.log("Object Entries:");
console.log(Object.entries(employee));

//Computed Properties
let employee1= {}
function updateEmployee(key, value) {
    employee1[key] = value;
}
updateEmployee("name", "Rahul");
updateEmployee("salary", 50000);
updateEmployee("department", "IT");

console.log(employee1);