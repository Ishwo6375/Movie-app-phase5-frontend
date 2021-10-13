import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <h5>
      Your messege has been successfully sent. We will contact you soon..Thank
      You
    </h5>
  );
};

function Contact() {
  const [result, showResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9b93s0p",
        "template_x5r8lda",
        e.target,
        "user_6sPNsSlwqHcFn0VD0xIvh"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => console.log(error.text));
    e.target.reset();
    showResult(true);
  }

  return (
    <>
      <div className="contactme" id="contact">
        <div className="contactOverlay">
          <div className="container">
            <div className="form">
              <form className="form-2" onSubmit={sendEmail}>
                <div className="formWord">
                  <h2>Contact Us</h2>
                  <span>Full Name</span>
                  <br />
                  <input
                    className="input100"
                    type="text"
                    name="fullName"
                    required
                  />
                  <br />
                  <span>Phone Number</span>
                  <br />
                  <input
                    className="input100"
                    type="text"
                    name="phone"
                    required
                  />
                  <br />
                  <span>Enter Email</span>
                  <br />
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    required
                  />
                  <br />
                </div>
                <div className="formWord">
                  <span>Message</span>
                  <br />
                  <textarea name="message" required></textarea>
                  <br />
                  <button>SUBMIT</button>
                  <div className="row">{result ? <Result /> : null}</div>
                </div>
              </form>
              <div className="contact-below">
                <h1 className="span-0">Connect with us: </h1>
                <h5 className="span-11">For support or any questions</h5>
                <h5 className="span-11">
                  <a
                    className="span-11"
                    href="mailto: ishaan.prazapati6375@gmail.com"
                  >
                    Email us at support@cinematrailer.com
                  </a>
                </h5>

                <div>
                  <h2 className="span-11">3002 Westwood Ave (MD) </h2>
                  <h5 className="span-11">2231 Penrose Ave</h5>
                  <h5 className="span-11">(443) 708-1727</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
