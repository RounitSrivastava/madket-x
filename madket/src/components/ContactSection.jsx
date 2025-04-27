import React from "react";
import "./ContactSection.css";
import { FaInstagram, FaLinkedin, FaUser, FaBuilding, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="contact-container" id="ContactSection">
      <div className="left-section">
        <h4>TAKE THE ROAD TO</h4>
        <h1>Digitizing Your Business
          <div></div> Growth</h1>
        <div className="socials">
          <span>Follow Us</span>
          <div className="icons">
            <a href="https://www.instagram.com/madket04?igsh=OGh5dzI4dnZ6Z2px" className="social-icon"><FaInstagram /></a>
             <a href="https://www.linkedin.com/in/madket-%E2%80%8E-28ba20307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon"><FaLinkedin/></a>
          </div>
        </div>
      </div>

      <div className="right-section">
        <h2>Start A Conversation With Us</h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="f71c79b4-d79c-4902-8002-a4e262997379"  // Replace with your actual Web3Forms access key
          />

          <div className="form-group">
            <FaUser />
            <input type="text" name="name" placeholder="Name*" required />
          </div>
          <div className="form-group">
            <FaBuilding />
            <input type="text" name="company" placeholder="Company Name*" required />
          </div>
          <div className="form-group">
            <FaEnvelope />
            <input type="email" name="email" placeholder="Email*" required />
          </div>
          <div className="form-group">
            <FaPhone />
            <input type="tel" name="phone" placeholder="Phone*" required />
          </div>
          <div className="form-group">
            <FaCommentDots />
            <textarea name="message" placeholder="Your Message*" required />
          </div>

          <button type="submit" className="submit-glow-btn">
            Contact us <span className="arrow">➤</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
