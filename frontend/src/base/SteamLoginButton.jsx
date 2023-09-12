import React, { useEffect, useState } from "react";
import axios from "axios";
import UserPage from "../UserPage";
import SteamInventory from "../SteamInventory";
import "./SteamLoginButton.scss";
import { Link } from "react-router-dom";
const SteamLoginButton = () => {
  const url = "https://1f14-95-174-127-174.ngrok-free.app"; //backend
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

  return (
    <>
      {isLoggedIn ? ( // Проверяем значение isLoggedIn
        <>
          <button onClick={checkLoginStatus}>Refresh User Data</button>
          <UserPage user={user.user_data} />
        </>
      ) : (
        <Link to={`${url}/api/steam_login/`}>
          <button className="login__btn">Login</button>
        </Link>
      )}

      <div>
        {/* Данные пользователя будут отображаться автоматически, если пользователь авторизован */}
      </div>
    </>
  );
};

export default SteamLoginButton;
