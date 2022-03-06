import React from "react";
import ItemsData from "./ItemsData.js";
import Item from "./Item.js";

function App() {
  const items = ItemsData.map((item) => {
    return <Item key={item.name} {...item} />;
  });

  return (
    <React.Fragment>
      <div className="main">{items}</div>
    </React.Fragment>
  );
}

export default App;
