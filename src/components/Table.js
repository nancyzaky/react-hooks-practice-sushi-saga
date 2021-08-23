import React, { useState } from "react";

function Table({ plates = [], balance, finished, adjustBalance }) {
  const [val, setVal] = useState("");
  console.log(finished);
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        {finished ? `plz refil` : `You have: ${balance} remaining!`}
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          adjustBalance(parseInt(val));
          setVal("");
        }}
      >
        <input
          type="number"
          name="refill"
          id="refill"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        ></input>
        <button type="submit">Refill</button>
      </form>

      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
