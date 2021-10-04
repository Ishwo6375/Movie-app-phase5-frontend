import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-main">
      <div className="home-content">
        <h1 className="home-header">
          <span className="span-7">Watch Latest</span>
          <br />
          <br />
          <h1>
            <span className="span-6">Movie Trailers</span>
          </h1>
          <br />

          <h2>
            <span className="span-8">Review</span>
            <br />
            <span className="span-6"> Movie</span>
          </h2>

          <span className="span-8">Tell your friends </span>
          <span className="span-7">what's good</span>
        </h1>

        <br />

        <div>
          <Link className="btn btn-primary" to={"/Movies"}>
            <h4>Get Started it's free</h4>
          </Link>
        </div>
        <div className="client-wrap">
          <h1>Our official Partners</h1>
          <hr />
          <ul className="client-in">
            <li>
              <img
                className="partner-img"
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Movies_logo.png"
                alt="logo-1"
              />
              <img
                className="partner-img"
                src="http://img1.wikia.nocookie.net/__cb20140714161023/logopedia/images/9/94/DisneyChannellogo.png"
                alt="logo-1"
              />
              <img
                className="partner-img"
                src="http://steve-lovelace.com/wordpress/wp-content/uploads/2013/09/netflix-logo-in-optima-font-1024x307.png"
                alt="logo-1"
              />
               <img
                className="partner-img"
                src="http://img1.wikia.nocookie.net/__cb20111027001559/logopedia/images/1/1a/Rotten_tomatoes_logo.png"
                alt="logo-1"
              />
               <img
                className="partner-img"
                src="http://static1.wikia.nocookie.net/__cb20100323110709/logopedia/images/e/e3/Fox_Moxie_Channel.png"
                alt="logo-1"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
