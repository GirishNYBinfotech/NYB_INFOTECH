const API = "https://jsonplaceholder.typicode.com/users"
export const getUsers = async () => {
  const response = await fetch(API);
  return await response.json();
}