import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/MovieDetails.css";
import ReviewCard from "./ReviewCard";



function MovieDetails() {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
  const [movie, setMovie] = useState([]);
  


  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseURL}/movies/${id}`)
      .then((res) => res.json())
      .then((movieDetail) => setMovie(movieDetail));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        {movie && (
          <>

            <div className="wrapper">
              <div className="main_card">
                <div className="card_left">
                  <div className="card_details">
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="card_cat">
                      <p className="PG">Rating:{movie.rating}</p>
                      <p className="genre">Genre: {movie.genre} </p>
                      <p className="time">Runtime:{movie.runtime} </p>
                    </div>
                    <h4 className="movie-des">Movie Description</h4>
                    <br />
                    <p className="disc">{movie.description}</p>
                  </div>

                  <div className="card_right">
                    <div className="img_container">
                      <img alt={"movie-img"} src={movie.image} />
                      <button className="btn btn-secondary">
                        <a
                          className="b1"
                          href={movie.video_url}
                        >
                          Watch Trailer
                        </a>
                      </button>
                      <p className="time mx-5">Language:{movie.language} </p>
                    </div>
                    <br />
                  </div>
                </div>
                <div>
                  <br />
                  <Link
                    className="btn btn-primary mx-3"
                    to={`/movie/edit/${movie.id}`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <div>
              <ReviewCard reviews={movie.reviews} id={id} />
             
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
