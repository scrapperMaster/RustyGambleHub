import React from "react";
import DropCard from "./DropCard";
import "./main-content.css";
import { Link } from "react-router-dom";
import JackPot from "./../assets/gif/jackpot-big.gif";
import CoinFlipBg from "./../assets/background/coinflip.png";
import JackPotBg from "./../assets/background/jackpot.png";
const MainContent = () => {
  return (
    <div className="main-content">
      <DropCard></DropCard>
      <div className="games">
        <Link to="/coinflip">
          <div className="small-card flip-card">
            <img className="drop-card-bg-img flip" src={CoinFlipBg} />
            <div className="card-title">
              Coin<span className="coloring-span">Flip</span>
            </div>
          </div>
        </Link>
        <Link to="/jackpot">
          <div className="small-card jackpot-card">
            <img className="drop-card-bg-img drop" src={JackPotBg}></img>
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
