import React from "react";

const Header = () => {
    return(
        <header>
        <div className="logo">
            <a href="#" title="RustyGamble"><img src="/logo.gif" alt="Logo"/></a>
        </div>
        <nav>
            <ul>
                <li><a href="#">Coin<span className="coloring-span">Flip</span></a></li>
                <li><a href="#">Jack<span className="coloring-span">Pot</span></a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div className="buttons">
            <a className="discord-button" href="#">Discord</a>
            <a className="login-button" href="#">Login</a>
        </div>
    </header>
    );
}

export default Header;