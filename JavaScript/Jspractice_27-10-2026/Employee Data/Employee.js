const employees = [
    { id: 101, name: "Ravi", department: "IT", salary: 50000 },
    { id: 102, name: "Girish", department: "HR", salary: 40000 },
    { id: 103, name: "Arun", department: "IT", salary: 60000 },
    { id: 104, name: "King", department: "Sales", salary: 35000 },
    { id: 105, name: "Rahul", department: "HR", salary: 45000 }
];

// Display Employee List
function displayEmployees(list) {
    list.forEach(({ id, name, department, salary }) => {
        console.log(id, name, department, salary);
    });
}

// Filter Employees by Department
function filterByDepartment(department) {
    return employees.filter(emp => emp.department === department);
}

// Find Employee by ID
function findById(id) {
    return employees.find(emp => emp.id === id);
}

// Sort Employees by Salary (Low to High)
function sortBySalary() {
    return [...employees].sort((a, b) => a.salary - b.salary);
}

//Calculate Total Salary using reduce()
function totalSalary() {
    return employees.reduce((total, emp) => total + emp.salary, 0);
}

// Calculate Average Salary
function averageSalary() {
    return totalSalary() / employees.length;
}

// Find Highest Salary
function highestSalary() {
    return employees.reduce((max, emp) =>
        emp.salary > max.salary ? emp : max
    );
}

// Find Lowest Salary
function lowestSalary() {
    return employees.reduce((min, emp) =>
        emp.salary < min.salary ? emp : min
    );
}

//  Add Employee using Spread Operator
function addEmployee(newEmployee) {
    return [...employees, { ...newEmployee }];
}

// Output
console.log("Employee List:");
displayEmployees(employees);

console.log("IT Department:");
displayEmployees(filterByDepartment("IT"));

console.log("Employee with ID 103:");
console.log(findById(103));

console.log("Employees Sorted by Salary:");
displayEmployees(sortBySalary());

console.log("Total Salary:", totalSalary());
console.log("Average Salary:", averageSalary());

console.log("Highest Salary:", highestSalary());
console.log("Lowest Salary:", lowestSalary());

console.log("New Employee List:");
displayEmployees(addEmployee({
    id: 106,
    name: "Kiran",
    department: "IT",
    salary: 55000
}));
