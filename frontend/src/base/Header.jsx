import React, { useEffect, useState } from "react";
import SteamLogin from "../SteamLoginButton";
import SteamLoginButton from "./SteamLoginButton";
import { Link } from "react-router-dom";
import Chat from "./Chat";
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
    <>
      <header>
        <div className="logo">
          <Link to="/" title="RustyGamble">
            <img src="/logo-test.png" alt="Logo" />
          </Link>
        </div>

        {isMobile ? (
          <>
            <button
              className={`close-sidebar ${isSidebarOpen ? "" : "open-sidebar"}`}
              onClick={handleOpenBar}
            >
              <img
                className="bt-burger-img"
                src={`${!isSidebarOpen ? "/burger-bt.png" : "/close-bt.png"}`}
              />
            </button>
            <div
              className={`right-sidebar ${
                isSidebarOpen ? "" : "close-right-sidebar"
              }`}
            >
              <nav>
                <ul>
                  <li>
                    <Link to="/coinflip">
                      Coin<span className="coloring-span">Flip</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/jackpot">
                      Jack<span className="coloring-span">Pot</span>
                    </Link>
                  </li>
                  <Link to="/faq">
                    <a href="#">FAQ</a>
                  </Link>
                  <Link to="/contact">
                    <a href="#">Contact</a>
                  </Link>
                </ul>
              </nav>
              <div className="buttons">
                <a className="discord-button" href="#">
                  Discord
                </a>
                <SteamLoginButton />{" "}
                {/* Вставляем компонент SteamLoginButton */}
                <button
                  className={`close-sidebar ${
                    isSidebarOpen ? "" : "open-sidebar"
                  }`}
                  onClick={handleOpenBar}
                ></button>
              </div>
            </div>
          </>
        ) : (
          <>
            <nav>
              <ul>
                <li>
                  <Link to="/coinflip">
                    Coin<span className="coloring-span">Flip</span>
                  </Link>
                </li>
                <li>
                  <Link to="/jackpot">
                    Jack<span className="coloring-span">Pot</span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="buttons">
              <Link className="discord-button" to="#" target="_blank">
                Discord
              </Link>
              <SteamLoginButton /> {/* Вставляем компонент SteamLoginButton */}
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
