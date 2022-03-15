import React, { useState } from "react";
import Data from "./ItemsData.js";
import Item from "./Item.js";
import Checkout from "./Checkout.js";

function App() {
  const [itemsData, setItemsData] = useState(Data);
  const [checkoutItem, setCheckoutItem] = useState([]);

  function addToCart(count, totalPrice, name) {
    const itemInCart = checkoutItem.find((item) => item.name === name);

    if (!itemInCart) {
      setCheckoutItem((prevCheckoutItem) => {
        return [...prevCheckoutItem, { count, totalPrice, name }];
      });
    } else {
      setCheckoutItem((prevCheckoutItem) => {
        return prevCheckoutItem.map((item) => {
          return item.name === name
            ? {
                ...item,
                count: item.count + count,
                totalPrice: item.totalPrice + totalPrice,
              }
            : item;
        });
      });
    }
  }

  // passing this function to checkout component. onClick to remove item from cart
  function removeFromCheckout(name) {
    setCheckoutItem((prevCheckoutItem) => {
      let newCheckoutArr = [];

      for (let i = 0; i < prevCheckoutItem.length; i++) {
        if (prevCheckoutItem[i].name === name) {
          prevCheckoutItem.splice(i, 1);
        } else {
          newCheckoutArr.push(prevCheckoutItem[i]);
        }
      }
      return newCheckoutArr;
    });
  }

  return (
    <div className="main">
      <div className="item-container">
        {itemsData.map((item) => {
          return <Item key={item.id} {...item} handleAddToCart={addToCart} />;
        })}
      </div>
      <Checkout
        checkoutItem={checkoutItem}
        handleRemoveFromCheckout={removeFromCheckout}
      />
    </div>
  );
}

export default App;
