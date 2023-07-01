import AnimeCard from "./AnimeCard";
import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';

const API_URL = 'http://127.0.0.1:8005'

function App() {
  const [animes, setAnime] = useState([]);

  const componentDidMount = () =>{
    axios.get(`${API_URL}/anime/`)
      .then(response => {
        // Обработка полученных данных
        console.log(response.data);
        setAnime(response.data);
      })
      .catch(error => {
        // Обработка ошибок
        console.error(error);
      });
  }
  useEffect(() => {
    componentDidMount();
}, [])
  

  return (
    <div className="App">
      {animes.map((anime) => (
      <AnimeCard anime={anime}></AnimeCard>
    ))} 
    </div>
  );
}

export default App;
