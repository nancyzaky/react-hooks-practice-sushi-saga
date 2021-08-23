import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allData, setAllData] = useState([]);

  const [plates, setPlates] = useState([]);
  const [sushi, setSushi] = useState([]);
  const [balance, setBalance] = useState(50);
  const [finished, setFinished] = useState(false);
  const checkBalance = (price, balance) => {
    if (price > balance) {
      setFinished(true);
    } else {
      setBalance((balance) => {
        return balance - price;
      });
    }
  };
  const adjustBalance = (num) => {
    setBalance((balance) => {
      return balance + num;
    });
  };
  const fourSushis = (arr) => {
    let lastIndex;
    let lastItem;
    if (
      arr.length === 0 ||
      arr[arr.length - 1].id === allData[allData.length - 1].id
    ) {
      lastItem = 0;
      lastIndex = 4;
    } else {
      lastItem = arr[arr.length - 1].id;
      lastIndex = lastItem + 4;
    }
    return [lastItem, lastIndex];
  };
  const fetchUrl = () => {
    fetch("http://localhost:3001/sushis")
      .then((resp) => resp.json())
      .then((data) => {
        setAllData(data);
        setSushi(data.slice(fourSushis(sushi)[0], fourSushis(sushi)[1]));
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <div className="app">
      <SushiContainer
        sushi={sushi}
        setSushi={setSushi}
        fourSushis={fourSushis}
        allData={allData}
        plates={plates}
        setPlates={setPlates}
        balance={balance}
        checkBalance={checkBalance}
      />
      <Table
        plates={plates}
        balance={balance}
        finished={finished}
        adjustBalance={adjustBalance}
      />
    </div>
  );
}

export default App;
