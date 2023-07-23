import React from "react";

const UserPage = ({ userData }) => {
  return (
    <div>
      <p>Steam ID: {userData.steamid}</p>
      <p>Username: {userData.username}</p>
      <img src={userData.avatar} alt="User Avatar" />
    </div>
  );
};

export default UserPage;
