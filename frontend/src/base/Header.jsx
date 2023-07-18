import React, {useEffect, useState} from "react";
import SteamLogin from "../SteamLoginButton";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleOpenBar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isMobile = windowWidth < 1115;

    return (
        <header>
            <div className="logo">
                <a href="#" title="RustyGamble">
                    <img src="/logo.png" alt="Logo"/>
                </a>
            </div>

            {isMobile ? (

                <>

                    <button className={`close-sidebar ${isSidebarOpen ? "" : "open-sidebar"}`} onClick={handleOpenBar}>
                        <img className="bt-burger-img"
                             src={`${!isSidebarOpen ? "/burger-bt.png" : "/close-bt.png"}`}></img>
                    </button>
                    <div className={`right-sidebar ${isSidebarOpen ? "" : "close-right-sidebar"}`}>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Coin<span className="coloring-span">Flip</span></a>
                                </li>
                                <li>
                                    <a href="#">Jack<span className="coloring-span">Pot</span></a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="buttons">
                            <a className="discord-button" href="#">
                                Discord
                            </a>
                            <a className="login-button" href="#">
                                Login
                            </a>
                            <SteamLogin/> {/* Вставляем компонент SteamLoginButton */}
                            <button className={`close-sidebar ${isSidebarOpen ? "" : "open-sidebar"}`}
                                    onClick={handleOpenBar}>
                                {/* ... */}
                            </button>
                            {/* ... */}
                        </div>
                    </div>
                </>

            ) : (
                <>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Coin<span className="coloring-span">Flip</span></a>
                            </li>
                            <li>
                                <a href="#">Jack<span className="coloring-span">Pot</span></a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <a className="discord-button" href="#">
                            Discord
                        </a>
                        <SteamLogin/> {/* Вставляем компонент SteamLoginButton */}
                        <button
                            className={`close-sidebar ${isSidebarOpen ? '' : 'open-sidebar'}`}
                            onClick={handleOpenBar}
                        >
                            {/* ... */}
                        </button>
                        {/* ... */}
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
