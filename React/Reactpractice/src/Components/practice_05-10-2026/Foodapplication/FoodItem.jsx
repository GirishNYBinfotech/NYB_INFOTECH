import React from "react";

function FoodItem() {
  const foodName="Pizza"
  const price=199

  return (
    <div className="food-item">
      <h2> {foodName}</h2>
      <p>Cheese Pizza</p>
      <p>Price:RS.{price}</p>
    </div>
  )
}

export default FoodItem;