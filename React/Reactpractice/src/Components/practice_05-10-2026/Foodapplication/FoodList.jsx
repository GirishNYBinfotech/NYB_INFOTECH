import React from "react";
import FoodItem from "./FoodItem";

function FoodList() {
  const getMenuTitle = () => {
    return "Today's Menu"
  }

  return (
    <section>
      <h2>{getMenuTitle()}</h2>
      <FoodItem />
      <div className="food-item">
        <h2>Burger</h2>
        <p>Chicken Burger</p>
        <p>Price: RS.149</p>
      </div>

      <div className="food-item">
        <h2>Pasta</h2>
        <p>spyice Pasta</p>
        <p>Price: RS.179</p>
      </div>
    </section>
  );
}

export default FoodList;