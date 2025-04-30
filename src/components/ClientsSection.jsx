import React from "react";
import { motion } from "framer-motion";
import "./ClientsSection.css";
import volt from "../assets/Screenshot 2025-04-27 003807.png";
import social from "../assets/Screenshot 2025-04-27 001434.png";
import openRag from "../assets/Screenshot 2025-04-27 001833.png";
import Creviced from "../assets/Screenshot 2025-04-27 002148.png";
import sparsh from "../assets/Screenshot 2025-04-27 002417.png";
import divine from "../assets/Screenshot 2025-04-27 002655.png";
import quanta from "../assets/Screenshot 2025-04-27 003006.png";
import bigguys from "../assets/Screenshot 2025-04-27 003517.png";

const clientsRow1 = [
  { name: "Open Rag", logo: openRag },
  { name: "BIGGUYS", logo: bigguys },
  { name: "Divine Destination", logo: divine },
  { name: "Creviced", logo: Creviced },
  { name: "Volt", logo: volt },
  { name: "i-Quanta", logo: quanta },
  { name: "Damnsocial", logo: social },
  { name: "Sparsh", logo: sparsh },
];

const clientsRow2 = [
  { name: "Divine Destination", logo: divine },
  { name: "Volt", logo: volt },
  { name: "Open Rag", logo: openRag },
  { name: "Damnsocial", logo: social },
  { name: "Creviced", logo: Creviced },
  { name: "Sparsh", logo: sparsh },
  { name: "i-Quanta", logo: quanta },
  { name: "BIGGUYS", logo: bigguys },
];

const ClientsSection = () => {
  return (
    <motion.section
      id="ClientSection"
      className="clients-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="clients-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="small-heading">CLIENTS ACROSS INDUSTRIES</p>
        <h1 className="main-heading">Web and Digital Marketing Services</h1>
        <p className="sub-heading">
          From startups to 15+ growing businesses,
          <br />
          <span>we create custom solutions that grow brands online</span>
        </p>
      </motion.div>

      <div className="clients-logos">
        <div className="logos-row scroll-right">
          {clientsRow1.concat(clientsRow1).map((client, index) => (
            <div className="client-card" key={index}>
              <img src={client.logo} alt={client.name} className="client-logo" />
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>

        <div className="logos-row scroll-left">
          {clientsRow2.concat(clientsRow2).map((client, index) => (
            <div className="client-card" key={index}>
              <img src={client.logo} alt={client.name} className="client-logo" />
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ClientsSection;
