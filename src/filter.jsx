import React, { useEffect } from "react";

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular); //Checks- don't do anything, just return all
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre),
    );
    setFiltered(filtered);
  },);

return (
    <div className="filter-container">
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? "btn active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(16)}
        className={activeGenre === 16 ? "btn active" : ""}
      >
        Animation
      </button>       
      <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? "btn active" : ""}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? "btn active" : ""}
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(18)}
        className={activeGenre === 18 ? "btn active" : ""}
      >
        Drama
      </button>      
    </div>
  );
};

export default Filter;