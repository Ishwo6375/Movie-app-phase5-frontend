
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

function ReviewForm() {
     const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
  const history = useHistory();
   const { id } = useParams();

  const [reviewForm, setReviewForm] = useState({
   comment: "",
   username: "",
    rating: "",
    movie_id: ""
  });

  function onHandleChange(e) {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });

  }

  //Post request to get new course

  function onSubmitAddReviews(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: reviewForm.comment,
        username: reviewForm.username,
        rating: reviewForm.rating,
        movie_id: reviewForm.movie_id
      }),
    };

    fetch(`${baseURL}/reviews`, config)
      .then((res) => res.json())
      .then((newReview) => {
        const newReviews = [reviewForm, newReview];
        setReviewForm(newReviews);
        
      });
  }

  return (
    <div className="container-1 ">
      <div>
        <h2 className="add">Review Movie</h2>

        <form className="form-control my-5 py-5 ">
          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Write comment here..."
              name="comment"
              value={reviewForm.comment}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="number"
              placeholder="Rate movie..."
              name="rating"
              value={reviewForm.rating}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="text"
              placeholder="enter your username"
              name="username"
              value={reviewForm.username}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="number"
              placeholder="Enter movie id"
              name="movie_id"
              value={reviewForm.movie_id}
              onChange={onHandleChange}
            />
          </div>
          <br />
          <button onClick={onSubmitAddReviews} className="btn-4">
            Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
