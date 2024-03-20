import React from 'react'

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
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					I'm a passionate full stack developer with a foundation in pure and
					applied sciences. I have expertise in TypeScript, JavaScript, Next.js
					14, React, Netlify, HTML, and CSS.
					<br />
					<br />
					Growing up in Montreal, I spent a lot of my time snowboarding and
					cycling. I've always enjoyed problem-solving, whether it's tinkering
					around the house or resolving issues with my car. I have always had a
					fascination with the sciences, especially physics. It was through the
					guidance of a friend that I discovered website development, and I've
					been captivated ever since.
					<br />
					<br />
					I'm enthusiastic about joining a forward-thinking team, where I can
					contribute to innovative projects, continuously expand my technical
					skills, and embrace exciting challenges. Being part of a supportive
					culture that fosters personal and professional growth is of great
					importance to me.
				</motion.p>
			</div>

			<div className='p-10 md:p-32 lg:p-20 flex justify-center items-center w-[100%]'>
				<img src={profile} className='rounded-lg grayscale object-cover' />
			</div>
		</section>
	)
}

export default SectionWrapper(About, 'about')
