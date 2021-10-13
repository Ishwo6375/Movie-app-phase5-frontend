import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DirectorMovieCard from "./DirectorMovieCard";
import "../styles/DirectorDetails.css";

function DirectorDetails() {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";
  const [director, setDirector] = useState([]);
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
          <div className="wrapper-1">
            <Link className="btn btn-info back-link" to={"/directors"}>
              <h5>Go Back to Top Rated</h5>
            </Link>
            <div className="box-1">
              <img
                className="dir-image"
                alt={"director-img"}
                src={director.image}
              />
              <div className="box-text">
                <h1>
                  {" "}
                  <span className="span-5">{director.name}</span>
                </h1>
                <h4>
                  BIO: <span className="span-3">{director.bio}</span>
                </h4>
                <h4>
                  AGE: <span className="span-4">{director.age} Years Old</span>
                </h4>
              </div>
            </div>
            <div clasName="social">
              <DirectorMovieCard movies={director.movies} id={id} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DirectorDetails;
