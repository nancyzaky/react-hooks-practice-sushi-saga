import React, { useState, useRef } from "react";

function Sushi({ item, plates, setPlates, balance, checkBalance }) {
  const sushRef = useRef();
  console.log(balance, item);
  const { name, img_url, price, created_at } = item;
  const [eaten, setEaten] = useState(false);
  return (
    <div className="sushi" ref={sushRef}>
      <div
        className="plate"
        onClick={() => {
          checkBalance(price, balance);

          if (balance >= price) {
            setEaten(!eaten);
            setPlates([...plates, item]);
          }
        }}
      >
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
