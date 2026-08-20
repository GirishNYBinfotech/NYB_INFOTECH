import React, { useState, useCallback } from "react";

function SearchButton({ onSearch }) {
  console.log("SearchButton rendered");

  return (
    <button onClick={onSearch}>Search</button>
  );
}

function Searchcall() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const handleSearch = useCallback(() => {
    console.log("Searching for:", search);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <SearchButton onSearch={handleSearch} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default Searchcall