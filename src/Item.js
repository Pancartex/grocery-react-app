import React from "react";

function Item({ name, price, id, handleAddToCart }) {
  const [itemCount, setItemCount] = React.useState(0);

  function increment() {
    setItemCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function addToCart() {
    handleAddToCart(itemCount, itemCount * price, name);
    setItemCount(0)
  }

  return (
    <div className="item-card">
      <h1>{name}</h1>
      <p>{price}</p>
      <p>Amount: {itemCount}</p>
      <button onClick={increment}>Increment</button>
      <p>total: {itemCount * price}$</p>
      <button
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Item;
