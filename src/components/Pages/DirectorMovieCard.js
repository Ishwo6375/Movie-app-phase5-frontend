import React from 'react'
import "../styles/DirectorMovieCard.css";

function DirectorMovieCard( {movies, id}) {
 const displayMovies =
    movies && movies.map((movie) => {
          
      return <div className="dir-mov" key={id} >
            <h4  className="span-3">{movie.title}</h4>
                <img className="movie-image" alt={"movie-img"} src={movie.image} />
            <p className="span-3">Rate:{movie.rating}/ 10</p>
            <div className="card_cat">

            </div>
           
            <div >
            </div>
            
          
        </div>
        
        });

      
    return (
        <>
        <h2 className="span-5">Popular Movies</h2>
        <div>
            
            { displayMovies }
            
        </div>
        </>
    )
}

export default DirectorMovieCard
