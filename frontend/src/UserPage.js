import React from "react";

const UserPage = ({ user }) => {
  if (!user) {
    return <div>User data is not available.</div>;
  }

  return (
    <div>
      <div>Steam ID: {user.steam_id}</div> {/* Обратите внимание на изменение здесь */}
      <div>Username: {user.username}</div> {/* Обратите внимание на изменение здесь */}
      <img width={10+0} src={user.avatar} alt="User Avatar" /> {/* Обратите внимание на изменение здесь */}
    </div>
  );
};

export default UserPage;
