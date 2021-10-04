import React from 'react'
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
    return (
        <div className="home-main">
            <div className="home-content">
                 <h1 className="home-header"><span className="span-7">Watch Latest</span>
                     <br />
                     <span className="span-6">Movie Trailers</span>
                     <br />

                    Tell your friends <span className="span-7"></span>what's good
                 </h1>

                 <div>
                   <Link className="btn btn-primary" to={"/Movies"}>
                <h4>Get Started it's free</h4>
              </Link>
                 </div>
            </div>
        </div>
    )
}

export default Home
