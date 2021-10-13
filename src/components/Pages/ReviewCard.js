import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import ReviewForm from "./ReviewForm";

function ReviewCard({ reviews, id }) {
  // eslint-disable-next-line
  const [rev, setReviews] = useState([]);
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";

  useEffect(() => {
    populateReviews();
  }, []);

  function populateReviews() {
    fetch(`${baseURL}/reviews`)
      .then((res) => res.json())
      .then((revData) => setReviews(revData));
  }

  function deleteReview(review) {
    fetch(`${baseURL}/reviews/${review.id}`, {
      method: "DELETE",
    });
    const newReview = reviews.filter((rev) => rev.id !== review.id);
    setReviews(newReview);
  }

  const displayReviews =
    reviews &&
    reviews.map((review) => {
      return (
        <div key={id} className="review-container">
          <h3>
            <span>Username:</span> {review.username}
          </h3>
          <h4>{review.comment}</h4>

          <h5>Rate: {review.rating}</h5>
          <p>{review.created_at} minutes ago..</p>
          <button
            onClick={() => deleteReview(review)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      );
    });

  return (
    <div className="review-body">
      <div className="review-div">
        <h1 className="review-head">
          <Link className="review-link" to={"/reviews"}>
            <h4>Review This Movie</h4>
          </Link>
        </h1>

        <br />
        <div>
          <h4 className="review-head">Most Recent Reviews</h4>

          {displayReviews}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
