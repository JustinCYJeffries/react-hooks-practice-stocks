import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, buyStock}) {
  const createStock = myStocks.map(stock=> <Stock key={stock.id} stock={stock} buyStock={buyStock}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {createStock}
    </div>
  );
}

export default PortfolioContainer;
