import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActorComment from "./ActorComment";


function ActorDetails() {
     const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
    const [actor, setActor] = useState([]);
     const { id } = useParams();

       useEffect(() => {
    fetch(`${baseURL}/actors/${id}`)
      .then((res) => res.json())
      .then((actorDetails) => setActor(actorDetails));
    // eslint-disable-next-line
  }, []);


    return (
           <div>
           {actor && (
               <>
               <div className="wrapper-2">
                   <div className="box-1">
                       <img className="dir-image" alt={"director-img"} src={actor.image} />
                   <div className="box-text">
                        <h1> <span className="span-5">{actor.name}</span></h1>
                        <h4>BIO: <span className="span-3">{actor.bio}</span></h4>
                        <h4>AGE: <span className="span-4">{actor.age} Years Old</span></h4>
                   </div>

                   </div>
                   
                        <div clasName="social">
                            <ActorComment comments={actor.comments} id={id}/>
                        </div>
               </div>
               </>

               
           )} 
        </div>
    )
}

export default ActorDetails
