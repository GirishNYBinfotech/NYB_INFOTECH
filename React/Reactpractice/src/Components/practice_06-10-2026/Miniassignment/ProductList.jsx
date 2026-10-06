import React from "react";
import ProductItems from "./ProductItems";


function ProductList({products,onEdit,onDelete,}) {
  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <ProductItems
            key={product.id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;