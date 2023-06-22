import React from "react";
import { Hero, Navbar } from "./index";

const Header = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-hero-pattern-mobile bg-cover bg-top lg:bg-hero-pattern py-40 bg-center bg-no-repeat bg-fixed">
        <Hero />
      </div>
    </>
  );
};

export default Header;
