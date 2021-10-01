import React, { useEffect, useState } from "react";
import "../styles/MovieCard.css";


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

  
  return (
     <div className="main">
       {movies.map((movie,idx)=> (
    <div className=" box">
     
      <div className="box-img">
           <img  alt={"movie-img"} src={movie.image} />
      </div>
      <div className="content">
    
         <h3>{movie.title}</h3>
         <p>IMDB Rating:{movie.rating}</p>
      </div>

      <div className="button">
          <button className="btn btn-secondary">
          <a className="b1" href={movie.video_url} target="_blank">
            watch trailer
          </a>
        </button>
      </div>
      
    </div>

       ))}
   
    </div>
  );
}

export default MovieContainer;
