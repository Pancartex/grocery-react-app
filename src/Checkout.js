import React from "react";

function Checkout({ checkoutItem, handleRemoveFromCheckout }) {
  const listCheckoutItem = checkoutItem.map((item) => {
    return (
      <li key={item.name}>
        <p>
          {item.name} {item.count}x - ${item.totalPrice.toFixed(2)}
        </p>
        <button onClick={() => handleRemoveFromCheckout(item.name)}>
          Remove
        </button>
      </li>
    );
  });

  const total = checkoutItem.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  return (
    <div className="checkout-cart">
      <ul>{listCheckoutItem}</ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Checkout;
