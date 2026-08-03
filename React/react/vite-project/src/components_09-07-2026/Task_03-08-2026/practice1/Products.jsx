function Products() {
  const products = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Keyboard"
  ];

  return (
    <div>
      <h2>Products</h2>

      <ul>
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;