import React from "react";
import CoinFlipGame from "./CoinFlipGame";

const CoinFlip = () =>{
    return(
        <>
            <div className="games-information">
                <div className="title">
                    Current Games
                </div>
                <div className="info">
                    <div className="info-element">
                        <div className="info-header">
                            1231.21<span className="coloring-span">$</span>
                        </div>
                        <div className="info-description">SUM TOTAL</div>
                    </div>
                    <div className="info-element">
                        <div className="info-header">4</div>
                        <div className="info-description">GAMES</div>
                    </div>
                    <div className="info-element">
                        <div className="info-header">1</div>
                        <div className="info-description">
                            YOU CAN <span className="coloring-span">JOIN</span>
                        </div>
                    </div>
                    <div className="game-create-container">
                        <button className="create-game-btn">
                            CREATE
                        </button>
                    </div>
                </div>
            </div>

            <div className="games-container">
                <div className="elements-names">
                    <div className="element-name">
                        PLAYER
                    </div>
                    <div className="element-name">
                        ITEMS
                    </div>
                    <div className="element-name">
                        SUMM
                    </div>
                </div>
                <div className="games">
                    <CoinFlipGame></CoinFlipGame>
                </div>
            </div>
        </>
    );
}

export default CoinFlip;