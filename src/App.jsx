import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useProgress } from '@react-three/drei'

import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
	HeroLoader,
} from './components'

const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	const { progress } = useProgress()

	useEffect(() => {
		const loadData = async () => {
			await new Promise((resolve) => setTimeout(resolve, 1500))

			setIsLoading(false)
		}

		loadData()
	}, [])

	return (
		<BrowserRouter>
			<div className='bg-primary'>
				<Navbar />
				{isLoading ? (
					<div className='h-screen flex justify-center items-center'>
						<HeroLoader progress={progress} />
					</div>
				) : (
					<div>
						<div className='imageDiv min-h-[100vh] grayscale bg-filter'></div>
						<div className='absolute top-[30%] bottom-[30%] right-0 left-0 h-fit'>
							<Hero />
						</div>
					</div>
				)}

				<div className=''>
					<Tech />
				</div>
				<Works />
				<Experience />
				<About />
				<div className='relative z-0 bg-black-300'>
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
