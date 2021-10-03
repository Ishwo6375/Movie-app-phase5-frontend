
import React, { useState } from "react";

function ReviewForm() {
    const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
 
  const [reviewForm, setReviewForm] = useState({
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
        comment: reviewForm.comment,
        rating: reviewForm.rating,
        username: reviewForm.username,
        movie_id: reviewForm.movie_id,
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
    <div className="container-1">
      <div>
       
        <h2>Add Review</h2>

        <form className="form-control" >
          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Add your review"
              name="comment"
              value={reviewForm.comment}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={reviewForm.username}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="input-1"
              type="number"
              placeholder="Rating..."
              name="rating"
              value={reviewForm.rating}
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

          <button onClick={onSubmitReviews} className="btn btn-primary" >Add Review</button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
