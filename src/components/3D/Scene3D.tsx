"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import * as THREE from "three"

// Simplified particle component
const SimpleParticles = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.1
      
      const scrollOffset = scroll.offset
      meshRef.current.scale.set(1 + scrollOffset, 1 + scrollOffset, 1 + scrollOffset)
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#6366f1" wireframe />
    </mesh>
  )
}

// Simplified 3D scene
export function Scene3D() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <SimpleParticles />
    </>
  )
}