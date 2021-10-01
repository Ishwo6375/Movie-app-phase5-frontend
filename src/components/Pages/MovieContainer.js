import React, { useEffect, useState } from "react";
import "../styles/MovieContainer.css";
import { Link } from "react-router-dom";


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

  function deleteMovie(movie) {
    fetch(`${baseURL}/movies/${movie.id}`, {
      method: "DELETE",
    });
    const newMovie = movies.filter((mov) => mov.id !== movie.id);
    setMovies(newMovie);
  }

  
  return (
    <>
     <div className="movie-div">
              <h1>Watch Movie Trailers
                <br />
                 Exclusively on our 

                 <br />
                  
                  WEBSITE...
              </h1>
            </div>
     <div className="main">
       {movies.map((movie,idx)=> (
    <div key={idx} className=" box">
     
      <div className="box-img">
           <img  alt={"movie-img"} src={movie.image} />
      </div>
      <div className="content">
    
         <h3>{movie.title}</h3>
         <p>IMDB Rating:{movie.rating}</p>
      </div>

      <div className="button">
        <button className=" btn-secondary">
               <Link  to={`/movies/${movie.id}`}>
                  Movie Details
                </Link>

        </button>
          <button
                onClick={() => deleteMovie(movie)}
                className="btn btn-danger mx-2">Del
              </button>
      </div>
         

         <br />
      <div>

      </div>
      
    </div>

       ))}
   
    </div>
    </>
  );
}

export default MovieContainer;
