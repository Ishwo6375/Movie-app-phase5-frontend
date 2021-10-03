import React from "react";
import React, { useState } from "react";
import { useHistory } from "react-router";

function ReviewForm() {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
  const history = useHistory();
  const [reviewFrom, setReviewForm] = useState({
    comment: "",
    rating: "",
    username: "",
    movie_id: "",
  });

  function onHandleChange(e) {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  }

  function onSubmitReviews(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: reviewFrom.comment,
        rating: reviewFrom.rating,
        username: reviewFrom.username,
        movie_id: reviewFrom.movie_id,
      }),
    };

    fetch(`${baseURL}/reviews`, config)
      .then((res) => res.json())
      .then((newReview) => {
        const newReviews = [reviewForm, newReview];
        setReviewForm(newReviews);
        history.push(`/movies/${movie.id}`);
      });
  }

  return (
    <div className="container-1">
      <div>
        <h2>Add Review</h2>

        <form className="form-control">
          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Add your review"
              name="comment"
              value={reviewFrom.comment}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={reviewFrom.username}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="number"
              placeholder="Rating..."
              name="rating"
              value={reviewFrom.rating}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="number"
              placeholder=""
              name="movie_id"
              value={reviewFrom.movie_id}
              onChange={onHandleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
