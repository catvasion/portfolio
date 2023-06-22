import React, { useEffect, useState } from "react";

const BallImage = ({ icon }) => {
  return (
    <div className="rounded-full w-26 h-26 w-full h-full bg-gradient-to-b from-ivory to-yellow-100 transform scale-110">
      <img src={icon} alt="Ball" className="w-full h-full object-cover p-2" />
    </div>
  );
  return (
    <div>
      <BallImage src={icon} />
    </div>
  );
};
export default BallImage;
