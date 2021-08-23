import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushi,
  setSushi,
  allData,
  fourSushis,
  plates,
  setPlates,
  balance,
  checkBalance,
}) {
  return (
    <div className="belt">
      {sushi.map((item) => {
        return (
          <Sushi
            key={item.id}
            item={item}
            plates={plates}
            setPlates={setPlates}
            balance={balance}
            checkBalance={checkBalance}
          />
        );
      })}
      <MoreButton
        sushi={sushi}
        setSushi={setSushi}
        allData={allData}
        fourSushis={fourSushis}
      />
    </div>
  );
}

export default SushiContainer;
