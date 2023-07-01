import React from "react";

const AnimeCard = (anime) =>{
    return(
        <div className="anime-card">
            <div className="anime-title">
                {anime.title}
            </div>
            <div className="anime-img-container">
                <img 
                    className="animge-img"
                    src="https://imgholder.ru/400/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson"
                    alt="AnimeCard">
                </img>
            </div>
            <div className="anime-genre">
                {anime.genre}
            </div>
            <div className="anime-year">
                {anime.year}
            </div>
        </div>
    );
}

export default AnimeCard;