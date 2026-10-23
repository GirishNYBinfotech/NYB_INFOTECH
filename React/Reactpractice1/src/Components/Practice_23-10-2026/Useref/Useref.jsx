import { useState, useRef } from "react";

function Useref() {
  const [search, setSearch] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");

  const searchRef = useRef("");

  function handleSearch() {
    if (!search.trim()) return;
    setPreviousSearch(searchRef.current);
    searchRef.current = search;
    setCurrentSearch(search);
  }

  return (
    <div>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Enter product name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <p>Input text: {search}</p>
      <p>Current search: {currentSearch || "None"}</p>
      <p>Previous search: {previousSearch || "None"}</p>
    </div>
  );
}

export default Useref;
