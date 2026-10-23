
const API_URL = import.meta.env.VITE_API_URL;

export async function Envvariables() {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
