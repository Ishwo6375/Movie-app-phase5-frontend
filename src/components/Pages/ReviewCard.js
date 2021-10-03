import React from "react";
import ReviewForm from "./ReviewForm";

function ReviewCard({ reviews, id }) {
  const displayReviews =
    reviews && reviews.map((review) => {
      return <div key={id}>
            <h4>User: {review.username}</h4>
            <h5>Comment:{review.comment}</h5>
            <p>Rate:{review.rating}/ 10</p>

            <p>{review.created_at} minutes ago..</p>
        
          <button className="btn btn-secondary">Edit</button>
          
        </div>});

  return (
    <div>
      <div>
        <h1>Review Movie</h1>

        <br />
        <div>
          <h4>Most Recent Reviews</h4>
          <ReviewForm />
          {displayReviews}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
