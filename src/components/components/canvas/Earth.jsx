import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanavsLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth-lowpoly/scene.gltf");
  return <primitive object={earth.scene} scale={0.1} position-y={-4} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      linear
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 0.1,
        far: 200,
        position: [-4, 10, 6],
      }}
    >
      <Suspense fallback={<CanavsLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <hemisphereLight intensity={4} color="#080703" />
        <pointLight intensity={0.6} />
        <spotLight position={[-1, 5, -4]} angle={3} intensity={1} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
