import React from "react";
import './view-game-window.css'

const ViewGameWindow = () =>{
    return(
        <div className="view-game-container">
            <div className="coinflip-game-players">
                <div className="coinflip-player-info">
                    <div className="coinflip-player-info-container">
                        <div className="coinpflip-player-info-avatar">
                            <img
                                alt="player avatar"
                                className="coinflip-player-info-img"
                                src="./avatar.png" />
                        </div>
                        <div className="coinflip-player-game-info">
                            <div className="coinflip-player-info-name">
                                Barabashka
                            </div>
                            <div className="coinflip-player-info-percents">
                                50%
                            </div>
                        </div>
                        <div className="coinflip-player-info-bet-items">
                            <div className="coinflip-player-info-item">
                                <img
                                    className="coinflip-player-info-bet-item-img"
                                    alt="item"
                                    src="./item.jpg" />
                            </div>
                            <div className="coinflip-player-info-item">
                                <img
                                    className="coinflip-player-info-bet-item-img"
                                    alt="item"
                                    src="./item.jpg" />
                            </div>
                            <div className="coinflip-player-info-item">
                                <img
                                    className="coinflip-player-info-bet-item-img"
                                    alt="item"
                                    src="./item.jpg" />
                            </div>
                            <div className="coinflip-player-info-item">
                                <img
                                    className="coinflip-player-info-bet-item-img"
                                    alt="item"
                                    src="./item.jpg" />
                            </div>
                        </div>
                        <div className="coinflip-player-info-bet-summ">
                            200.23$
                        </div>
                    </div>
                </div>
            </div>

            <div className="coinflip-game-info-container">
                <div className="info-icon">
                    i
                </div>
                <div className="coinflip-game-info-full-info">
                    <p>
                        hash:asda131nldnq0b1dnon10b1
                    </p>
                    <p>
                        GameID:58812384
                    </p>
                    <a>
                        click here to verify
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ViewGameWindow;