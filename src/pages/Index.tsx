"use client"

import { Canvas } from "@react-three/fiber"
import { ScrollControls, Scroll } from "@react-three/drei"
import { Scene3D } from "@/components/3D/Scene3D"
import { ScrollOverlay } from "@/components/ScrollOverlay"

const Index = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
      <ScrollControls pages={4} damping={0.1}>
        <Scene3D />
        <Scroll html>
          <ScrollOverlay />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Index;
