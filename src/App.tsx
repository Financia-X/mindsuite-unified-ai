"use client"

import { Canvas } from "@react-three/fiber"
import { ScrollControls, Scroll } from "@react-three/drei"
import { Scene } from "../components/landing/scene"
import { Overlay } from "../components/landing/overlay"

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        {/* Reduced pages to remove extra space at the bottom */}
        <ScrollControls pages={5} damping={0.1}>
          <Scene />
          <Scroll html>
            <Overlay />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  )
}