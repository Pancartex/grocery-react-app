import { getByDisplayValue } from "@testing-library/react";
import React from "react";

function Item({ name, price, image, description }) {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function substract() {
    setCount((prevCount) => {
      if (!prevCount) {
        return (prevCount = 0);
      } else {
        return prevCount - 1;
      }
    });
  }

  return (
    <div>
      <img src={image} alt={`${name}`}></img>
      <h2>
        {name} - {price}
      </h2>
      <div className="quantity-container">
        <button onClick={substract}>-</button>
        <p className="quantity-display">{count}</p>
        <button onClick={increment}>+</button>
      </div>
      <p>Total: ${count * price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Item;
