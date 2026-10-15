function ProductSearch({ search, onSearchChange }) {
  return (
    <input
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products"
    />
  );
}

export default ProductSearch;