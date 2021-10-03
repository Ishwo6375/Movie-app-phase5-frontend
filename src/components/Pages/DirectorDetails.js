import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DirectorMovieCard from "./DirectorMovieCard";
import "../styles/DirectorDetails.css";

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
               {/* <h1>{director.name}</h1>
               <div className="img_container">
                     <img className="dir-image" alt={"director-img"} src={director.image} />
               </div>
               <div className="dir-bio">
                  <h5>{director.bio}</h5>
                  <p>Age: {director.age}</p>
               </div>

               <div >
                   <DirectorMovieCard movies={director.movies} id={id} />
               </div> */}

               <div className="wrapper-1">
                   <div className="box-1">
                       <img className="dir-image" alt={"director-img"} src={director.image} />
                   <div className="box-text">
                        <h1> <span className="span-5">{director.name}</span></h1>
                        <h4>BIO: <span className="span-3">{director.bio}</span></h4>
                        <h4>AGE: <span className="span-4">{director.age} Years Old</span></h4>
                   </div>

                   </div>
                        <div clasName="social">
                             <DirectorMovieCard movies={director.movies} id={id} />
                        </div>
               </div>
               </>

               
           )} 
        </div>
    )
}

export default DirectorDetails
