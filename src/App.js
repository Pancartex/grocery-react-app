import React from "react";
import Data from "./ItemsData.js";
import Item from "./Item.js";
import Checkout from "./Checkout.js";

function App() {
  const [itemsData, setItemsData] = React.useState(Data);
  const [totalCheckout, setTotalCheckout] = React.useState(0);
  const [checkoutItem, setCheckoutItem] = React.useState([]);

  const items = itemsData.map((item) => {
    return <Item key={item.id} {...item} handleAddToCart={addToCart} />;
  });

  function addToCart(count, totalPrice, name) {
    let inCheckout = false;

    checkoutItem.forEach((existingItem) => {
      if (existingItem.name === name) {
        inCheckout = true;
      }
    });
    if (!inCheckout) {
      setCheckoutItem((prevCheckoutItem) => {
        return [...prevCheckoutItem, { count, totalPrice, name }];
      });
    } else {
      setCheckoutItem((prevCheckoutItem) => {
        return prevCheckoutItem.map((item) => {
          return item.name === name ? { count: count, totalPrice: totalPrice, name: name } : item;
        });
      });
    }
  }

  function removeFromCheckout(name) {
    
    setCheckoutItem(prevCheckoutItem => {
      
      let newCheckoutArr = []

      for (let i = 0; i < prevCheckoutItem.length; i++) {
        if (prevCheckoutItem[i].name === name) {
            prevCheckoutItem.splice(i, 1)
        } else {
          newCheckoutArr.push(prevCheckoutItem[i])
        }
      }
      return newCheckoutArr
    })
  }


  return (
    <div className="main">
      <div className="item-container">{items}</div>
      <Checkout checkoutItem={checkoutItem} handleRemoveFromCheckout={removeFromCheckout} />
    </div>
  );
}

export default App;
