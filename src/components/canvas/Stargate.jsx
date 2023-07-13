import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from "../Loader";

const Stargate = () => {
  const { scene } = useGLTF("./stargate/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={6} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        // castShadow
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
};

const StargateCanvas = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handleAnimation = () => {
      // Set the flag to indicate animation or camera movement
      setShouldRender(true);
    };

    // Add event listeners or any other logic to detect animation or camera movement
    // For example, you can listen to the 'mousemove' event on the canvas element

    return () => {
      // Clean up event listeners if necessary
    };
  }, []);

  return (
    <Canvas
      style={{ touchAction: "pan-y" }}
      shadows
      frameloop={shouldRender ? "demand" : undefined}
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
        <Stargate />
      </Suspense>
    </Canvas>
  );
};

export default StargateCanvas;
