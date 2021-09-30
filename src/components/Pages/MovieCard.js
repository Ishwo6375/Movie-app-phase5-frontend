import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <div className="poster">
          <img alt={"movie-img"} src={movie.image} />
      </div>
    </div>
  );
}

export default MovieCard;
