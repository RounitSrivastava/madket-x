import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent to hide loader
    }, 4000); // 4 seconds total
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <span className="loading-text">Amplify</span>
        <span className="loading-text">&nbsp;Ascend</span>
        <span className="loading-text">&nbsp;Achieve</span>
      </div>
    </div>
      );
    };
    
    export default LoadingScreen;