"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

// A component that creates a sphere of particles
const BrainParticles = () => {
  const count = 2000
  const ref = useRef<THREE.Points>(null)

  // useScroll hook gives us the current scroll progress
  const scroll = useScroll()

  // Generate random positions for the particles in a sphere and create geometry
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const distance = 2
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = distance * Math.cos(theta)
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [count])

  // useFrame is a hook that runs on every single frame
  useFrame((state, delta) => {
    if (ref.current) {
      // Animate the rotation of the particle cloud
      ref.current.rotation.y += delta * 0.05

      // Get the current scroll offset (from 0 to 1)
      const scrollOffset = scroll.offset

      // Animate the scale of the particles based on the scroll offset
      // This makes the particle cloud grow as you scroll down.
      ref.current.scale.set(1 + scrollOffset * 2, 1 + scrollOffset * 2, 1 + scrollOffset * 2)
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.015} color="#6366f1" />
    </points>
  )
}

// The main 3D scene component
export function Scene3D() {
  return (
    <>
      {/* Scene background color */}
      <color attach="background" args={["#0a0a0a"]} />
      {/* Basic lighting */}
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

      {/* The Float component makes its children float in space */}
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <BrainParticles />
      </Float>

      {/* The Sparkles component adds extra decorative particles */}
      <Sparkles count={200} scale={6} size={1} speed={0.4} color="#ec4899" />

      {/* Post-processing effects for a glowy/bloom look */}
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.7} />
      </EffectComposer>
    </>
  )
}