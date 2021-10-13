import React, { useEffect, useState } from "react";
import "../styles/MovieContainer.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function MovieContainer(props) {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <form className="d-flex ">
        <FaSearch className="fa-search" style={{ color: "black" }} />
        <input
          className="form-control input-search"
          type="search"
          placeholder="Search Movies..."
          aria-label="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <FaSearch className="fa-search" style={{ color: "black" }} />
      </form>
      <div className="movie-div">
        <h1>
          <span className="span-1">Browse Latest</span> <br />
          <span className="span-2">Movie Trailers</span>
          <br />
          <span className="span-1">Exclusively on our</span>
          <br />
          <span className="span-1"></span>
          <img
            className="logo-img"
            src="https://archive.org/download/png-movie-ticket-movie-ticket-1-950/png-movie-ticket-movie-ticket-1-950.png"
            alt="logo-1"
          />{" "}
          <span className="span-9">Trailers</span>.com
          <h3 className="head-1">
            <span className="span-2">New</span>{" "}
            <span className="span-1">and</span>{" "}
            <span className="span-2">Coming soon..</span>
          </h3>
        </h1>
      </div>
      <div className="main">
        {movies
          // eslint-disable-next-line
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              value.language.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((movie, idx) => (
            <div key={idx} className=" box">
              <div className="box-img">
                <img alt={"movie-img"} src={movie.image} />
              </div>
              <div className="content">
                <h3>{movie.title}</h3>
                <p>IMDB Rating: {movie.rating}/10</p>
              </div>

              <div className="button">
                <button className=" btn-secondary">
                  <Link to={`/movies/${movie.id}`}>Movie Details</Link>
                </button>

                <div>
                  <br />
                  <button
                    onClick={() => deleteMovie(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <br />
            </div>
          ))}
      </div>
    </>
  );
}

export default MovieContainer;
