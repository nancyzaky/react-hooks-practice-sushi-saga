import React, { useState } from "react";

function MoreButton({ sushi, setSushi, allData, fourSushis }) {
  console.log(sushi);

  return (
    <button
      onClick={() => {
        setSushi(allData.slice(fourSushis(sushi)[0], fourSushis(sushi)[1]));
      }}
    >
      More sushi!
    </button>
  );
}

export default MoreButton;
