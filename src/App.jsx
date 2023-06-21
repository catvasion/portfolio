import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";


import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Header } from "./components";

const App = () => {

  
  return (
    <BrowserRouter>
    <div className='bg-primary '>
      <div>
        <Header />
      </div>
      
      <Tech />
      <Works />
      <Experience />
      <About />
      
      
      
      {/* <Feedbacks /> */}
      <div className='relative z-0 bg-black-300'>
        <Contact />
        <StarsCanvas />
      </div>
      
    </div>
  </BrowserRouter>
  
  );
}

export default App