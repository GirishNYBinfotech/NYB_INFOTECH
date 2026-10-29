const API = "https://jsonplaceholder.typicode.com/posts";

// GET
async function getData() {
  try {
    console.log("Loading posts...");
    const res = await fetch(API);
    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();
    console.log("GET:", data);
  } 
  catch (err) {
    console.error("GET Error:", err.message);
  }
}

// POST
async function postData() {
  try {
    console.log("Creating post...")
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "React",
        body: "Learning API integration",
        userId: 1
      })
    });

    if (!res.ok) throw new Error("Failed to create post");
    console.log("POST:", await res.json());
  } 
  catch (err) {
    console.error("POST Error:", err.message);
  }
}

// PUT
async function putData() {
  try {
    console.log("Replacing post...");
    const res = await fetch(`${API}/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 1,
        title: "New Title",
        body: "Complete updated content",
        userId: 1
      })
    });

    if (!res.ok) throw new Error("Failed to replace post");
    console.log("PUT:", await res.json());
  } 
  catch (err) {
    console.error("PUT Error:", err.message);
  }
}

// PATCH
async function patchData() {
  try {
    console.log("Updating post...");
    const res = await fetch(`${API}/1`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Updated Only Title" })
    });

    if (!res.ok) throw new Error("Failed to update post")
    console.log("PATCH:", await res.json());
  } 
  catch (err) {
    console.error("PATCH Error:", err.message);
  }
}

// DELETE
async function deleteData() {
  try {
    console.log("Deleting post...");
    const res = await fetch(`${API}/1`, {
      method: "DELETE"
    });

    if (!res.ok) throw new Error("Failed to delete post")
    console.log("DELETE: Post deleted successfully");
  } 
  catch (err) {
    console.error("DELETE Error:", err.message);
  }
}

// Execute all operations in sequence
async function main() {
  await getData();
  await postData();
  await putData();
  await patchData();
  await deleteData();
}
main()
