import React from "react";
import DropCard from "./DropCard";
import './main-content.css';

const MainContent = ({ onContentChange }) => {
    return(
        <div className="main-content">
            <DropCard></DropCard>
            <div className="games" >
                <div className="small-card" onClick={() => onContentChange("coinflip")}>
                <img className="drop-card-bg-img" src="/coin.png"></img>
                    <div className="card-title" >
                        Coin<span className="coloring-span">Flip</span>
                    </div>
                    
                </div>
                <div className="small-card">
                    <img className="drop-card-bg-img" src="/coin.png"></img>
                    <div className="card-title">
                        Jack<span className="coloring-span">Pot</span>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default MainContent;