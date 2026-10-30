const STORAGE_KEY = "employees";

// Save employees
export function saveEmployees(employees) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(employees)
    );
}

// Get employees
export function getEmployees() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
}

// Delete all employees
export function clearEmployees() {
    localStorage.removeItem(STORAGE_KEY);
}
