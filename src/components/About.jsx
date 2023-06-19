import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'

import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { profile } from '../assets'



const About = () => {
  return (
    <section className='flex flex-col lg:flex-row'>
    <div className='p-10'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Overview</p>
      <h2 className={styles.sectionHeadText}>About me.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
{/* Results-driven front-end developer with expertise in React JSX and TSX. Leveraging a diverse background in restaurant management, 
coaching, and warehouse work, I bring a unique perspective to problem-solving and teamwork. Passionate about creating engaging 
user experiences and staying at the forefront of web development trends. A motivated self-learner with a strong drive for 
continuous improvement. If you're seeking a dedicated front-end developer who can deliver exceptional results, please reach out. */}
I'm an enthusiastic and self-taught front-end developer with a strong foundation in pure and applied sciences. Recently, I completed 
a comprehensive front-end development certificate through Coursera, gaining expertise in JavaScript, HTML, CSS, and React. I also have 
experience working with TypeScript and popular React libraries such as Chakra UI and Three.js.
<br/><br/>
My passion for coding has driven me to embark on a journey of self-learning and project-based experience. Through various personal 
projects, I have honed my skills in building responsive and visually appealing web applications. I thrive on tackling challenging
problems and leveraging my creativity to deliver intuitive user experiences.
 <br/><br/>
 I am now eager to join a forward-thinking team where I can contribute to innovative projects, continuously learn new tech skills, 
 embrace exciting challenges, and grow as a developer. It is important to me to be part of a supportive culture that encourages personal 
 and professional development.

</motion.p>
</div>

<div className='p-20 flex justify-center items-center w-[100%]'>
  <img src={ profile } className='rounded-lg grayscale object-cover'/>
</div>
    
    </section>
  )
}

export default SectionWrapper(About, 'about')