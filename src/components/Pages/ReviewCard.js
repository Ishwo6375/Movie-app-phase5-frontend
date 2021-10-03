import React from "react";

function ReviewCard({ reviews, id }) {
  const displayReviews =
    reviews &&
    reviews.map((review) => {
      return (
        <div>
          <h4>{review.comment}</h4>
          <h4>User: {review.username}</h4>
           <p>{review.created_at} minutes ago..</p>
    
        </div>
      );
    });
  return (
    <div>
      <div>
        <h1>Review Movie</h1>
        {displayReviews}
      </div>
    </div>
  );
}

export default ReviewCard;
