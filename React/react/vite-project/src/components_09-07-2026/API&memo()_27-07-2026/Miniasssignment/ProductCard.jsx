import React from "react";

function ProductCard({ product }) {
  console.log("Rendering:", product.title);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        width="120"
        height="120"
      />
      <h3>{product.title}</h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default React.memo(ProductCard);