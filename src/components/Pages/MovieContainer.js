
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";



function MovieContainer() {
     const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";

     const [movies, setMovies] = useState([]);

     useEffect(() => {
    showMovies();
  }, []);

  function showMovies() {
    fetch(`${baseURL}/movies`)
      .then((res) => res.json())
      .then((movieData) => setMovies(movieData)); 
  }

  
   const movieCards = movies.map((movie, idx) => <MovieCard key={idx} movie={movie}/>)
  
  
    return (
        <div className="movies-container">
          <div>
            
           { movieCards}
          </div>
            
        </div>
    )
}

export default MovieContainer
