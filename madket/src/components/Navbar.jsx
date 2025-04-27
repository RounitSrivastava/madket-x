import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTumblr, FaYoutube, FaBars, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/photo_2025-04-27_11-46-07-removebg-preview.png"; // Adjust the path to your actual logo location

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navItems = [
    ["Home", "MainSection"],
    ["Service", "service"],
    ["Client", "ClientSection"],
    ["Contact", "ContactSection"],
    ["Impact", "ImpactSection"],
  ];

  const scrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* Floating Social Icons */}
      <div className="floating-social">
        <a href="https://www.instagram.com/madket04?igsh=OGh5dzI4dnZ6Z2px" className="social-icon"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/madket-%E2%80%8E-28ba20307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon"><FaLinkedin /></a>
        <a href="https://x.com/madket04?s=21" className="social-icon"><FaTwitter /></a>
        <a href="https://wa.link/vb7lhx" className="social-icon"><FaWhatsapp /></a>
      </div>

      {/* Navbar Container */}
      <div className="navbar-container">
        {/* Logo and Brand Name */}
        <div className="logo">
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Logo */}
          <span>Madket</span> {/* Brand Name */}
        </div>

        {/* Desktop Navigation (Hidden on Small Screens) */}
        {!isMobile && (
          <div className="nav-links">
            {navItems.map((item, index) => (
              <div key={index} className="nav-item" onClick={() => scrollTo(item[1])}>
                {item[0]}
              </div>
            ))}
          </div>
        )}

        {/* CTA Button (Hidden on Small Screens) */}
        {!isMobile && (
          <button className="cta-button" onClick={() => scrollTo("ContactSection")}>
            Start your Journey
          </button>
        )}

        {/* Mobile Menu Icon (☰ Only on Small Screens) */}
        {isMobile && (
          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setMenuOpen(false)}>✖</button>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav-item" onClick={() => scrollTo(item[1])}>
              {item[0]}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
