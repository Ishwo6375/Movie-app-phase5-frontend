import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-main">
      <div className="home-content">
        <h2 className="home-header">
          <br />
          <br />
          <br />
          <br />
          <span className="span-7">Track Movies</span>
          <br />
          <br />
          <span className="span-6">You have watched</span>

          <br />

          <h2>
            <span className="span-8">Save those you want to see.</span>
            <br />
            <span className="span-6">Review Movie </span>
            <br />
          </h2>

          <span className="span-8">Tell your friends </span>
          <span className="span-7">what's good!!!</span>
        </h2>

        <br />
        <br />

        <div>
          <Link className="btn btn-primary" to={"/Movies"}>
            <h4 className="home-btn">Get Started it's free</h4>
          </Link>
        </div>
        <div className="client-wrap">
          <h1>Our Official Sponsers</h1>
          <hr />
          <ul className="client-in">
            <li>
              <img
                className="partner-img"
                src="https://i1.wp.com/www.scottclifton.com/wp-content/uploads/2016/05/IMDb_logo.svg_.png?ssl=1"
                alt="logo-1"
              />
              <img
                className="partner-img"
                src="https://img1.wikia.nocookie.net/__cb20140714161023/logopedia/images/9/94/DisneyChannellogo.png"
                alt="logo-1"
              />
              <img
                className="partner-img"
                src="https://steve-lovelace.com/wordpress/wp-content/uploads/2013/09/netflix-logo-in-optima-font-1024x307.png"
                alt="logo-1"
              />
              <img
                className="partner-img"
                src="https://img1.wikia.nocookie.net/__cb20111027001559/logopedia/images/1/1a/Rotten_tomatoes_logo.png"
                alt="logo-1"
              />
              <img
                className="partner-img"
                src="https://static1.wikia.nocookie.net/__cb20100323110709/logopedia/images/e/e3/Fox_Moxie_Channel.png"
                alt="logo-1"
              />
            </li>
          </ul>
        </div>

        <div>
          <h4 className="span-10">Up Coming Movies</h4>
          <hr />

          <ul className="client-in">
            <li>
              <img
                className="movie-li"
                src="https://i.pinimg.com/originals/5d/ee/b5/5deeb5985b06bd73c6aa48cec86fb277.jpg"
                alt="logo-1"
              />
              <img
                className="movie-li"
                src="http://1.bp.blogspot.com/-0j3aZC0v-1E/Thz6esmkgxI/AAAAAAAAEgc/bPUcaCeaRyw/s1600/Latest-Hollywood-Movie-2011.jpg"
                alt="logo-1"
              />
              <img
                className="movie-li"
                src="https://i.pinimg.com/736x/ab/cd/2b/abcd2bc1b5c7bd44d986cea08704696d.jpg"
                alt="logo-1"
              />
              <img
                className="movie-li"
                src="https://movie.webindia123.com/movie/2016/Hollywood/December/TheMummy/poster/TheMummy2.jpg"
                alt="logo-1"
              />

              <img
                className="movie-li"
                src="https://i.pinimg.com/736x/1b/e5/1c/1be51c4ab310853644d286b9187023de.jpg"
                alt="logo-1"
              />

              <img
                className="movie-li"
                src="https://tse3.mm.bing.net/th?id=OIP.S4kubhtoMWEHdXp6i09WnQHaKs&pid=Api&P=0&w=300&h=300"
                alt="logo-1"
              />

              <img
                className="movie-li"
                src="https://i.pinimg.com/736x/ea/f9/46/eaf94606aafbc2cf52696dfa8bc67e9d--english-movies-hollywood.jpg"
                alt="logo-1"
              />
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
