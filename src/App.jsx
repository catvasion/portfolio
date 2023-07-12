import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useProgress } from "@react-three/drei";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Header,
  HeroLoader,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    const loadData = async () => {
      // Simulate loading the necessary data
      // Replace this with your actual loading logic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary">
        <Navbar />
        {isLoading ? (
          <div className="h-screen flex justify-center items-center">
            <HeroLoader progress={progress} />
          </div>
        ) : (
          <div>
            {/* Render the content once isLoading is false */}
            <div className="imageDiv min-h-[100vh] py-40  grayscale bg-filter"></div>
            <div className="absolute top-[30%] bottom-[30%] right-0 left-0 h-fit">
              <Hero />
            </div>
          </div>
        )}

        <div className="">
          {/* Render <Tech /> only on large screens */}
          <Tech />
        </div>
        <Works />
        <Experience />
        <About />
        <div className="relative z-0 bg-black-300">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
