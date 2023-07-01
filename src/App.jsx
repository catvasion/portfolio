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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary ">
        <Navbar />
        {isLoading ? (
          <div className="h-screen flex justify-center items-center">
            <HeroLoader progress={progress} />
          </div>
        ) : (
          <div>
            <div className="min-h-[100vh] bg-hero-pattern-mobile lg:bg-hero-pattern bg-cover bg-top  py-40 bg-center bg-no-repeat bg-fixed grayscale bg-filter"></div>
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
