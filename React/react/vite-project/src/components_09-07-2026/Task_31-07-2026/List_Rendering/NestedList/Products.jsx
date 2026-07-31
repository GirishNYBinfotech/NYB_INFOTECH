import React from "react";

const Products= () => {
  const categories = [
    {
      id: 1,
      category: "Electronics",
      products: [
        { id: 101, name: "Laptop" },
        { id: 102, name: "Mobile" }
      ]
    },
    {
      id: 2,
      category: "Clothing",
      products: [
        { id: 201, name: "T-Shirt" },
        { id: 202, name: "Jeans" }
      ]
    }
  ];

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.category}</h2>

          <ul>
            {category.products.map((product) => (
              <li key={product.id}>
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Products