import React, { useEffect, useState } from "react";
import "../styles/MovieContainer.css";
import { Link } from "react-router-dom";

function MovieContainer() {
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
         <form className="d-flex my-3">
          <input
            className="text form-control me-3"
            type="search"
            placeholder="search Movies.."
            aria-label="Search"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      <div className="movie-div">
        <h1>
          Watch Movie Trailers
          <br />
          Exclusively on our
          <br />
          WEBSITE...
        </h1>
      </div>
      <div className="main">
        {movies.filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              value.language.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          }).map((movie, idx) => (
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
              <div >
                <br />
              <button
                onClick={() => deleteMovie(movie)}
                className=" btn-danger">Delete</button>

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
