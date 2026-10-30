import { Employee } from "./utils.js";
import {debounce,generateId} from "./utils.js";
import {saveEmployees,getEmployees} from "./storage.js";
import { fetchEmployees } from "./api.js";
import { validateEmployee } from "./validation.js";
import { displayEmployees,showLoading,showMessage} from "./ui.js";

// Global application data
let employees = [];

// Load employees
async function loadEmployees() {
    showLoading(true);
    try {
        const savedEmployees = getEmployees();
        if (savedEmployees !== null) {
            employees = savedEmployees;
        }
        else {
            // API Integration
            employees = await fetchEmployees();
            saveEmployees(employees);
        }

        renderEmployees();
    } 
    catch (error) {
        console.error(error);
        showMessage("Unable to load employees");
    } 
    finally {
        showLoading(false);
    }
}


// Render employee list
function renderEmployees() {
    const searchValue =
        document.getElementById("search").value.toLowerCase();
    const department =
        document.getElementById("filter").value;
    const sortValue =
        document.getElementById("sort").value;

    // Search
    let filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchValue)
    );


    // Filter
    if (department) {
        filteredEmployees = filteredEmployees.filter(employee =>
            employee.department === department
        );
    }


    // Sort
    if (sortValue === "asc") {
        filteredEmployees.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    } else if (sortValue === "desc") {
        filteredEmployees.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    // Display employees
    displayEmployees(
        filteredEmployees,
        editEmployee,
        deleteEmployee,
        viewEmployee
    );
}


// Add and Update Employee
document.getElementById("employeeForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const id = document.getElementById("employeeId").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;
        const salary = document.getElementById("salary").value;

        // Form Validation
        const error = validateEmployee(
            name,
            email,
            department,
            salary
        );

        if (error) {
            showMessage(error);
            return;
        }

        if (id) {
            // Update employee
            employees = employees.map(employee => {

                if (employee.id === id) {

                    return new Employee(
                        id,
                        name,
                        email,
                        department,
                        Number(salary)
                    );
                }
                return employee;
            })
            showMessage("Employee updated successfully");
        }
         else {
            // Register employee
            const newEmployee = new Employee(
                generateId(),
                name,
                email,
                department,
                Number(salary)
            )
            employees.push(newEmployee);
            showMessage("Employee registered successfully");
        }

        // Save in Local Storage
        saveEmployees(employees);
        renderEmployees();
        this.reset();
        document.getElementById("employeeId").value = ""
        document.getElementById("submitBtn").textContent =
            "Add Employee";
    });

// Edit Employee
function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    if (!employee) return;
    document.getElementById("employeeId").value = employee.id;
    document.getElementById("name").value = employee.name;
    document.getElementById("email").value = employee.email;
    document.getElementById("department").value = employee.department;
    document.getElementById("salary").value = employee.salary;
    document.getElementById("submitBtn").textContent =
        "Update Employee";
}

// Delete Employee
function deleteEmployee(id) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;
    employees = employees.filter(employee =>
        employee.id !== id
    );

    saveEmployees(employees);
    renderEmployees();
    showMessage("Employee deleted successfully");
}


// View Employee Details
function viewEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    if (!employee) return;
    alert(`
        Employee Details
        Name: ${employee.name}
        Email: ${employee.email}
        Department: ${employee.department}
        Salary: ₹${employee.salary}
    `);
}


// Debounced Search
const searchInput = document.getElementById("search");
searchInput.addEventListener(
    "input",
    debounce(renderEmployees, 300)
);


// Filter Event
document.getElementById("filter")
    .addEventListener("change", renderEmployees);

// Sort Event
document.getElementById("sort")
    .addEventListener("change", renderEmployees);

// Start Application
loadEmployees();
