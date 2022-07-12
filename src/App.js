import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./movie";
import Filter from "./filter";

const App = () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=9301c34f4398a025d1ebac3bb8eecf4e&language=en-US"
    
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]); 
  const [activeGenre, setActiveGenre] = useState(0);
  
  useEffect(() => {
    fetchPopular();
  }, []);

const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

return (
    <div className="App">
      <h1>Top Popular Movies Of All Time</h1>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />        
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default App;