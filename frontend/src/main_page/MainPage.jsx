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
                    <div class="main-content">
                        <DropCard></DropCard>
                        <div className="games">
                            <div className="small-card">CoinFlip</div>
                            <div className="small-card">JackPot</div>
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