import { useState, useEffect } from "react";

function useEmployees() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchEmployees() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      const data = await response.json();

      const formattedEmployees = data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        department: ["IT", "HR", "Finance"][
          (user.id - 1) % 3
        ]
      }));

      return formattedEmployees;
    } catch (err) {
      throw new Error(
        "Unable to load employees. Please try again."
      );
    }
  }

  async function loadEmployees() {
    try {
      setLoading(true);
      setError("");

      const data = await fetchEmployees();
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEmployees().then((data) => {
      if (data) {
      }
    });
  }, []);

  return {loading,error,setLoading,setError,fetchEmployees};
}
export default useEmployees