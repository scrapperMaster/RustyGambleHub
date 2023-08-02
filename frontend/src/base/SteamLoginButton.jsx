import React, {useEffect, useState} from "react";
import axios from "axios";
import UserPage from "../UserPage";

const SteamLoginButton = () => {
    const url = "https://db7e-5-254-43-230.ngrok-free.app";
    const [user, setUser] = useState(null);

    const handleLogin = () => {

        window.location.href = `${url}/api/steam_login/`;
        getAuthUrl();
    };

    const getAuthUrl = () => {
        axios
            .get(`${url}/api/steam_login/`, {withCredentials: true})
            .then((response) => {
                window.location.href = response.data.redirect_url;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                fetchUserData();
            });
    };

    const fetchUserData = () => {
        console.log("click finnaly")
        axios
            .get(`${url}/api/user_data/`, {withCredentials: true})
            .then((response) => {
                setUser(response.data);
                console.log('user: ', user);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('Всё успешно!')
            });
    };

    useEffect(() => {
        console.log('user in useEffect: ', user);
    }, []);

    const handleFetchUserData = () => {
        fetchUserData();
    };

    return (
        <>
            <button onClick={handleFetchUserData}>finnly</button>
            <button onClick={() => handleLogin()}>Login</button>
            {/* Отображайте данные только если user не равен null */}
            {user && (
                <UserPage user={user.user_data} />

            )}
            <div>
                {/*<p>Steam ID: {user.steamid}</p>*/}
                {/*<p>Username: {user.username}</p>*/}
                {/*<img src={user.avatar} alt="User Avatar" />*/}
            </div>
        </>
    );

};


export default SteamLoginButton;