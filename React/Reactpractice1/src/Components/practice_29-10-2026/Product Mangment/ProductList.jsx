function ProductList({ products, onDetails, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p>No products found!</p>;
  }

  return (
    <div>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h3>{p.title}</h3>
          <p>Price: Rs.{p.price}</p>

          <button onClick={() => onDetails(p)}>Details</button>
          <button onClick={() => onEdit(p)}>Edit</button>
          <button onClick={() => onDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
