import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from "../Loader";

const Stargate = () => {
  const stargate = useGLTF("./stargate/scene.gltf");

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
        object={stargate.scene}
        scale={1.5}
        position-y={0}
        rotation-y={0}
        rotation-x={0}
      />
    </mesh>
  );
};

const StargateCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
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
