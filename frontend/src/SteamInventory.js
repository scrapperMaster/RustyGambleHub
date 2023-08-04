import React, { useState, useEffect } from "react";
import axios from "axios";

const SteamInventory = () => {
  const [items, setItems] = useState([]);

  const fetchSteamInventory = async () => {
    try {
      const response = await axios.get(
        "https://b0b6-185-244-215-54.ngrok-free.app/api/get_inventory_items/",
        {
          withCredentials: true, // Передача кук в запросе
        }
      );
      if (response.data && response.data.items) {
        setItems(response.data.items);
      }
    } catch (error) {
      console.error("Error fetching Steam inventory:", error);
    }
  };

  useEffect(() => {
    fetchSteamInventory();
  }, []); // Пустой массив зависимостей, чтобы вызвать fetchSteamInventory только один раз при монтировании

  return (
    <div>
      <h2>Steam Inventory</h2>
      <button onClick={fetchSteamInventory}>Get Inventory</button>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.assetid}>
              {item.name} - {item.amount}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
};

export default SteamInventory;
