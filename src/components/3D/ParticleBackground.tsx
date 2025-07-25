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
  
  // Generate subtle floating particles
  const particles = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    const colors = new Float32Array(800 * 3);
    const scales = new Float32Array(800);
    
    for (let i = 0; i < 800; i++) {
      // Distribute particles in a wider area for subtle effect
      const radius = 15 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Soft white and blue glowing particles
      const colorChoice = Math.random();
      if (colorChoice < 0.7) {
        // Soft white particles
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 2] = 1;
      } else {
        // Soft blue particles
        colors[i * 3] = 0.4 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.7 + Math.random() * 0.2;
        colors[i * 3 + 2] = 1;
      }
      
      // Random scale for particle variation
      scales[i] = 0.5 + Math.random() * 1.5;
    }
    
    return { positions, colors, scales };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Gentle floating movement for AI-tech vibe
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;
    
    // Scroll-based particle expansion and camera movement
    const expansionForce = scrollProgress * 2;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const originalPositions = particles.positions;
    
    for (let i = 0; i < positions.length; i += 3) {
      const originalX = originalPositions[i];
      const originalY = originalPositions[i + 1];
      const originalZ = originalPositions[i + 2];
      
      // Calculate expansion direction from center
      const length = Math.sqrt(originalX * originalX + originalY * originalY + originalZ * originalZ);
      const dirX = originalX / length;
      const dirY = originalY / length;
      const dirZ = originalZ / length;
      
      // Apply smooth expansion effect on scroll
      positions[i] = originalX + dirX * expansionForce * 8;
      positions[i + 1] = originalY + dirY * expansionForce * 8 + Math.sin(time + i * 0.01) * 0.5;
      positions[i + 2] = originalZ + dirZ * expansionForce * 8;
      
      // Add gentle floating motion
      positions[i] += Math.sin(time * 0.5 + i * 0.1) * 0.3;
      positions[i + 1] += Math.cos(time * 0.3 + i * 0.1) * 0.2;
      positions[i + 2] += Math.sin(time * 0.4 + i * 0.1) * 0.25;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Adjust particle properties based on scroll
    if (materialRef.current) {
      materialRef.current.size = 1.5 + scrollProgress * 2;
      materialRef.current.opacity = Math.max(0.2, 0.8 - scrollProgress * 0.4);
    }
  });

  return (
    <Points ref={pointsRef} positions={particles.positions}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={1.5}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Subtle connection lines component
const ConnectionLines = ({ scrollProgress }: { scrollProgress: number }) => {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const lineGeometry = useMemo(() => {
    const positions = [];
    const colors = [];
    
    // Fewer, more subtle connection lines
    const numConnections = 80;
    for (let i = 0; i < numConnections; i++) {
      // Random start and end points with wider distribution
      const startRadius = 15 + Math.random() * 20;
      const endRadius = 15 + Math.random() * 20;
      
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
      
      // Soft blue/white colors for subtle lines
      const colorIntensity = 0.3 + Math.random() * 0.3;
      colors.push(colorIntensity, colorIntensity, 1, colorIntensity, colorIntensity, 1);
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Gentle rotation synchronized with particles
    linesRef.current.rotation.y = time * 0.05;
    linesRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;
    
    // Fade lines as scroll increases for non-obtrusive effect
    if (linesRef.current.material) {
      (linesRef.current.material as THREE.LineBasicMaterial).opacity = Math.max(0.05, 0.15 - scrollProgress * 0.1);
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial
        transparent
        vertexColors
        opacity={0.15}
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
        camera={{ position: [0, 0, 30], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ParticleField scrollProgress={scrollProgress} />
        <ConnectionLines scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;