import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  scrollProgress: number;
}

const ParticleField = ({ scrollProgress }: ParticleFieldProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  // Generate particle positions in Earth shape
  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      // Create Earth-like distribution with more density at the surface
      const earthRadius = 10;
      const surfaceDensity = Math.random() < 0.7; // 70% on surface, 30% in atmosphere
      
      if (surfaceDensity) {
        // Surface particles - create landmass-like patterns
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const radius = earthRadius + (Math.random() - 0.5) * 2; // Slight surface variation
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      } else {
        // Atmospheric particles - sparse outer layer
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const radius = earthRadius + 2 + Math.random() * 8; // Atmosphere layer
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
      
      // Earth-like color variations
      const y = positions[i * 3 + 1]; // Y position for latitude-based coloring
      const colorChoice = Math.random();
      
      if (surfaceDensity) {
        // Surface colors - blue (oceans), green (land), white (ice caps)
        if (Math.abs(y) > earthRadius * 0.8) {
          // Ice caps - white/light blue
          colors[i * 3] = 0.9;
          colors[i * 3 + 1] = 0.95;
          colors[i * 3 + 2] = 1;
        } else if (colorChoice < 0.6) {
          // Oceans - deep blue
          colors[i * 3] = 0.1;
          colors[i * 3 + 1] = 0.3;
          colors[i * 3 + 2] = 0.8;
        } else {
          // Land - green/brown
          colors[i * 3] = 0.2;
          colors[i * 3 + 1] = 0.6;
          colors[i * 3 + 2] = 0.3;
        }
      } else {
        // Atmospheric particles - lighter blues and whites
        colors[i * 3] = 0.7;
        colors[i * 3 + 1] = 0.9;
        colors[i * 3 + 2] = 1;
      }
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotate the entire particle system
    pointsRef.current.rotation.y = time * 0.1;
    pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
    
    // Apply scroll-based explosion effect
    const explosionForce = scrollProgress * 3;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const originalPositions = particles.positions;
    
    for (let i = 0; i < positions.length; i += 3) {
      const originalX = originalPositions[i];
      const originalY = originalPositions[i + 1];
      const originalZ = originalPositions[i + 2];
      
      // Calculate explosion direction from center
      const length = Math.sqrt(originalX * originalX + originalY * originalY + originalZ * originalZ);
      const dirX = originalX / length;
      const dirY = originalY / length;
      const dirZ = originalZ / length;
      
      // Apply explosion effect
      positions[i] = originalX + dirX * explosionForce * 5;
      positions[i + 1] = originalY + dirY * explosionForce * 5;
      positions[i + 2] = originalZ + dirZ * explosionForce * 5;
      
      // Add some randomness to the explosion
      positions[i] += Math.sin(time + i) * explosionForce * 0.5;
      positions[i + 1] += Math.cos(time + i) * explosionForce * 0.5;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Adjust particle size and opacity based on scroll
    if (materialRef.current) {
      materialRef.current.size = 2 + scrollProgress * 3;
      materialRef.current.opacity = Math.max(0.3, 1 - scrollProgress * 0.7);
    }
  });

  return (
    <Points ref={pointsRef} positions={particles.positions}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const ConnectionLines = ({ scrollProgress }: { scrollProgress: number }) => {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const lineGeometry = useMemo(() => {
    const positions = [];
    const colors = [];
    
    // Create connecting lines between nearby particles (fewer for Earth effect)
    const numConnections = 150;
    for (let i = 0; i < numConnections; i++) {
      // Random start and end points
      const startRadius = 5 + Math.random() * 10;
      const endRadius = 5 + Math.random() * 10;
      
      const theta1 = Math.random() * Math.PI * 2;
      const phi1 = Math.acos(Math.random() * 2 - 1);
      const theta2 = Math.random() * Math.PI * 2;
      const phi2 = Math.acos(Math.random() * 2 - 1);
      
      // Start point
      positions.push(
        startRadius * Math.sin(phi1) * Math.cos(theta1),
        startRadius * Math.sin(phi1) * Math.sin(theta1),
        startRadius * Math.cos(phi1)
      );
      
      // End point
      positions.push(
        endRadius * Math.sin(phi2) * Math.cos(theta2),
        endRadius * Math.sin(phi2) * Math.sin(theta2),
        endRadius * Math.cos(phi2)
      );
      
      // Colors for the line (electric blue with transparency)
      colors.push(0.1, 0.8, 1, 0.1, 0.8, 1);
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotate lines with particles
    linesRef.current.rotation.y = time * 0.1;
    linesRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
    
    // Fade lines as scroll increases
    if (linesRef.current.material) {
      (linesRef.current.material as THREE.LineBasicMaterial).opacity = Math.max(0.1, 0.3 - scrollProgress * 0.2);
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial
        transparent
        vertexColors
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
};

interface ParticleBackgroundProps {
  scrollProgress: number;
}

const ParticleBackground = ({ scrollProgress }: ParticleBackgroundProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleField scrollProgress={scrollProgress} />
        <ConnectionLines scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;