import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPage = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8005/api/user_data/', { withCredentials: true });
        if (response.status === 200) { // Здесь изменено с 302 на 200
          setUserDetails(response.data);
        } else {
          console.log('Request failed with status ' + response.status);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Steam ID: {userDetails.steam_id}</p>
      <p>Username: {userDetails.username}</p>
      <img src={userDetails.avatar} alt="User Avatar" />
    </div>
  );
};

export default UserPage;
