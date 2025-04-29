import React from 'react';
import './Section.css';
import kiitLogo from '../assets/kiittbi-removebg-preview.png'; // (adjust path if needed)

const Section = () => {
  return (
    <section className="section">
      <div className="left">
        <h4>FINDING & WORKING WITH THE</h4>
        <h1>Best Digital and Web Service</h1>
        <p>
          Whether starting a brand from the ground up or overhauling your current website,
          working with a MaDket gives you access to the top experts in industry.
        </p>
      </div>
      <div className="right">
        <img src={kiitLogo} alt="KIIT Logo" className="kiit-logo" />
        <p className="incubated-text">Supported by KIIT TBI</p>
      </div>
    </section>
  );
};

export default Section;
