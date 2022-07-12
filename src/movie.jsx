import React from "react";

const Movie = ({movie}) => {
  return (
    <div>
      <h4>{movie.title}</h4>
      {/* <img src={movie.image} alt={movie.title}/> */}

      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title}/>
      <p>{movie.overview}</p>
      <p><strong>Language:</strong> {movie.original_language}</p>
      <p><strong>Vote Count</strong> {movie.vote_count}</p>
    </div>
  );
};
export default Movie;