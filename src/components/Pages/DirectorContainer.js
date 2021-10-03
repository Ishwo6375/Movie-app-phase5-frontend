import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/MovieContainer.css";

function DirectorContainer() {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";

  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/directors`)
      .then((res) => res.json())
      .then((directorData) => setDirectors(directorData));
  }, []);

  useEffect(() => {
    fetch(`${baseURL}/actors`)
      .then((res) => res.json())
      .then((actorData) => setActors(actorData));
  }, []);

  return (
    <>
    <div>
      <div className="director-div">
        <div >
        <h1 className="top-rated-heading">
          <br />
          <br />
          <span className="span-1">Know Top Rated</span>
            <br />
           <span className="span-2">Directors</span>
          <br />
          And 
          <br />

          <span className="span-2">Actors</span>
          <br />
          <span className="span-1">Top Listed Directors of 2021</span><br />
           <span className="span-1">Top Listed Actors of 2021</span>
          <br />
         
        </h1>

        </div>
      </div>
      <>
        <div>
        </div>
        <div className="main">
          <h2 className="dir-heading">Top Directors 2021</h2>
          {directors.map((director, idx) => (
            <div key={idx} className=" box">
              <div className="box-img">
                <img alt={"director-img"} src={director.image} />
              </div>
              <div className="content">
                <h3>{director.name}</h3>
                <h3>Age: {director.age}</h3>
              </div>

              <div className="button">
                <button className=" btn-secondary">
                  <Link to={`/directors/${director.id}`}>View Profile</Link>
                </button>
              </div>

              <br />
            </div>
          ))}
        </div >
        <div className="actor-div">
        </div>
        <div className="main">
          <h1 className="dir-heading">Most Searched Actors 2021</h1>
          {actors.map((actor, idx) => (
            <div key={idx} className=" box">
              <div className="box-img">
                <img alt={"actor-img"} src={actor.image} />
              </div>
              <div className="content">
                <h3>{actor.name}</h3>
                 <h5>Age:{actor.age}</h5>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
    </>
  );
}

export default DirectorContainer;
