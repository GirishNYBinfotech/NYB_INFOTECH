const API = "https://dummyjson.com/products";

export async function getProducts() {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${API}/category-list`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
