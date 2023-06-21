import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = () => {
  const scifi = useGLTF("./scifi_computer/scene.gltf");
  const character = useGLTF("./character/scene.gltf");
  const selectedModel = scifi;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 550px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.9} intensity={0.5} />
      <primitive
        object={selectedModel.scene}
        scale={
          isMobile
            ? selectedModel == scifi
              ? 0.7
              : 0.25
            : selectedModel == scifi
            ? 1.35
            : 0.4
        }
        rotation={[Math.PI / 0.1, 0.5, 0]}
        position={
          isMobile
            ? selectedModel == scifi
              ? [1, -2.5, 0]
              : [1, -4.5, 0]
            : selectedModel == scifi
            ? [1, -3, -3.5]
            : [4, -1.5, 0]
        }
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls enableZoom={false} />
        <Computers />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
