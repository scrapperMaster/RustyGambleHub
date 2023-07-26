import React, {useEffect, useState} from "react";
import axios from "axios";
import UserPage from "./UserPage";

const SteamLogin = () => {
    const url = "https://02a4-45-15-146-19.ngrok-free.app";
    const [redirectToSteam, setRedirectToSteam] = useState(false);
    const [showRedirectMessage, setShowRedirectMessage] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoadingUserData, setIsLoadingUserData] = useState(true);

    const handleSteamLogin = () => {
        console.log("Клик по кнопке Войти через Steam");
        setRedirectToSteam(true);
        window.location.href = `${url}/api/steam_login/`;
    };

    useEffect(() => {
        if (redirectToSteam) {
            getAuthUrl();
        }
    }, [redirectToSteam]);

    const getAuthUrl = () => {
        axios
            .get(`${url}/api/steam_login/`)
            .then((response) => {
                setRedirectToSteam(false);
                setShowRedirectMessage(true);
                window.location.href = response.data.redirect_url;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fetchUserData = () => {
        axios
            .get(`${url}/api/user_data/`, {
                withCredentials: true,
            })
            .then((response) => {
                setUser(response.data);
                console.log("response" + response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoadingUserData(false);
            });
    };

    useEffect(() => {
        if (!redirectToSteam) {
            fetchUserData();
        }
    }, [redirectToSteam]);

    if (redirectToSteam) {
        return (
            <div>
                <button onClick={handleSteamLogin}>Войти через Steam</button>
                {showRedirectMessage && (
                    <p>Перенаправление на страницу Steam для аутентификации...</p>
                )}
            </div>
        );
    }

    if (isLoadingUserData) {
        return <p>Loading...</p>;
    }
    console.log('user: ' + user)
    if (user !== null && user !== undefined) {
        return (
            <div>
                <UserPage/>
            </div>
        );
    }

    return (
        <>
            <div>
                <UserPage/>
            </div>
            <button onClick={handleSteamLogin}>
                Войти через Steam
            </button>
        </>

    );
};

// export default SteamLogin;

