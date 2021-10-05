import React from 'react'
import "../styles/footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
    return (
      
      <footer className="footer">
          <div className="container">
              <div className="row">
                  <div className="footer-col">
                      <h4>Website </h4>
                      <ul>
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Our Services</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                         
                      </ul>
                  </div>
                    <div className="footer-col">
                      <h4>Get Help </h4>
                      <ul>
                          <li><a href="#">FAQ</a></li>
                          
                      </ul>
                  </div>
                    <div className="footer-col">
                      <h4>Our services</h4>
                      <ul>
                          <li><a href="#">Movie Trailers</a></li>
                          <li><a href="#">Review</a></li>
                           <li><a href="#">Movie Details</a></li>
                      </ul>

                       </div>
                    <div className="social">
                      <h4>Follow Us</h4>
                      <ul>
                          <li><a href="https://github.com/Ishwo6375"><span className="span-11"><FaGithub /></span>Github</a></li>
                          <li><a href="mailto: ishaan.prazapati6375@gmail.com"><span className="span-11"><FaGooglePlusSquare /></span>Gmail</a></li>
                           <li><a href="https://linkedin.com/in/ishwor-prajapati-b4a102201"><span className="span-11"><FaLinkedin /> </span>Linkdin</a></li>
                            <li><a href="https://linkedin.com/in/ishwor-prajapati-b4a102201"><span className="span-11"><FaFacebookSquare /></span> Facebook </a></li>
                      </ul>

                  </div>
                      <p className="copyright">
        <span className="span-10">Copyright &copy;2021</span> Cinema Trailer.com | All Rights are reserved.
      </p>
                    
                   
                  
              </div>
          </div>
      </footer>
    )
}

export default Footer
