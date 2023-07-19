import React from "react";

const CoinFlipGame = () => {
    return(
        <div className="coinflip-game">
            <div className="player-info">
                <div className="player-avatar">
                    <img className="player-img" src="avatar.png" />
                </div>
                <div className="player-name">
                    Barabashka
                </div>
            </div>
            <div className="player-items">
                <div className="item">
                    <div className="item-img-con">
                        <img className="item-img" src="item.jpg"></img>
                    </div>
                </div>
                <div className="item">
                    <div className="item-img-con">
                        <img className="item-img" src="item.jpg"></img>
                    </div>
                </div>
                <div className="item">
                    <div className="item-img-con">
                        <img className="item-img" src="item.jpg"></img>
                    </div>
                </div>
            </div>
            <div className="player-bet">
                125.56$
            </div>
            <div className="game-join-con">
                <button className="game-join-bt">
                    JOIN
                </button>
            </div>
        </div>
    );
}

export default CoinFlipGame;