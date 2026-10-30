const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch employees from API
export function fetchEmployees() {

    return fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("API request failed");
            }
            return response.json();
        })
        .then(users => {
            return users.map(user => ({
                id: String(user.id),
                name: user.name,
                email: user.email,
                department: "IT",
                salary: 50000
            }));

        });
}
