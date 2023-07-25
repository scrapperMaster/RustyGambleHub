import React, {useEffect, useState} from "react";
import axios from "axios";
import UserPage from "./UserPage";

const SteamLogin = () => {
    const [redirectToSteam, setRedirectToSteam] = useState(false);
    const [showRedirectMessage, setShowRedirectMessage] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoadingUserData, setIsLoadingUserData] = useState(true);

    const handleSteamLogin = () => {
        console.log("Клик по кнопке Войти через Steam");
        setRedirectToSteam(true);
        window.location.href = "http://127.0.0.1:8005/api/steam_login/";
    };

    useEffect(() => {
        if (redirectToSteam) {
            getAuthUrl();
        }
    }, [redirectToSteam]);

    const getAuthUrl = () => {
        axios
            .get("http://127.0.0.1:8005/api/steam_login/")
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
            .get("http://127.0.0.1:8005/api/user_data/", {
                withCredentials: true,
            })
            .then((response) => {
                setUser(response.data);
                console.log(response.data);
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

export default SteamLogin;

