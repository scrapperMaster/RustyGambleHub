import AnimeCard from "./AnimeCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <AnimeCard title="Naruto" year="2002" genre="Comedy"></AnimeCard>
      <AnimeCard title="Berserk" year="1996" genre="Dramm"></AnimeCard>
    </div>
  );
}

export default App;
