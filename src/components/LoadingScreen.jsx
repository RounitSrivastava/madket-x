import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const greetings = [
  "Hello...",
  "नमस्ते...",
  "नमस्कार...",
  "নমস্কার...",
  "Hola...",        // Spanish
     // French
    "Hallo...",       // German
    "Ciao...", 
    "Welcome To MaDket",
];

const LoadingScreen = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < greetings.length - 1 ? prev + 1 : 0
      );
    }, 300);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <span className="loading-text fade-in">
          {greetings[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
