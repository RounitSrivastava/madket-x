import React from "react";
import "./MainSection.css";
import logo from "../assets/photo_2025-04-27_11-46-07-removebg-preview.png"; // Adjust path to your actual logo location

const MainSection = () => {
  return (
    <section id="MainSection" className="main-container">
      <div className="brand-logo">
        <div className="circle" />
        {/* Logo Image */}
        <img src={logo} alt="Brand Logo" className="brand-logo-img" />
        {/* Brand Name */}
        <span className="brand-name">
          MaDket
          <span className="fx"></span>
        </span>
      </div>

      <div className="content">
        <h1>
          For brands aiming to scale their business, we deliver impactful digital solutions,
          <br />
          <span className="highlight">From marketing</span>{" "}
          <em>
            strategy to SEO, SMM, web development, and influencer marketing — we bring the
            best minds to your brand
          </em>
        </h1>
        <p>
          With a strong foundation in influencer marketing, we've empowered over 100 brands
          through <b>500+ successful campaigns</b> leveraging a vibrant network of{' '}
          <b>100+ influencers</b> and a skilled team driving results across SEO, SMM, web
          development, and digital strategy.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
