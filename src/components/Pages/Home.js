import React from 'react'
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
    return (
        <div className="home-main">
            <div className="home-content">
                 <h1 className="home-header"><span className="span-7">Watch Latest</span>
                     <br />
                     <br />
                     <h1>

                     <span className="span-6">Movie Trailers</span>
                     </h1>
                     <br />

                     <h2><span className="span-8">Review</span>  
                     <br />
                     <span className="span-6"> Movie</span></h2>

                    <span className="span-8">Tell your friends </span><span className="span-7">what's good</span>
                 </h1>

                 <br />

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
