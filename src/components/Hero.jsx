import React, { useState } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";

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
        repeatType: "loop",
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
    <section className="flex flex-col justify-between w-full  mx-auto h-[50vh] lg:h-[80vh]">
      <div
        className={`${styles.paddingX}   max-w-7xl mx-auto flex flex-row items-start`}
      >
        <div className="bg-black-300 bg-opacity-70 rounded">
          <div className="p-9">
            <h1 className={`${styles.heroHeadText} mb-6 text-white`}>
              Hi, I'm{" "}
              <span className="pink-text-gradient font-bold">Emily</span>
            </h1>
            <p className={`${styles.heroSubText} mb-6 text-white-100`}>
              I am a London based <br className="sm: block hidden" />
              front-end developer specialised in React.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-center items-center"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <a href="#tech">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2">
            <motion.div
              animate={isHovered ? "hovered" : "notHovered"}
              variants={animationVariants}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-primary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
