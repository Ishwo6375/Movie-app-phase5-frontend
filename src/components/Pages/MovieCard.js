import React from "react";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div >
      <div className="container">
          <h3>{movie.title}</h3>
        <img className="movie-i" alt={"movie-img"} src={movie.image} />
        <div className="movie-content">
            <div>Rating: {movie.rating}</div>
        </div>
        <div>
            <button className="btn btn-secondary">
                 <a herf={movie.video_url}>Watch Trailer</a>
            </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
