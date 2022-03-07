import React from "react";

function Checkout({ checkoutItem, handleRemoveFromCheckout }) {

  const listCheckoutItem = checkoutItem.map((item) => {
    return (
      <li>
        <p>{item.name} {item.count} - {item.totalPrice}</p>
        <button onClick={() => handleRemoveFromCheckout(item.name)} >Remove</button>
      </li>
    );
  });

  const total = checkoutItem.reduce((total, item) => {
    return total + item.totalPrice
  }, 0)

  return (
    <div className="Checkout-cart">
      <ul>{listCheckoutItem}</ul>
      <p>Total: {total}</p>
    </div>
  );
}

export default Checkout;
