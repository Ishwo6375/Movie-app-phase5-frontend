import React, { useState } from "react";
import { useHistory } from "react-router";

function MovieForm() {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
  const history = useHistory();

  const [movieForm, setMovieForm] = useState({
    title: "",
    description: "",
    language: "",
    runtime: "",
    rating: "",
    image: "",
    video_url: "",
    genre: "",
    director_id: "",
  });

  function onHandlechange(e) {
    setMovieForm({ ...movieForm, [e.target.name]: e.target.value });
  }

  function onSubmitAddMovie(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: movieForm.title,
        description: movieForm.description,
        language: movieForm.language,
        runtime: movieForm.runtime,
        rating: movieForm.rating,
        image: movieForm.image,
        video_url: movieForm.video_url,
        genre: movieForm.genre,
        director_id: movieForm.director_id,
      }),
    };

    fetch(`${baseURL}/movies`, config)
      .then((res) => res.json())
      .then((newMovie) => {
        const newMovies = [movieForm, newMovie];
        setMovieForm(newMovies);
        history.push("/movies");
      });
  }

  return (
    <div className="edit-div">
      <div className="container-1">
        <p className="para">Recently watched a Movie???
        <p className="para">Add movie in our website to review</p>
        
        </p>
        <h2>Enter Movie Details</h2>
        <form className="form-control my-5 py-5 input-div">
          <label>
            <h4>Movie Title</h4>
          </label>
          <div className="div-input">
            <input
            className="input-2 "
              type="text"
              placeholder="Enter Movie title..."
              name="title"
              value={movieForm.title}
              onChange={onHandlechange}
              required
            />
          </div>

          <label>
            <h4>Description</h4>
          </label>
          <div>
            <input
             className="input-2"
              type="text"
              placeholder="Enter Movie Description..."
              name="description"
              value={movieForm.description}
              onChange={onHandlechange}
              required
            />
          </div>

          <label>
            <h4>Language</h4>
          </label>
          <div>
            <input
             className="input-2"
              type="text"
              placeholder="Enter Movie Language"
              name="language"
              value={movieForm.language}
              onChange={onHandlechange}
              required
            />
          </div>
          <label>
            <h4>Runtime</h4>
          </label>
          <div>
            <input
             className="input-2"
              type="text"
              placeholder="Enter runtime.. "
              name="runtime"
              value={movieForm.runtime}
              onChange={onHandlechange}
              required
            />
          </div>

          <label>
            <h4>Rating</h4>
          </label>
          <div>
            <input
             className="input-2"
              type="number"
              placeholder="Enter Movie Rating.."
              name="rating"
              value={movieForm.rating}
              onChange={onHandlechange}
              required
            />
          </div>

          <label>
            <h4>Movie Image</h4>
          </label>
          <div>
            <input
             className="input-2"
              type="text"
              placeholder="Enter Movie Image url..."
              name="image"
              value={movieForm.image}
              onChange={onHandlechange}
              required
            />
          </div>

          <label>
            <h4>Video Url</h4>
          </label>
          <div>
            <input
             className="input-2"
              type="text"
              placeholder="Enter Movie video url..."
              name="video_url"
              value={movieForm.video_url}
              onChange={onHandlechange}
              required
            />
          </div>
          <label>
            <h4>Movie Genre</h4>
          </label>
          <div>
            <input
             className="input-2"
              type="text"
              placeholder="Enter Movie Genre..."
              name="genre"
              value={movieForm.genre}
              onChange={onHandlechange}
              required
            />
          </div>

          <label>
            <h4>Director</h4>
          </label>
          <div>
            <input
             className="input-2"
              type="number"
              placeholder="Enter director id..."
              name="director_id"
              value={movieForm.director_id}
              onChange={onHandlechange}
              required
            />
          </div>

          <button onClick={onSubmitAddMovie} className="btn-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MovieForm;
