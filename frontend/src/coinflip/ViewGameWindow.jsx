import React, { useState } from "react";
import './view-game-window.css'

const ViewGameWindow = ({name, onContentChange}) => {
    const [isWindowOpen, setIsWindowOpen] = useState(true);

    const closeWindow = () =>{
        setIsWindowOpen(false);
        onContentChange()
    }

    return (
        <>
            {isWindowOpen && (
                <>
                    <div className="view-game-background" onClick={() => closeWindow()}>
                    </div>
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
                                            {name}
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
                                <a href="#">
                                    click here to verify
                                </a>
                            </div>
                        </div>

                        <div className="vs-coinflip-game-view-con">
                            <img alt="vs" src="./vs.png"></img>
                        </div>

                        <div className="coinflip-game-view-total-bet">
                            400$
                            <br/>
                            TOTAL BET
                        </div>

                        <div className="close-view-window-bt-con">
                            <button className="close-view-game-window-bt" onClick={() => closeWindow()}>
                                close
                            </button>
                        </div>

                        <div className="game-join-con view-game-window-join-bt-con">
                            <button className="game-join-bt">
                                Join
                            </button>
                        </div>
                    </div>
                </>

            )}
        </>
    );
}

export default ViewGameWindow;