import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaChartBar,
  FaLayerGroup,
  FaVideoSlash,
  FaBullhorn,
  FaFacebookF,
  FaFilm,
  FaUsers,
} from "react-icons/fa";
import "./Service.css";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Creating dynamic and responsive websites & web applications with the latest technology",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Empowering businesses with strategic digital marketing — from branding to conversions and beyond",
  },
  {
    icon: <FaSearch />,
    title: "SEO",
    desc: "Boosting visibility and driving organic traffic with smart SEO strategies",
  },
  {
    icon: <FaFacebookF />,
    title: "SMM",
    desc: "Customized social media strategies for powerful engagement, brand growth, and audience loyalty",
  },
  {
    icon: <FaFilm/>,
    title: "Video Editing",
    desc: "Professional video editing services for seamless and high-quality content creation.",
  },
  {
    icon: <FaUsers />,
    title: "Influencer Marketing",
    desc: "Expanding brand influence through strategic collaborations with authentic creators",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Service = () => {
  const { ref, inView: isInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section id="Service" className="services-section" ref={ref}>
      <motion.h1
        className="services-heading"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        Our <span className="highlight">Services</span>
      </motion.h1>

      <motion.p
        className="services-description"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        Revolutionizing modern business with digital innovation.
      </motion.p>

      <motion.div
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(203, 231, 49, 0.5)",
            }}
          >
            <div className="icon-wrapper">{service.icon}</div>
            <h2 className="service-heading">{service.title}</h2>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service;
