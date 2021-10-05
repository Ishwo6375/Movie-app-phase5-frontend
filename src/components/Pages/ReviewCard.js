import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";


function ReviewCard({ reviews, id }) {

  const [delreview, setDelreview] = useState([])
   const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";

    useEffect(() => {
    populateReviews(); //This function is called every time delete method is requested//
  }, []);
    
   function populateReviews() {
    
    fetch(`${baseURL}/reviews`)
      .then((res) => res.json())
      .then((revData) => setDelreview(revData));
  }

   function deleteReview(review) {
    fetch(`${baseURL}/reviews/${review.id}`, {
      method: "DELETE",
    });
    const newReview = reviews.filter((rev) => rev.id !== review.id);
    setDelreview(newReview);
   
  }



  const displayReviews =
    reviews && reviews.map((review) => {
      return <div key={id} className="review-container">
            <h3><span>Username:</span> {review.username}</h3>
            <h4>{review.comment}</h4>
            <h5>Rate:{review.rating}/ 10</h5>
            <p>{review.created_at} minutes ago..</p>
            <button className="btn btn-secondary" onClick={()=> deleteReview(review)}>Delete</button>
            
        </div>});

        
    
  return (
    <div className="review-body">
      <div className="review-div">
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
