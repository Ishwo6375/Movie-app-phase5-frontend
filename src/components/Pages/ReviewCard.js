// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";


function ReviewCard({ reviews, id }) {

  

  
  //  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";


  const displayReviews =
    reviews && reviews.map((review) => {
      return <div key={id} className="review-container">
            <h3><span>Username:</span> {review.username}</h3>
            <h4>{review.comment}</h4>
            <h5>Rate:{review.rating}/ 10</h5>
            <p>{review.created_at} minutes ago..</p>
        
        
           
          
        </div>});

        
  //   function populateReviews() {
  //   fetch(`${baseURL}/reviews`)
  //     .then((res) => res.json())
  //     .then((revData) => setDelreview(revData));
  // }

  //  function deleteReview(review) {
  //   fetch(`${baseURL}/reviews/${review.id}`, {
  //     method: "DELETE",
  //   });
  //   const newReview = reviews.filter((rev) => rev.id !== review.id);
  //   setDelreview(newReview);
  //   populateReviews()
  // }

  return (
    <div className="review-body">
      <div >
        <h1 className="review-head">Review Movie</h1>

        <br />
        <div >
         
          <ReviewForm />
           <h4 className="review-head">Most Recent Reviews</h4>
          {displayReviews}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
