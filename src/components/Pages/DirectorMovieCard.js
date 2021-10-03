import React from 'react'
import "../styles/DirectorMovieCard.css";

function DirectorMovieCard( {movies, id}) {
 const displayMovies =
    movies && movies.map((movie) => {
          <div>Movie details</div>
      return <div key={id} className="dir-mov">
            <h4 >{movie.title}</h4>
                <img className="movie-image" alt={"movie-img"} src={movie.image} />
            <p>Rate:{movie.rating}/ 10</p>
            <div className="card_cat">

            </div>
           
            <div >
            </div>
            
          
        </div>
        
        });

      
    return (
        <div>
            { displayMovies }
            
        </div>
    )
}

export default DirectorMovieCard
