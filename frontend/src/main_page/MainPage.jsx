import React, {useState, useEffect} from "react";
import Chat from "../base/Chat";
import Header from "../base/Header";
import MainContent from "./MainContent";
import CoinFlip from "../coinflip/CoinFlip";
import './main_page.css';

const MainPage = () =>{
    const [selectedContent, setSelectedContent] = useState("maincontent");

    useEffect(() => {
        const storedContent = localStorage.getItem('selectedContent');
        if (storedContent) {
          setSelectedContent(storedContent);
        }
      }, []);
    
      // Save the selected content to local storage whenever it changes
      useEffect(() => {
        localStorage.setItem('selectedContent', selectedContent);
      }, [selectedContent]);

    const handleContentChange = (content) =>{
        setSelectedContent(content);
    }

    return(
        <>
            <Header onContentChange={handleContentChange}></Header>
            <main>
                <div className="container">
                    <Chat></Chat>
                    {selectedContent ==="coinflip" && <CoinFlip></CoinFlip>}
                    {selectedContent ==="maincontent" && <MainContent></MainContent>}
                </div>
            </main>

            <footer>
            </footer>
        </>
    );
}

export default MainPage;