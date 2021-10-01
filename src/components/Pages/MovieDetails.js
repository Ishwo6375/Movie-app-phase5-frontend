import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieDetails() {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
  const [movie, setMovie] = useState([]);

   const { id } = useParams();

   useEffect(() => {
    fetch(`${baseURL}/movies/${id}`)
    .then((res) => res.json())
    .then((movieDetail) => setMovie(movieDetail));
     // eslint-disable-next-line
   }, [])  



  return (

    <div>
       <div className="movie-container">
           {movie && (
               <>
               <h1>{movie.title}</h1>
                <img  alt={"movie-img"} src={movie.image} />
                <h4>Description: {movie.description}</h4>
                <h5>Run Time: {movie.runtime}</h5>
                <h5>Genre: {movie.genre}</h5>
                <h5>Language: {movie.language}</h5>
               
                <div className="button">
            <button className="btn btn-secondary">
          <a className="b1" href={movie.video_url} target="_blank">
            Watch Trailer
          </a>
        </button>
                </div>
      </>
           )}
         
       </div>
    </div>
  );
}

export default MovieDetails;
