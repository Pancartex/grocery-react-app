import React from "react";

function Item({ image, name, price, description, handleAddToCart }) {
  const [itemCount, setItemCount] = React.useState(1);

  function increment() {
    setItemCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function substract() {
    setItemCount((prevCount) => {
      return prevCount > 1 ? prevCount - 1 : 1;
    });
  }

  function addToCart() {
    if (itemCount > 0) {
      handleAddToCart(itemCount, itemCount * price, name);
      setItemCount(1);
    } else {
      alert("you must add at least one item to the cart");
    }
  }

  const newLocal = (
    <button disabled className="counter-btn" onClick={substract}>
      -
    </button>
  );
  return (
    <div className="item-card">
      <img className="item-img" src={image} />
      <div className="item-title">
        <h1>{name}</h1>
        <h1>${price.toFixed(2)}</h1>
      </div>
      <p>{description}</p>
      <div className="item-counter">
        {itemCount <= 1 && (
          <button
            className="counter-btn noselect minus-btn"
            onClick={substract}
            disabled
          >
            <i class="fa-solid fa-minus"></i>
          </button>
        )}
        {itemCount > 1 && (
          <button
            className="counter-btn noselect minus-btn"
            onClick={substract}
          >
            <i class="fa-solid fa-minus"></i>
          </button>
        )}
        <div className="counter-display">
          <h1>{itemCount}</h1>
        </div>
        <button className="counter-btn noselect plus-btn" onClick={increment}>
          +
        </button>
      </div>
      <button className="item-add-btn" onClick={addToCart}>
        Add {itemCount} to cart &bull; ${(itemCount * price).toFixed(2)}
      </button>
    </div>
  );
}

export default Item;
