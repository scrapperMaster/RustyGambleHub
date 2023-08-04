import React, { useEffect, useState } from "react";
import axios from "axios";
import UserPage from "../UserPage";
import SteamInventory from "../SteamInventory";

const SteamLoginButton = () => {
  const url = "https://b0b6-185-244-215-54.ngrok-free.app"; //backend
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Добавляем состояние isLoggedIn

  // Функция для проверки авторизации пользователя
  const checkLoginStatus = () => {
    axios
      .get(`${url}/api/user_data/`, { withCredentials: true })
      .then((response) => {
        if (response.data.user_data) {
          setUser(response.data);
          setIsLoggedIn(true); // Устанавливаем значение true, если пользователь авторизован
        } else {
          setIsLoggedIn(false); // Устанавливаем значение false, если пользователь не авторизован
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // При монтировании компонента проверяем статус авторизации
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    window.location.href = `${url}/api/steam_login/`;
  };

  return (
    <>
      {isLoggedIn ? ( // Проверяем значение isLoggedIn
        <>
          <button onClick={checkLoginStatus}>Refresh User Data</button>
          <UserPage user={user.user_data} />
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      <div>
        {/* Данные пользователя будут отображаться автоматически, если пользователь авторизован */}
      </div>
    </>
  );
};

export default SteamLoginButton;
