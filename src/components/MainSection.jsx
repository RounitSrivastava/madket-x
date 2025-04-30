import React from "react";
import { motion } from "framer-motion";
import "./MainSection.css";
import logo from "../assets/photo_2025-04-27_11-46-07-removebg-preview.png";

const MainSection = () => {
  return (
    <motion.section
      id="MainSection"
      className="main-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="brand-logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="circle" />
        <img src={logo} alt="Brand Logo" className="brand-logo-img" />
        <span className="brand-name">
          MaDket
          <span className="fx"></span>
        </span>
      </motion.div>

      <motion.div
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2>
          We at MaDket are your ultimate friends for all things
          <br />
          <span className="highlight">marketing!</span>{" "}
          <em>
            Run by a team of passionate marketing enthusiasts, we curate and
            create content to inspire, educate, and empower fellow marketers.
            Whether you're a seasoned professional or just starting your journey
            in the world of marketing, join us as we explore the latest trends,
            strategies, and insights to help you thrive in this ever-evolving
            industry
          </em>
        </h2>
        <h3>
          <p>
            Let's dive into the exciting world of marketing together!
          </p>
        </h3>
      </motion.div>
    </motion.section>
  );
};

export default MainSection;
