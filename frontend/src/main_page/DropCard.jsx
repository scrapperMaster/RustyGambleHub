import React from "react";

const DropCard = () =>{
    return(
        <div class="drop-card">
            <img className="drop-card-bg-img" src="/coin.png"></img>
            <div className="card-title">Drop</div>
            <div className="card-center">1000<br></br><span className="coloring-span">$</span></div>
            <div className="card-right-corner timer">10:00</div>
        </div>
    );
}

export default DropCard;