import React from 'react'
import React, { useState } from "react";
import { useHistory } from "react-router";

function ReviewForm() {
       const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
       const history = useHistory();
       const [reviewFrom, setReviewForm] = useState({
           comment: "",
           rating: "",
           username: "",
           movie_id: ""
       })

       function onHandleChange(e){
           setReviewForm({ ...reviewForm, [e.target.name]: e.target.value })
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
       movie_id: reviewFrom.movie_id

      }),
    };

    fetch(`${baseURL}/reviews`, config)
      .then((res) => res.json())
      .then((newReview) => {
        const newReviews = [reviewForm, newReview];
        setReviewForm(newReviews);
        history.push("/courses");
      });
  }


     
    return (
        <div>
            
        </div>
    )
}

export default ReviewForm
