import { useDispatch, useSelector } from "react-redux";

import {addToCart,removeFromCart} from "./cartSlice";

function Shopping() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000
    }
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: Rs.{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}

      <hr />
      <h2>Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Price: Rs.{cart.totalPrice}</p>

      <h3>Cart Items</h3>
      {cart.items.map(item => (
        <div key={item.id}>
          <p>{item.name} - Rs.{item.price}</p>
          <button onClick={() =>dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}

    </div>
  );
}

export default Shopping