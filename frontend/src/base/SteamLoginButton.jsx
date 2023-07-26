import React, { useEffect, useState } from "react";
import axios from "axios";
import UserPage from "../UserPage";

const SteamLoginButton = () => {
    const url = "https://02a4-45-15-146-19.ngrok-free.app";
    const [user, setUser] = useState(null);

    const handleLogin = () => {

        window.location.href = `${url}/api/steam_login/`;
        getAuthUrl();
    };

    const getAuthUrl = () => {
        axios
            .get(`${url}/api/steam_login/`, { withCredentials: true })
            .then((response) => {
                window.location.href = response.data.redirect_url;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => fetchUserData());
    };

    const fetchUserData = () => {
        console.log("click finnaly")
        fetch('https://02a4-45-15-146-19.ngrok-free.app/api/user_data/', {
            credentials: 'include',
        })
            .then(response => {
                // Обработка ответа от бекенда
                console.log(response.data);
            })
            .catch(error => {
                // Обработка ошибки
                console.error(error);
            });
    };

    return (
        <>
            <button onClick={() => fetchUserData()}>finnly</button>
            <button onClick={() => handleLogin()}>Login</button>
            {user && (
                <UserPage></UserPage>
            )}
        </>

    );

};


export default SteamLoginButton;