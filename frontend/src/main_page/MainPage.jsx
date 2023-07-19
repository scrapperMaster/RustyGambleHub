import React, {useState} from "react";
import Chat from "../base/Chat";
import Header from "../base/Header";
import MainContent from "../MainContent";
import CoinFlip from "../coinflip/CoinFlip";
import './main_page.css';

const MainPage = () =>{
    const [selectedContent, setSelectedContent] = useState("maincontent");

    const handleContentChange = (content) =>{
        setSelectedContent(content);
    }

    return(
        <>
            <Header onContentChange={handleContentChange}></Header>
            <main>
                <div className="container">
                    <Chat></Chat>
                    <div className="void-div"></div>
                    <div class="main-content">
                        {selectedContent ==="coinflip" && <CoinFlip></CoinFlip>}
                        {selectedContent ==="maincontent" && <MainContent></MainContent>}
                    </div>
                </div>
            </main>

            <footer>
            </footer>
        </>
    );
}

export default MainPage;