import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/MovieDetails.css";
import ReviewCard from "./ReviewCard";
import { FaRegEdit } from "react-icons/fa";

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
    <div className="main-div">
      <div>
        {movie && (
          <>
            <div className="wrapper">
              <Link className="btn btn-info back-link" to={"/Movies"}>
                <h5 className="mx-2">Go Back </h5>
              </Link>

              <div className="main_card">
                <div className="card_left">
                  <div className="card_details">
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="card_cat">
                      <p className="PG">
                        Rating:<span className="span-20"> {movie.rating}</span>
                      </p>
                      <p className="genre">
                        Genre: <span className="span-20"> {movie.genre} </span>
                      </p>
                      <p className="time">
                        Runtime:
                        <span className="span-20"> {movie.runtime}</span>{" "}
                      </p>
                    </div>
                    <h4 className="movie-des">Movie Description</h4>
                    <br />
                    <p className="disc">{movie.description}</p>
                  </div>

                  <div className="card_right">
                    <div className="img_container">
                      <img alt={"movie-img"} src={movie.image} />
                      <button className="btn-trailer btn-secondary">
                        <a className="b1" href={movie.video_url}>
                          Watch Trailer{" "}
                          <img
                            className="watch-icon"
                            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png"
                            alt="watch-icon"
                          />
                        </a>
                      </button>

                      <p className="time mx-5">Language:{movie.language} </p>
                    </div>
                    <br />
                  </div>
                </div>
                <div>
                  <br />
                  <Link to={`/movie/edit/${movie.id}`}>
                    <button className="btn-6">
                      <FaRegEdit className="mx-4" />
                    </button>
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
