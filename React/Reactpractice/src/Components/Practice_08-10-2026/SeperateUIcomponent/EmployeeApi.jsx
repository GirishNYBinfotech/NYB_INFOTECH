const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getEmployees = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
};

export const getEmployeeById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch employee");
  }

  return response.json();
};