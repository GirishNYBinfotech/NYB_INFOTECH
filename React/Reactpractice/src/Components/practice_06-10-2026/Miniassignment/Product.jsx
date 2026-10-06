import { react,useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      category: "Electronics",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  function addProduct(product) {
    setProducts([...products, product])
  }

  function deleteProduct(id) {
    setProducts(
      products.filter((product) => product.id !== id)
    );
  }

  function editProduct(product) {
    setSelectedProduct(product);
  }

  function updateProduct(updatedProduct) {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

    setSelectedProduct(null);
  }

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm
        onAdd={addProduct}
        onUpdate={updateProduct}
        selectedProduct={selectedProduct}
      />

      <ProductList
        products={products}
        onEdit={editProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default Product