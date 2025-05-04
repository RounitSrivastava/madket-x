import React from "react";
import "./ContactSection.css";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaTwitter,
} from "react-icons/fa";

// Animation variant for fade-up effect
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ContactSection = () => {
  return (
    <div className="contact-container" id="ContactSection">
      <motion.div
        className="left-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h4>TAKE THE ROAD TO</h4>
        <h1>
          Digitalizing Your Business
          <div></div> Growth
        </h1>
        <div className="socials">
          <span>Follow Us</span>
          <div className="icons">
            <a
              href="https://www.instagram.com/madket04?igsh=OGh5dzI4dnZ6Z2px"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/madket-%E2%80%8E-28ba20307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/madket04?s=21"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="right-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2>Start A Conversation With Us</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="f71c79b4-d79c-4902-8002-a4e262997379"
          />

          <div className="form-group">
            <FaUser />
            <input type="text" name="name" placeholder="Name*" required />
          </div>
          <div className="form-group">
            <FaBuilding />
            <input
              type="text"
              name="company"
              placeholder="Company Name*"
              required
            />
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
      </motion.div>
    </div>
  );
};

export default ContactSection;
