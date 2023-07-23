import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import ViewGameWindow from "./ViewGameWindow";
import './coinflip-game.css'

const CoinFlipGame = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showViewWindow, setShowViewWindow] = useState(false);
    const [gameState, setGameState] = useState(props.state);
    const handleCloseWindow = () => {
        setShowViewWindow(false);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])

    return (
        <>
            {gameState === "join_state" && (
                <div className="coinflip-game">
                    <div className="player-info">
                        <div className="player-avatar">
                            <img className="player-img" src="avatar.png" />
                        </div>
                        <div className="player-name">
                            {props.owner_name}
                        </div>
                    </div>
                    <div className={`player-items ${windowWidth < 1308 ? 'hide-extra-items' : ''}`}>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                    </div>
                    <div className="player-bet">
                        125.56<span className="coloring-span">$</span>
                    </div>
                    <div className="game-join-con">
                        <button className="game-join-bt" onClick={() => setGameState("bet_state")}>
                            Join
                        </button>
                        <button className="game-view-bt" onClick={() => setShowViewWindow(true)}>
                            View
                        </button>
                    </div>

                    {showViewWindow === true && ReactDOM.createPortal(<ViewGameWindow name={props.name} onContentChange={handleCloseWindow} />, document.body)}
                </div>
            )}
            {gameState === "bet_state" && (
                <div className="coinflip-game">
                    <div className="player-info">
                        <div className="player-avatar">
                            <img className="player-img" src="avatar.png" />
                        </div>
                        <div className="player-name">
                            {props.owner_name}
                        </div>
                    </div>
                    <div className={`player-items ${windowWidth < 1308 ? 'hide-extra-items' : ''}`}>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                    </div>
                    <div className="player-bet">
                        125.56<span className="coloring-span">$</span>
                    </div>
                    <div className="game-join-con">
                        <button className="game-view-bt" onClick={() => setShowViewWindow(true)}>
                            View
                        </button>
                    </div>
                    {showViewWindow === true && ReactDOM.createPortal(<ViewGameWindow name={props.name} onContentChange={handleCloseWindow} />, document.body)}
                </div>
            )}
            {gameState === "played_state" && (
                <div className="coinflip-game played-state">
                    <div className="player-info">
                        <div className="player-avatar">
                            <img className="player-img" src="avatar.png" />
                        </div>
                        <div className="player-name">
                            {props.owner_name}
                        </div>
                    </div>
                    <div className={`player-items ${windowWidth < 1308 ? 'hide-extra-items' : ''}`}>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                        <div className="item">
                            <img className="item-img" src="item.jpg"></img>
                        </div>
                    </div>
                    <div className="player-bet">
                        125.56<span className="coloring-span">$</span>
                    </div>
                    <div className="game-join-con">
                        <button className="game-view-bt" onClick={() => setShowViewWindow(true)}>
                            View
                        </button>
                    </div>
                    {showViewWindow === true && ReactDOM.createPortal(<ViewGameWindow name={props.owner_name} onContentChange={handleCloseWindow} />, document.body)}
                </div>
            )}
        </>

    );
}

export default CoinFlipGame;