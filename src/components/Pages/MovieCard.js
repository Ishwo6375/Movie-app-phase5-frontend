import React from "react";
import "../styles/MovieCard.css";


function MovieCard({ movie }) {
  return (
   <div className="container">
        <div className="row px-xl-5 px lg-0">
           <div className="col-md-4">
               <div className="main">
                   <div className="movie-img">
                       
                        <img alt={"movie-image"} src={movie.image} className="movie-cover" />
                   </div>
                   <h6>{movie.title}</h6>
                   <img src="http://www.pngmart.com/files/7/Rating-Star-PNG-Transparent-Image.png" className="rating" />
                    <div className="head1 text-center">
                       <p>Length:</p>
                       <p>Language:</p>
                       <p>Rating:</p>
                    </div>
                    <div className="head2 text-center">
                       <p>Length: {movie.runtime}</p>
                       <p>Language: {movie.language}</p>
                       <p>Rating: {movie.rating}</p>
                    </div>
               </div>
           </div>
        </div>
       </div>
  );
}

export default MovieCard;
