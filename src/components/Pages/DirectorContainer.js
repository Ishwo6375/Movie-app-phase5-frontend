import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/MovieContainer.css";

function DirectorContainer() {
    const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";

    const [directors, setDirectors] = useState([]);

    useEffect(() => {
    fetch(`${baseURL}/directors`)
      .then((res) => res.json())
      .then((directorData) => setDirectors(directorData));
  }, []);

    return (
        <div>
            <div className="director-div">
              <h1>Know Famous directors
                <br />
                 Top Listed Director of 2021

                 <br />
                  
                  Check out Directors
              </h1>
            </div>
             <>
             <div><h2 className="dir-heading">Top Directors 2021</h2></div>
     <div className="main">
       {directors.map((director,idx)=> (
    <div key={idx} className=" box">
     
      <div className="box-img">
           <img  alt={"director-img"} src={director.image} />
      </div>
      <div className="content">
    
         <h3>{director.name}</h3>
      </div>

      {/* <div className="button">
        <button className=" btn-secondary">
               <Link  to={`/directors/${movie.id}`}>
                  Movie Details
                </Link>

        </button>
      </div> */}
         

         <br />
      <div>

      </div>
      
    </div>

       ))}
   
    </div>
    </>
            
        </div>
    )
}

export default DirectorContainer
