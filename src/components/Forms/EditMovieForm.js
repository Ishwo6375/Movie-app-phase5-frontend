import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import "./EditMovieForm.css";
// import { Link } from "react-router-dom";

function EditMovieForm() {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
  const history = useHistory();
   const { id } = useParams();

   const [editMovie, setEditMovie] = useState({
    title: "",
    description: "",
    language: "",
    runtime: "",
    rating: "",
    image: "",
    video_url: "",
    genre: "",
    director_id: "" 
   })

    function onHandlechange(e) {
    setEditMovie({ ...editMovie, [e.target.name]: e.target.value });
  }

   useEffect(() => {
    showEditMovieForm();
    // eslint-disable-next-line
  }, []);

  function showEditMovieForm() {
    fetch(`${baseURL}/movies/${id}`)
      .then((res) => res.json())
      .then((movData) => setEditMovie(movData));
  }

   function onSubmitEditMovie(e){
         e.preventDefault();
        fetch(`${baseURL}/movies/${id}`, {
            method: "PATCH",
            headers: {
         Accept: "application/json",
        "content-Type": "application/json",
            },
            body: JSON.stringify(editMovie),
            })
            .then((res) => res.json())
            .then((newMovie) => {
                setEditMovie(newMovie);
                history.push(`/movies/${id}`)
            })
   }


    return (
       <div className="edit-div">
      <div className="container-1">
        <h2>Edit Movie Details</h2>
        <form className="form-control my-5 py-5 input-div" onSubmit={onSubmitEditMovie}>
          <label>
            <h4>Movie Title</h4>
          </label>
          <div >
            <input
             className="input-2"
              type="text"
              placeholder="Enter new Movie title..."
              name="title"
              value={editMovie.title}
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
              value={editMovie.description}
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
              value={editMovie.language}
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
              value={editMovie.runtime}
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
              value={editMovie.rating}
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
                value={editMovie.image}
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
                  value={editMovie.video_url}
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
                    value={editMovie.genre}
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
                    value={editMovie.director_id}
                    onChange={onHandlechange}
                    required
                  />
                </div>
                  
               
              
           
        
          <button className="btn-4">
            Update
          </button>
        </form>
      </div>
    </div>
    )
}

export default EditMovieForm
