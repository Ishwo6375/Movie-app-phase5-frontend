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

  
  return (
    <>
     <div className="movie-div">
              <h1>Know Famous directors
                <br />
                 Top Listed Director of 2021

                 <br />
                  
                  Check out Directors
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
