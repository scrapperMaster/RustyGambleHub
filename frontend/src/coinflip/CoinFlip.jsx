import React, { useState, useEffect } from "react";
import CoinFlipGame from "./CoinFlipGame";
import './coinflip.css'

const CoinFlip = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
            {windowWidth > 420 ? (
                <div className="coinflip-content">
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
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="games-container">
                        <div className="current-games">
                            <CoinFlipGame state="join_state" owner_name="pedik"></CoinFlipGame>
                            <CoinFlipGame
                             state="played_state"
                             owner_name="pupa"
                             second_player_name="lupa"
                            />
                            <CoinFlipGame state="bet_state" name="lupa"></CoinFlipGame>
                        </div>
                    </div>
                </div>
            ) :
                (
                    <div className="coinflip-content">
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
                            </div>
                            <div className="game-create-container">
                                <button className="create-game-btn">
                                    Create
                                </button>
                            </div>
                        </div>

                        <div className="games-container">
                            <div className="current-games">
                                <CoinFlipGame></CoinFlipGame>
                                <CoinFlipGame></CoinFlipGame>
                                <CoinFlipGame></CoinFlipGame>
                                <CoinFlipGame></CoinFlipGame>
                                <CoinFlipGame></CoinFlipGame>
                                <CoinFlipGame></CoinFlipGame>
                                <CoinFlipGame></CoinFlipGame>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default CoinFlip;