import React from "react";

const AnimeCard = ({anime}) =>{
    return(
        <div className="anime-card">
            <div className="anime-title">
                {anime.title}
            </div>
            <div className="anime-img-container">
                <img 
                    className="animge-img"
                    src={anime.image}
                    alt="AnimeCard">
                </img>
            </div>
            <div className="anime-genre">
                {anime.genres.map((genre) => (
                    <>
                    <h3 style={{display: "inline"}}>{genre.name} </h3>
                    <time> {formatDate(genre.created_at)} </time>
                    </>
                ))} 
            </div>
            <div className="anime-year">
                {anime.year}
            </div>
            <div className="time-container">
                Created at <time> {formatDate(anime.created_at)} </time>
            </div>
        </div>
    );
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

export default AnimeCard;