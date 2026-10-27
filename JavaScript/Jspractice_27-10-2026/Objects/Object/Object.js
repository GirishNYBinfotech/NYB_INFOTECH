const employee = {
    id: 101,
    name: "Girish",
    salary: 40000,

    address: {
        city: "Hyderabad",
        state: "Telangana"
    },

    skills: {
        frontend: "React",
        backend: "Node.js"
    }
};

//Access nested object properties
console.log("City:", employee.address.city);
console.log("Frontend:", employee.skills.frontend);

//Update properties
employee.name = "Amit";
employee.address.city = "Bengaluru";
employee.skills.frontend = "Angular";

console.log("Updated Employee:", employee);

//Add new properties
employee.address.country = "India";
employee.skills.database = "MongoDB";
console.log("After Adding:", employee);

//Delete properties
delete employee.address.state;
delete employee.skills.backend;
console.log("After Deleting:", employee);

//shallow copy
const copyEmployee = { ...employee };
copyEmployee.name = "Priya";

console.log("Original Name:", employee.name);
console.log("Copied Name:", copyEmployee.name);

// deep copy
const deepCopy = structuredClone(employee);
deepCopy.address.city = "Chennai";

console.log("Original City:", employee.address.city);
console.log("Deep Copy City:", deepCopy.address.city);

// Add a new nested object
employee.education = {
    degree: "B.Tech",
    university: "ABC University"
};

console.log("Final Employee Object:", employee);



//object Destructuring
console.log("object Destructuring")
const employee1 = {
    id: 101,
    name: "Rahul",
    age: 25,
    salary: 40000,

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

//Basic destructuring
const { id, name, age } = employee1;
console.log("ID:", id);
console.log("Name:", name);
console.log("Age:", age);

// Rename variables
const { salary: empSalary } = employee1;

console.log("Salary:", empSalary);

//Default values
const { department = "IT" } = employee1;

console.log("Department:", department);

// Nested object destructuring
const {address: { city, state }} = employee1;
console.log("City:", city);
console.log("State:", state);

//  Destructuring with remaining properties
const { id: empId, ...remaining } = employee1;

console.log("Employee ID:", empId);
console.log("Remaining Properties:", remaining);


