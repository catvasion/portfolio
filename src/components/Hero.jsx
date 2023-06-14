import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { styles } from '../styles'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };
  const animationVariants = {
    hovered: {
      y: [0, 24, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        
      },
    },
    notHovered: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className='flex flex-col justify-between w-full  mx-auto h-[50vh] lg:h-[80vh]'>
    {/* <section className='relative w-full h-[70vh] sm:h-[80vh] lg:h-screen xl:h-screen mx-auto flex bg-fixed bg-hero-pattern bg-fixed bg-cover'> */}
      {/* <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}> */}
      <div className={`${styles.paddingX}   max-w-7xl mx-auto flex flex-row items-start`}>
        {/* div padding-top: 250px;
            padding-bottom: 250px;
            margin-bottom: 100px; */}
        <div className='bg-black bg-opacity-40 rounded'>
          <div className='p-9'>
          <h1 className={`${styles.heroHeadText} mb-6 text-white`}>Hi, I'm <span className='pink-text-gradient font-bold'>Emily</span></h1>
          {/* h1 margin-bottom: 20px;
              margin-top: 0; */}
          <p className={`${styles.heroSubText} mb-6 text-white-100`}>I am a London based <br className='sm: block hidden'/>front-end developer specialised in React.</p>
          {/* p margin-top: 0;
              margin-bottom: 20px; */}
            </div>
        </div>
      </div>
      {/* <div className='absolute xs:bottom-10 top-[480px] w-full flex justify-center items-center'> */}
      <div className='w-full flex justify-center items-center'
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}>
        {/* div padding: 100px 0 0px 0; */}
        <a href='#about'>
          <div 
            className= 'w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2'
            
          
          >
            <motion.div
              animate={isHovered ? 'hovered' : 'notHovered'}
              variants={animationVariants}
              
              transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'loop',

                }}
            
              className='w-3 h-3 rounded-full bg-primary'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero