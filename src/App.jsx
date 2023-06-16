import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-primary '>
      <div className='bg-hero-pattern-mobile sm:bg-hero-pattern-medium bg-cover bg-top lg:bg-hero-pattern py-40 bg-center bg-no-repeat bg-fixed '
>
      {/* 'bg-hero-pattern bg-center bg-bottom bg-no-repeat bg-auto py-40 bg-auto' */}

        {/* Pseudo-element for the grayscale filter */}
        {/* <div className='relative'>
          <div className='bg-hero-pattern bg-center bg-fixed bg-bottom bg-no-repeat py-40 filter grayscale h-[20vh]'></div>
        </div> */}
        
        <Navbar />
        <Hero />
      </div>
      
      <Tech />
      <Works />
      <Experience />
      <About />
      
      
      
      {/* <Feedbacks /> */}
      <div className='relative z-0 bg-[#363636]'>
        <Contact />
        <StarsCanvas />
      </div>
      
    </div>
  </BrowserRouter>
  
  );
}

export default App