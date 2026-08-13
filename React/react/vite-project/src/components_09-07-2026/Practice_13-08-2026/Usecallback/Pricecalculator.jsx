import React, { useState, useCallback } from "react";

function Pricecalculator() {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(1);

  const calculateTotal = useCallback(() => {
    return price * quantity;
  },[price])

  return (
    <div>
      <h2>Price: Rs.{price}</h2>
      <h2>Quantity: {quantity}</h2>
      <button onClick={() => setPrice(price + 100)}>Increase Price</button>
      <button onClick={() => setQuantity(quantity + 1)}>Increase Quantity</button>

      <h2>Total: Rs.{calculateTotal()}</h2>
    </div>
  );
}

export default Pricecalculator