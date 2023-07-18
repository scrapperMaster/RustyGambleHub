import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SteamLogin = () => {
  const [redirectToSteam, setRedirectToSteam] = useState(false);
  const [user, setUser] = useState(null);

  const handleSteamLogin = () => {
  console.log("Клик по кнопке Войти через Steam");
  setRedirectToSteam(true);
};

  const getAuthUrl = () => {
    axios.get('http://localhost:8005/api/get_steam_auth_url/', {
      params: {
        return_to: 'http://localhost:3000', // Укажите ваш клиентский URL для перенаправления после аутентификации
      },
    })
      .then((response) => {
        const authUrl = response.data.auth_url;
        window.location.href = authUrl;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Функция для получения данных пользователя
  const fetchUserData = () => {
    // axios.get('http://localhost:8005/api/user_data/')
    //   .then((response) => {
    //     setUser(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
  console.log("Компонент SteamLogin смонтирован.");
  console.log("redirectToSteam:", redirectToSteam);

  // Выполняем запрос к API для получения данных пользователя
  fetchUserData();
}, [redirectToSteam]);

  useEffect(() => {
    if (redirectToSteam) {
      getAuthUrl(); // Вызываем функцию, чтобы получить URL аутентификации Steam и выполнить перенаправление
    }
  }, [redirectToSteam]);

  if (redirectToSteam) {
    return (
      <form method="post" action="https://steamcommunity.com/openid/login">
        <input type="hidden" name="openid.claimed_id" value="http://specs.openid.net/auth/2.0/identifier_select" />
        <input type="hidden" name="openid.identity" value="http://specs.openid.net/auth/2.0/identifier_select" />
        <input type="hidden" name="openid.mode" value="checkid_setup" />
        <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
        <input type="hidden" name="openid.realm" value="http://localhost:8005/api/auth/login/steam/" />
        <input type="hidden" name="openid.return_to" value="http://localhost:8005/api/auth/login/steam/" />
        <input type="hidden" name="openid.mode" value="checkid_setup" />
        <input type="submit" value="Войти через Steam" />
      </form>
    );
  }

  if (user) {
    return (
      <div>
        <p>SteamID: {user.steam_id}</p>
        {/* Дополнительные поля о пользователе, если они есть */}
        {/* Например: <p>Username: {user.username}</p> */}
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
