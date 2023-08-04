import React from "react";
import SteamInventory from "./SteamInventory";
import axios from "axios";

const UserPage = ({user}) => {
    const url = "https://b0b6-185-244-215-54.ngrok-free.app"; //backend

    if (!user) {
        return <div>User data is not available.</div>;
    }

    const handleLogout = async () => {
        try {
            await axios.get(`${url}/api/logout/`, {withCredentials: true}); // Добавляем withCredentials: true
            window.location.reload(); // Перезагружаем страницу после выхода
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };


    return (
        <div>
            <div>Steam ID: {user.steam_id}</div>
            <div>Username: {user.username}</div>
            <img width={100} src={user.avatar} alt="User Avatar"/>
            <button onClick={handleLogout}>Logout</button>
            {/* Кнопка для выхода */}
            <SteamInventory/>
        </div>
    );
};

export default UserPage;
