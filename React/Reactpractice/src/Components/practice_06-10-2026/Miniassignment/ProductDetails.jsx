import React from "react";

function ProductDetails({ product }) {
  return (
    <div>
      <p>Price: RS.{product.price}</p>

      {product.category && (
        <p>Category: {product.category}</p>
      )}
      {product.price > 40000 && (
        <p>Premium Product</p>
      )}
    </div>
  );
}

export default ProductDetails;