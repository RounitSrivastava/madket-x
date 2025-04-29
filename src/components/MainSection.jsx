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
We at MaDket are your ultimate friends for all things 
          <br />
          <span className="highlight">marketing!</span>{" "}
          <em>
          Run by a team of passionate marketing enthusiasts, we curate and create content to inspire, educate, and empower fellow marketers. Whether you're a seasoned professional or just starting your journey in the world of marketing, join us as we explore the latest trends, strategies, and insights to help you thrive in this ever-evolving industry
          </em>
        </h1>
        <h3>
        <p>
        Let's dive into the exciting world of marketing together! 
        {/* <b>500+ successful campaigns</b> leveraging a vibrant network of{' '}
          <b>100+ influencers</b> and a skilled team driving results across SEO, SMM, web
          development, and digital strategy. */}
        </p> </h3>
      </div>
    </section>
  );
};

export default MainSection;
