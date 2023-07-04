import React from "react";

const Header = () => {
    return(
        <header>
        <div className="logo">
            <img src="your-logo.png" alt="Logo"/>
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
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