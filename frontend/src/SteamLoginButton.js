// Ваш компонент SteamLogin

import React, {useEffect, useState} from "react";
import axios from "axios";
import UserPage from "./UserPage";

const SteamLogin = () => {
    const [redirectToSteam, setRedirectToSteam] = useState(false);
    const [showRedirectMessage, setShowRedirectMessage] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoadingUserData, setIsLoadingUserData] = useState(true); // Add this line

    const handleSteamLogin = () => {
        console.log("Клик по кнопке Войти через Steam");
        setRedirectToSteam(true);
        window.location.href = 'http://localhost:8005/api/steam_login/';
    };

    useEffect(() => {
        if (redirectToSteam) {
            getAuthUrl();
        }
    }, [redirectToSteam]);

    const getAuthUrl = () => {
        axios
            .get("http://localhost:8005/api/steam_login/")
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
            .get("http://localhost:8005/api/user_data/", {
                withCredentials: true, // Важно добавить эту опцию для передачи аутентификационных данных
            })
            .then((response) => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (redirectToSteam) {
            return; // Ничего не делаем, если redirectToSteam === true
        }
        // Выполняем запрос к API для получения данных пользователя
        fetchUserData();
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

    // if (isLoadingUserData) {
    //   return <p>Loading...</p>;
    // }

    // Проверяем, что user не равен null или undefined перед отображением UserPage
    if (user !== null && user !== undefined) {
        return (
            <div>
                <UserPage userData={user}/>
                {/*<button onClick={handleLogout}>Выйти</button>*/}
            </div>
        );
    }

    return (
        <button onClick={handleSteamLogin}>
            Войти через Steam
        </button>
    );
};

export default SteamLogin;


// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
//
// const SteamLogin = () => {
//     const [redirectToSteam, setRedirectToSteam] = useState(false);
//     const [user, setUser] = useState(null);
//
//     const handleSteamLogin = () => {
//         console.log("Клик по кнопке Войти через Steam");
//         setRedirectToSteam(true);
//     };
//
//     const getAuthUrl = () => {
//   const params = new URLSearchParams({
//     return_to: 'https://af74-5-254-43-226.ngrok-free.app/api/auth/login/steam/', // Используйте адрес вашего клиентского URL для перенаправления после аутентификации
//   });
//
//   axios.get(`http://localhost:8005/api/get_steam_auth_url/?${params.toString()}`)
//     .then((response) => {
//       window.location.replace(response.data.auth_url); // Используйте window.location.replace вместо window.location.href
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
//
//
//
//     // Функция для получения данных пользователя
//     const fetchUserData = () => {
//         axios.get('http://localhost:8005/api/user_data/')
//             .then((response) => {
//                 setUser(response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };
//
//     useEffect(() => {
//         console.log("Компонент SteamLogin смонтирован.");
//         console.log("redirectToSteam:", redirectToSteam);
//
//         // Выполняем запрос к API для получения данных пользователя
//         fetchUserData();
//     }, [redirectToSteam]);
//
//     useEffect(() => {
//         if (redirectToSteam) {
//             getAuthUrl(); // Вызываем функцию, чтобы получить URL аутентификации Steam и выполнить перенаправление
//         }
//     }, [redirectToSteam]);
//
//     if (redirectToSteam) {
//         return (
//             <form method="post" action="https://steamcommunity.com/openid/login">
//                 <input type="hidden" name="openid.claimed_id"
//                        value="http://specs.openid.net/auth/2.0/identifier_select"/>
//                 <input type="hidden" name="openid.identity" value="http://specs.openid.net/auth/2.0/identifier_select"/>
//                 <input type="hidden" name="openid.mode" value="checkid_setup"/>
//                 <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0"/>
//                 <input type="hidden" name="openid.realm" value="http://localhost:8005/api/auth/login/steam/"/>
//                 <input type="hidden" name="openid.return_to" value="http://localhost:8005/api/auth/login/steam/"/>
//                 <input type="hidden" name="openid.mode" value="checkid_setup"/>
//                 <input type="submit" value="Войти через Steam"/>
//             </form>
//         );
//     }
//
//     if (user) {
//         return (
//             <div>
//                 <p>SteamID: {user.steam_id}</p>
//                 {/* Дополнительные поля о пользователе, если они есть */}
//                 {/* Например: <p>Username: {user.username}</p> */}
//             </div>
//         );
//     }
//
//     return (
//         <button onClick={handleSteamLogin}>
//             Войти через Steam
//         </button>
//     );
// };
//
// export default SteamLogin;
