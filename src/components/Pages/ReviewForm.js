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

      
  


     
    return (
        <div>
            
        </div>
    )
}

export default ReviewForm
