import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DirectorMovieCard from "./DirectorMovieCard";

function DirectorDetails() {
     const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
     const [director, setDirector] = useState([])
      const { id } = useParams();

     useEffect(() => {
    fetch(`${baseURL}/directors/${id}`)
      .then((res) => res.json())
      .then((dirDetails) => setDirector(dirDetails));
    // eslint-disable-next-line
  }, []);
    
    return (
        <div>
           {director && (
               <>
               <h1>{director.name}</h1>
               <div className="img_container">
                     <img className="dir-image" alt={"director-img"} src={director.image} />
               </div>
               <div className="dir-bio">
                  <h5>{director.bio}</h5>
                  <p>Age: {director.age}</p>
               </div>

               <div>
                   <DirectorMovieCard movies={director.movies} id={id} />
               </div>
               </>

               
           )} 
        </div>
    )
}

export default DirectorDetails
