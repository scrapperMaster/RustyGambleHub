import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPage = () => {
  const [userDetails, setUserDetails] = useState(null);

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const response = await axios.get('https://02a4-45-15-146-19.ngrok-free.app/api/user_data/', { withCredentials: true });
  //       if (response.status === 200) { // Здесь изменено с 302 на 200
  //         setUserDetails(response.data);
  //       } else {
  //         console.log('Request failed with status ' + response.status);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserDetails();
  // }, []);

  const fetchUserDetails = async () => {
    //   try {
    //     const response = await axios.get('https://02a4-45-15-146-19.ngrok-free.app/api/user_data/', { withCredentials: true });
    //     if (response.status === 302) { // Здесь изменено с 302 на 200
    //       setUserDetails(response.data);
    //     } else {
    //       console.log('Request failed with status ' + response.status);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   }
    // };
    axios.get('https://02a4-45-15-146-19.ngrok-free.app/api/user_data/')
    .then(response => {
      // Handle the successful response here
      console.log(response.data);
    })
    .catch(error => {
      // Handle the error here
      console.error(error);
    });
  };

    if (!userDetails) {
      return <div onClick={() => fetchUserDetails()}>poshel nah</div>;
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
