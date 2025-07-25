"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

const BrainParticles = () => {
  const count = 2000
  const ref = useRef<THREE.Points>(null)
  const scroll = useScroll()

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const distance = 2
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)
      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = distance * Math.cos(theta)
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05
      const scrollOffset = scroll.offset
      ref.current.scale.set(1 + scrollOffset * 2, 1 + scrollOffset * 2, 1 + scrollOffset * 2)
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#a78bfa" />
    </points>
  )
}

export function Scene() {
  return (
    <>
      <color attach="background" args={["#0D001F"]} />
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#c026d3" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#4f46e5" />
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <BrainParticles />
      </Float>
      <Sparkles count={200} scale={6} size={1} speed={0.4} color="#f0abfc" />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.7} />
      </EffectComposer>
    </>
  )
}
