import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={isMobile ? 0.5 : 1} // Slower floating for mobile
      rotationIntensity={isMobile ? 0.2 : 0.5}
      floatIntensity={isMobile ? 0.5 : 1}
    >
      {/* Adjust lighting for mobile */}
      <ambientLight intensity={isMobile ? 0.15 : 0.3} />
      <directionalLight
        position={[0, 1, 1]}
        intensity={isMobile ? 0.4 : 0.7}
      />

      <mesh castShadow={isMobile ? false : true} receiveShadow scale={isMobile ? 2.3 : 2.5}>
        {/* Use simplified geometry for mobile */}
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <meshStandardMaterial color="#fff8ec" flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={isMobile ? 0.8 : 1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, isMobile ? 1.5 : 2]} // Reduce DPR on mobile for performance
      gl={{
        preserveDrawingBuffer: true,
        antialias: !isMobile, // Disable antialiasing for mobile
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
