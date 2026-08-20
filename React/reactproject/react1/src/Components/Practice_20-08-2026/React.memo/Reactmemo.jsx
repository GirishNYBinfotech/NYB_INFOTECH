import React, { useState } from "react";

const Product = React.memo(function Product({ name, price }) {
  console.log("Product rendered")

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: Rs.{price}</p>
    </div>
  );
});

function Reactmemo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Cart Count: {count}</button>
      <Product name="Laptop" price={50000} />
    </div>
  )
}

export default Reactmemo