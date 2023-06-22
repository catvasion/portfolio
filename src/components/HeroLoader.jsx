import React from "react";

const HeroLoader = ({ progress }) => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p className="loader-text text-secondary text-[17px]">
        Loading... {progress.toFixed(2)}%
      </p>
    </div>
  );
};

export default HeroLoader;
