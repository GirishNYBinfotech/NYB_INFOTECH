import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Product Store</h2>;
}

function Products() {
  return (
    <div>
      <h2>Products</h2>

      <Link to="/products/101">Laptop</Link>
      <br />

      <Link to="/products/202">Mobile</Link>
    </div>
  );
}

function ProductDetails() {
  return (
    <>
    <h2>Product Details</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam.</p>
    </>
  )
}

function Contact() {
  return (
    <>
    <h2>Contact Us</h2>
    <h3><strong>ph.no</strong>9999999999</h3>
    </>
  )
}

function Product() {
  return (
    <>
    <h2>Products store</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default Product