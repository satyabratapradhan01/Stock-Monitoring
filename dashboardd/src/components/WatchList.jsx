import React, {useState} from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import GeneralContext from "./GeneralContext";
import { useContext } from "react";



const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;


export const WatchListItem = ({stock}) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  }

  const handleMouseLeave = (e) => {
  setShowWatchlistActions(false);
};


  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className= {stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? ( <KeyboardArrowDown className="down" /> ) : (<KeyboardArrowUp className="down"/>)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListAction uid={stock.name} />}
    </li>
  )
 }

 const WatchListAction = ({ uid }) => {
    const generalContext = useContext(GeneralContext);
   const handleBuyClick = () => {
    console.log("hello satya...")
    generalContext.openBuyWindow(uid);
  };
  return (
    
      <span className="actions">
        <span>
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="Sell (B)" placement="top" arrow TransitionComponent={Grow} >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow} >
        <button className="action">
          <BarChartOutlinedIcon className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More (B)" placement="top" arrow TransitionComponent={Grow} >
        <button className="action"><MoreHorizIcon className="icon" /></button>
      </Tooltip>
     </span>
     </span>
  
  );
};
