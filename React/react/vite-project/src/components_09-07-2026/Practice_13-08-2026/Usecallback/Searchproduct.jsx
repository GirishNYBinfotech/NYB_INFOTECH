import React, { useState, useCallback } from "react";

function Searchproduct() {
  const [search, setSearch] = useState("")
  
  const searchProducts = useCallback(() => {
    console.log("Searching for:", search)
  }, [search])

  return (
    <div>
      <h2>Product Search</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search product"/>
      <button onClick={searchProducts}>Search</button>
    </div>
  )
}

export default Searchproduct