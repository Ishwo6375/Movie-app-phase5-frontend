// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { useHistory } from "react-router";



function ReviewForm() {
     const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
    //  const history = useHistory();
      // const { id } = useParams();
  


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
        // history.push("review")
        
      });
  }

  return (
    <div className="container-2 ">
      <div>
        <h2 className="span-1">Review Movie</h2>

        <form>
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
          <button onClick={onSubmitAddReviews} className="btn-5">
            Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
