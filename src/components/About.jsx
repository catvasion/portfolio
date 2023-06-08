import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div 
            options={{
              max:45,
              scale:1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img 
                src={icon} 
                alt={title} 
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Intro.</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
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

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')