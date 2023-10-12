import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import Loader from '../Loader';

const Stargate = React.forwardRef((props, ref) => {
	const { scene } = useGLTF('./stargate/scene.gltf');

	return (
		<mesh ref={ref}>
			<hemisphereLight intensity={1.5} groundColor='black' />
			<pointLight intensity={6} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={2}
				shadow-mapSize={1024}
			/>
			<primitive
				object={scene}
				scale={1.5}
				position-y={0}
				rotation-y={0}
				rotation-x={0}
			/>
		</mesh>
	);
});

const StargateCanvas = () => {
	const [shouldRender, setShouldRender] = useState(false);
	const stargateRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setShouldRender(true);
					observer.disconnect();
				}
			});
		});

		const element = stargateRef.current;

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, []);

	return (
		<Canvas
			className='canvas'
			shadows
			frameloop={shouldRender ? 'demand' : undefined}
			gl={{ preserveDrawingBuffer: false }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-2, 3, 16],
			}}
		>
			<Suspense fallback={<Loader />}>
				<OrbitControls
					autoRotate
					enableRotate={false}
					enablePan={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Stargate ref={stargateRef} />
			</Suspense>
		</Canvas>
	);
};

export default StargateCanvas;
