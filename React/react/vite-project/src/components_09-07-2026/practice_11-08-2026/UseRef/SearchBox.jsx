import { useRef } from "react";

function SearchBox() {
  const searchRef = useRef()
  const startSearch = () => {
    searchRef.current.focus()
  }

  return (
    <div>
      <h2>Product Search</h2>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search for products..."
      />
      <button onClick={startSearch}>Search</button>
    </div>
  );
}

export default SearchBox;