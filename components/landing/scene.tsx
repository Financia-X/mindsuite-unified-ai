"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Environment } from "@react-three/drei"
import type * as THREE from "three"

const RotatingBox = () => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.5
      ref.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Box ref={ref} args={[2, 2, 2]} material-color="#00ffff" material-wireframe />
  )
}

export function Scene() {
  return (
    <>
      <Environment preset="night" />
      <RotatingBox />
    </>
  )
}