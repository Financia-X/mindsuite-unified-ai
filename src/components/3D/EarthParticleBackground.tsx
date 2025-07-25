import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Earth Particle Field Component
const EarthParticleField = ({ scrollProgress }: { scrollProgress: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  const particles = useMemo(() => {
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const radius = 25 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
      
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Ocean blue
        colors[i * 3] = 0.1 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else if (colorChoice < 0.7) {
        // Land green/brown
        colors[i * 3] = 0.2 + Math.random() * 0.4;
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.1 + Math.random() * 0.3;
      } else if (colorChoice < 0.85) {
        // City lights
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 0.3;
      } else {
        // Clouds
        colors[i * 3] = 0.9;
        colors[i * 3 + 1] = 0.9;
        colors[i * 3 + 2] = 1;
      }
    }
    
    return { positions, colors, originalPositions };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Earth rotation
    pointsRef.current.rotation.y = time * 0.02;
    pointsRef.current.rotation.x = Math.sin(time * 0.01) * 0.05;
    
    // Scroll-based expansion
    const expansionForce = scrollProgress * 25;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const originalPositions = particles.originalPositions;
    
    for (let i = 0; i < positions.length; i += 3) {
      const originalX = originalPositions[i];
      const originalY = originalPositions[i + 1];
      const originalZ = originalPositions[i + 2];
      
      const length = Math.sqrt(originalX * originalX + originalY * originalY + originalZ * originalZ);
      const dirX = originalX / length;
      const dirY = originalY / length;
      const dirZ = originalZ / length;
      
      positions[i] = originalX + dirX * expansionForce;
      positions[i + 1] = originalY + dirY * expansionForce;
      positions[i + 2] = originalZ + dirZ * expansionForce;
      
      // Subtle floating movement
      positions[i] += Math.sin(time * 0.3 + i * 0.01) * 0.2;
      positions[i + 1] += Math.cos(time * 0.2 + i * 0.01) * 0.15;
      positions[i + 2] += Math.sin(time * 0.25 + i * 0.01) * 0.18;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Material adjustments based on scroll
    if (materialRef.current) {
      materialRef.current.size = 0.8 + scrollProgress * 2;
      materialRef.current.opacity = Math.max(0.1, 0.7 - scrollProgress * 0.2);
    }
  });

  return (
    <Points ref={pointsRef} positions={particles.positions}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Orbital Rings Component
const OrbitalRings = ({ scrollProgress }: { scrollProgress: number }) => {
  const ringRefs = useRef<THREE.LineLoop[]>([]);
  
  const rings = useMemo(() => {
    const ringData = [];
    const numRings = 4;
    
    for (let ring = 0; ring < numRings; ring++) {
      const radius = 35 + ring * 8;
      const points = [];
      const segments = 64;
      
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle * 0.3) * 2, // Slight vertical variation
          Math.sin(angle) * radius
        ));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      ringData.push({ geometry, radius, index: ring });
    }
    
    return ringData;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    ringRefs.current.forEach((ring, index) => {
      if (ring) {
        ring.rotation.y = time * (0.05 + index * 0.02);
        ring.rotation.x = Math.sin(time * 0.02 + index) * 0.1;
        
        const scale = 1 + scrollProgress * 4;
        ring.scale.setScalar(scale);
        
        if (ring.material) {
          (ring.material as THREE.LineBasicMaterial).opacity = 
            Math.max(0.02, 0.15 - scrollProgress * 0.1);
        }
      }
    });
  });

  return (
    <>
      {rings.map((ringData, index) => (
        <lineLoop
          key={index}
          ref={(el) => {
            if (el) ringRefs.current[index] = el;
          }}
          geometry={ringData.geometry}
        >
          <lineBasicMaterial
            transparent
            color={new THREE.Color(0.3 + index * 0.1, 0.6, 1)}
            opacity={0.15}
          />
        </lineLoop>
      ))}
    </>
  );
};

// Main Earth Particle Background Component
const EarthParticleBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 80], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        
        <EarthParticleField scrollProgress={scrollProgress} />
        <OrbitalRings scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default EarthParticleBackground;