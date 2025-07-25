import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating geometric shapes component
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main central sphere */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.2, 32, 32]} position={[2, 0, -3]}>
          <meshStandardMaterial
            color="#6366f1"
            transparent
            opacity={0.6}
            emissive="#6366f1"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      {/* Secondary spheres */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.6, 32, 32]} position={[-3, 2, -2]}>
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.4}
            emissive="#8b5cf6"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.8, 32, 32]} position={[1, -2, -4]}>
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.5}
            emissive="#06b6d4"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      {/* Small accent spheres */}
      <Float speed={3} rotationIntensity={3} floatIntensity={0.5}>
        <Sphere args={[0.3, 16, 16]} position={[-1, 1, -1]}>
          <meshStandardMaterial
            color="#ec4899"
            transparent
            opacity={0.3}
            emissive="#ec4899"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={2.5} floatIntensity={0.8}>
        <Sphere args={[0.4, 16, 16]} position={[3, 1.5, -1.5]}>
          <meshStandardMaterial
            color="#10b981"
            transparent
            opacity={0.4}
            emissive="#10b981"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

// Camera controller for subtle movement
function CameraController() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
        
        {/* Stars background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={1000} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={0.5}
        />
        
        {/* Floating shapes */}
        <FloatingShapes />
        
        {/* Camera animation */}
        <CameraController />
      </Canvas>
    </div>
  );
};

export default HeroBackground3D;