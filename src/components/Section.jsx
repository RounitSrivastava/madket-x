import React from 'react';
import './Section.css';
import { motion } from 'framer-motion';
import kiitLogo from '../assets/kiittbi-removebg-preview.png';

// Fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Section = () => {
  return (
    <section className="section" id="TopSection">
      <motion.div
        className="left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <h4>FINDING & WORKING WITH THE</h4>
        <h1>Best Digital and Web Service</h1>
        <p>
          Whether starting a brand from the ground up or overhauling your current website,
          working with a MaDket gives you access to the top experts in industry.
        </p>
      </motion.div>

      <motion.div
        className="right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <img src={kiitLogo} alt="KIIT Logo" className="kiit-logo" />
        <p className="incubated-text">Supported by KIIT TBI</p>
      </motion.div>
    </section>
  );
};

export default Section;
