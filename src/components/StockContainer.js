import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, buyStock}) {
const createStock = stocks.map(stock=> <Stock key={stock.id} stock={stock} buyStock={buyStock}/>)

  return (
    <div>
      <h2>Stocks</h2>
      {createStock}
    </div>
  );
}

export default StockContainer;
