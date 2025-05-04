import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./ImpactSection.css";

const impactData = [
  { number: 10, label: "Startup Supported" },
  { number: 20, label: "Influencer Marketing" },
  { number: 13, label: "Web-Services" },
  { number: 10, label: "Mentors Engaged" },
  { number: 10, label: "SEO" },
  { number: 15, label: "Startups" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ImpactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    } else {
      setStartCounting(false);
    }
  }, [inView]);

  return (
    <motion.section
      id="ImpactSection"
      className="impact-section"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="impact-title">IMPACT</h2>
      <div className="impact-grid">
        {impactData.map((item, index) => (
          <motion.div
            className="impact-card"
            key={index}
            variants={cardVariants}
          >
            <h3 className="impact-number">
              {startCounting ? (
                <CountUp
                  start={0}
                  end={item.number}
                  duration={2.5}
                  suffix={item.suffix !== undefined ? item.suffix : "+"}
                />
              ) : (
                "0"
              )}
            </h3>
            <p className="impact-label">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ImpactSection;
