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
    <div>
      <div className="director-div">
        <h1>
          Know Famous directors
          <br />
          Top Listed Director of 2021
          <br />
          Check out Directors
        </h1>
      </div>
      <>
        <div>
          <h2 className="dir-heading">Top Directors 2021</h2>
        </div>
        <div className="main">
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
        </div>
        <div className="dir-heading">
          <h1>Most Searched Actors 2021</h1>
        </div>
        <div className="main">
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
  );
}

export default DirectorContainer;
