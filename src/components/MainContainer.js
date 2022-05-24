import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
const API ="http://localhost:3001/stocks"
const[stocks, setStocks]=useState([])
const[myStocks, setMyStocks]=useState([])
const[sortBy, setSortBy]=useState('')
const[filterBy, setFilterBy]=useState('')

  useEffect(()=> {
    fetch(API)
    .then(r=>r.json())
    .then((r)=>setStocks(r))
  }, [])

  const buyStock = (stock) => {
    if(!myStocks.includes(stock)){
      const upDatedMyStocks = [...myStocks, stock]
    setMyStocks(upDatedMyStocks)
    }else return
  }
const sellStock = (stock)=>{
  const upDatedMyStocks = [...myStocks].filter(myStock=>myStock.id !== stock.id)
  setMyStocks(upDatedMyStocks)
}
useEffect(()=>{
  if(sortBy === 'Alphabetically'){
    const sortedStocks = sortByName()
    setStocks(sortedStocks)
    console.log('sorted stock')
  }
  if(sortBy === 'Price'){
    const sortedStocks = sortByPrice()
    setStocks(sortedStocks)
    console.log('sorted stock')
  }
  else{}
}, [sortBy])
useEffect(()=>{
  
}, [filterBy])

const sortStocks = (e) =>{
  setSortBy(e.target.value)

}
const sortByName=()=>{
  return [...stocks].sort(function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
}
const sortByPrice=()=>{
  return [...stocks].sort(function (a, b) {
    return b.price - a.price;
  });
}
  return (
    <div>
      <SearchBar sortStocks={sortStocks} sortBy={sortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} buyStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
