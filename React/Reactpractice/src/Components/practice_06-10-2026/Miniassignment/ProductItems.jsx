import React from "react";
import ProductDetails from "./ProductDetails";

function ProductItems({product,onEdit,onDelete,}) {
  return (
    <div>
      <h3>{product.name}</h3>
      <ProductDetails product={product} />
      <button onClick={() => onEdit(product)}>
        Edit
      </button>

      <button onClick={() => onDelete(product.id)}>
        Delete
      </button>

      <hr />
    </div>
  );
}

export default ProductItems;