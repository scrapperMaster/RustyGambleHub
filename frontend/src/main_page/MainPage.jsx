import React from "react";
import Chat from "../base/Chat";
import Header from "../base/Header";
import DropCard from "./DropCard";
import './main_page.css';

const MainPage = () =>{
    return(
        <>
            <Header></Header>

            <main>
                <div className="container">
                    <Chat></Chat>
                    <div className="void-div"></div>
                    <div class="main-content">
                        <DropCard></DropCard>
                        <div className="games">
                            <div className="small-card">
                                <img className="drop-card-bg-img" src="/coin.png"></img>
                                <div className="card-title">
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
                </div>
            </main>

            <footer>
            </footer>
        </>
    );
}

export default MainPage;