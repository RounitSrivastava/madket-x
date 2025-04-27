import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./ImpactSection.css";

const impactData = [
  { number: 100, label: "Startup Supported" },
  { number: 200, label: "Influencer Marketing" },
  { number: 70, label: "Web-Services" },
  { number: 50, label: "Mentors Engaged" },
  { number: 120, label: "SEO" },
  { number: 80, label: "Startups" },
];

const ImpactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // important: false, to restart when re-enter
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
    <section id="ImpactSection" className="impact-section" ref={ref}>
      <h2 className="impact-title">IMPACT</h2>
      <div className="impact-grid">
        {impactData.map((item, index) => (
          <div className="impact-card" key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
