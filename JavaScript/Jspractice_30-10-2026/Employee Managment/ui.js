const employeeList = document.getElementById("employeeList");

// Display employees
export function displayEmployees(employees, onEdit, onDelete, onDetails) {

    employeeList.innerHTML = "";

    if (employees.length === 0) {
        employeeList.textContent = "No employees found";
        return;
    }

    employees.forEach(employee => {
        const div = document.createElement("div");
        div.className = "employee";
        div.innerHTML = `
            <h3>${employee.name}</h3>
            <p>Email: ${employee.email}</p>
            <p>Department: ${employee.department}</p>
            <p>Salary: ₹${employee.salary}</p>

            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <button class="details">Details</button>
            </div>
        `;

        div.querySelector(".edit").addEventListener(
            "click", () => onEdit(employee.id)
        );

        div.querySelector(".delete").addEventListener(
            "click", () => onDelete(employee.id)
        );

        div.querySelector(".details").addEventListener(
            "click", () => onDetails(employee.id)
        );

        employeeList.appendChild(div);
    });
}

// Loading state
export function showLoading(status) {
    document.getElementById("loading").textContent =
        status ? "Loading employees..." : "";
}

// Display messages
export function showMessage(message) {
    document.getElementById("message").textContent = message;
}
