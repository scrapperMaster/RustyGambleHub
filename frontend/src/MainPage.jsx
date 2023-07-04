import React from "react";

const MainPage = () =>{
    return(
        <div className="wrapper">
            <header>
                <div class="logo">
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
                <div class="buttons">
                    <a class="discord-button" href="#">Discord</a>
                    <a class="login-button" href="#">Login</a>
                </div>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </div>
    );
}

export default MainPage;