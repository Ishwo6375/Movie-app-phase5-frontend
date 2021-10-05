import React from 'react'
import "../styles/footer.css";

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
                      <h4>Follow Us </h4>
                      <ul>
                          <a href="#">Github</a>
                          <a href="#">Gmail</a>
                          <a href="#">Linkedin</a>
                      </ul>
                  </div>
                   
                  
              </div>
          </div>
      </footer>
    )
}

export default Footer
