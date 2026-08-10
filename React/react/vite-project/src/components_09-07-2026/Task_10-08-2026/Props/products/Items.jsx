import React from 'react'
import Product from './Products';


const Items= () => {
  return (
    <div>
      <h1>Products</h1>

      <Product
        name="Laptop"
        brand="Dell"
        price={55000}
      />

      <Product
        name="Phone"
        brand="Samsung"
        price={25000}
      />

      <Product
        name="Headphones"
        brand="Sony"
        price={5000}
      />
    </div>
  );
};

export default Items