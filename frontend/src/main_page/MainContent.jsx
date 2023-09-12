import React from "react";
import DropCard from "./DropCard";
import "./main-content.css";
import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    <div className="main-content">
      <DropCard></DropCard>
      <div className="games">
        <Link to="/coinflip">
          <div className="small-card">
            <img className="drop-card-bg-img" src="/coin.png"></img>
            <div className="card-title">
              Coin<span className="coloring-span">Flip</span>
            </div>
          </div>
        </Link>
        <Link to="/jackpot">
          <div className="small-card">
            <img className="drop-card-bg-img" src="/coin.png"></img>
            <div className="card-title">
              Jack<span className="coloring-span">Pot</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainContent;
