import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Earth Particle Field Component
const EarthParticleField = ({ scrollProgress }: { scrollProgress: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  const particles = useMemo(() => {
    const particleCount = 4000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    
    // Earth-like distribution with continents and oceans
    for (let i = 0; i < particleCount; i++) {
      const radius = 25 + Math.random() * 3; // Tighter radius for earth shape
      const theta = Math.random() * Math.PI * 2; // longitude
      const phi = Math.acos(2 * Math.random() - 1); // latitude
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
      
      // Create earth-like color distribution
      const latNorm = (phi / Math.PI); // 0 to 1 from north to south
      const lonNorm = (theta / (Math.PI * 2)); // 0 to 1 from 0 to 360 degrees
      
      // Simulate continents and oceans
      const isLand = (
        // Africa and Europe
        (lonNorm > 0.0 && lonNorm < 0.25 && latNorm > 0.2 && latNorm < 0.8) ||
        // Asia
        (lonNorm > 0.25 && lonNorm < 0.5 && latNorm > 0.1 && latNorm < 0.7) ||
        // Americas
        (lonNorm > 0.7 && lonNorm < 0.95 && latNorm > 0.15 && latNorm < 0.85) ||
        // Australia/Oceania
        (lonNorm > 0.5 && lonNorm < 0.7 && latNorm > 0.6 && latNorm < 0.8)
      );
      
      const isPolarIce = latNorm < 0.1 || latNorm > 0.9;
      const isDesert = (latNorm > 0.35 && latNorm < 0.65) && isLand && Math.random() > 0.6;
      const isCityLights = isLand && Math.random() > 0.85;
      const isClouds = Math.random() > 0.75;
      
      if (isClouds) {
        // White clouds
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 2] = 0.95 + Math.random() * 0.05;
      } else if (isPolarIce) {
        // Ice caps - bright white/blue
        colors[i * 3] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 2] = 0.95 + Math.random() * 0.05;
      } else if (isCityLights) {
        // City lights - warm yellow/orange
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.3 + Math.random() * 0.3;
      } else if (isLand) {
        if (isDesert) {
          // Desert - sandy colors
          colors[i * 3] = 0.8 + Math.random() * 0.2;
          colors[i * 3 + 1] = 0.6 + Math.random() * 0.3;
          colors[i * 3 + 2] = 0.2 + Math.random() * 0.3;
        } else {
          // Land - green/brown
          colors[i * 3] = 0.2 + Math.random() * 0.3;
          colors[i * 3 + 1] = 0.4 + Math.random() * 0.4;
          colors[i * 3 + 2] = 0.1 + Math.random() * 0.2;
        }
      } else {
        // Ocean - deep blue
        colors[i * 3] = 0.05 + Math.random() * 0.15;
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.6 + Math.random() * 0.3;
      }
    }
    
    return { positions, colors, originalPositions };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Slow earth rotation
    pointsRef.current.rotation.y = time * 0.008; // Slower rotation
    pointsRef.current.rotation.x = Math.sin(time * 0.005) * 0.02; // Gentle tilt
    
    // Enhanced scroll-based expansion
    const expansionForce = Math.pow(scrollProgress, 1.5) * 40; // More dramatic expansion
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
      
      // Apply expansion force
      positions[i] = originalX + dirX * expansionForce;
      positions[i + 1] = originalY + dirY * expansionForce;
      positions[i + 2] = originalZ + dirZ * expansionForce;
      
      // Add floating movement only when expanded
      if (scrollProgress > 0.1) {
        const floatIntensity = scrollProgress * 0.5;
        positions[i] += Math.sin(time * 0.2 + i * 0.01) * floatIntensity;
        positions[i + 1] += Math.cos(time * 0.15 + i * 0.01) * floatIntensity;
        positions[i + 2] += Math.sin(time * 0.18 + i * 0.01) * floatIntensity;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Material adjustments based on scroll
    if (materialRef.current) {
      materialRef.current.size = 1.2 + scrollProgress * 1.5; // Larger particles when expanded
      materialRef.current.opacity = Math.max(0.3, 0.9 - scrollProgress * 0.3);
    }
  });

  return (
    <Points ref={pointsRef} positions={particles.positions}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={1.2}
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
        ring.rotation.y = time * (0.02 + index * 0.01); // Slower rotation
        ring.rotation.x = Math.sin(time * 0.01 + index) * 0.05;
        
        // More dramatic scaling with scroll
        const scale = 1 + Math.pow(scrollProgress, 1.2) * 6;
        ring.scale.setScalar(scale);
        
        if (ring.material) {
          (ring.material as THREE.LineBasicMaterial).opacity = 
            Math.max(0.01, 0.2 - scrollProgress * 0.15);
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
            color={new THREE.Color(0.2 + index * 0.1, 0.4 + index * 0.1, 0.8)}
            opacity={0.2}
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
      const heroHeight = window.innerHeight; // Use viewport height for hero section
      const progress = Math.min(scrollTop / (heroHeight * 0.8), 1); // Start expanding at 80% of hero
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 60], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[100, 100, 100]} intensity={1.2} />
        <pointLight position={[-100, -100, -100]} intensity={0.6} color="#4a90e2" />
        
        <EarthParticleField scrollProgress={scrollProgress} />
        <OrbitalRings scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default EarthParticleBackground;