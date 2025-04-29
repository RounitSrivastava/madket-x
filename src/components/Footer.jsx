import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-about">
          <h2>MaDket</h2>
          <h4>
            <p>
              Where creativity meets impactful digital marketing and web innovation
            </p>
          </h4>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="footer-column">
          <h2>Location</h2>
          <ul>
            <li>KIIT-TBI,Bhubaneswar</li>
          </ul>
        </div>

        <div className="footer-contacts">
          <h2>Contacts</h2>
          <h4>
            <p>📞 +91 7974947976</p>
            <p>✉ madket04@gmail.com</p>
            <p>📍 Bhubaneswar, Odisha, India</p>
          </h4>
        </div>
      </div>

      <div className="footer-line"></div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <h2>
          <p>Copyright 2025 | All Rights Reserved</p>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
