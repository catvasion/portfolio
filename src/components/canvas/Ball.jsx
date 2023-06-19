import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={0.50}>
      <ambientLight intensity={0.15} rotationIntensity/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 50]} /> 
        <meshStandardMaterial 
          color='#FFFFE0'
          polygonOffset
       
          flatShading
        />
        <Decal
          position={[0.1, 0.1, 1]}
          rotation={[0, 0, Math.PI / 6]}

          
          map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    // frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        {/* <OrbitControls 
        enableZoom={false}
       
        /> */}
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all/>
  </Canvas>
  )
}

export default BallCanvas