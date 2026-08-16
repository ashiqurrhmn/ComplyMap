"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Icosahedron, Octahedron, Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

// Randomly placed floating geometric shapes
const FloatingShapes = ({ isDark, primaryColor, secondaryColor }) => {
  const shapes = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 - 2, // Push them slightly back
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.4 + 0.1,
      type: Math.random() > 0.5 ? 'icosa' : 'octa'
    }));
  }, []);

  return (
    <>
      {shapes.map((shape, i) => (
        <Float key={i} speed={2} rotationIntensity={1.5} floatIntensity={2}>
          {shape.type === 'icosa' ? (
            <Icosahedron args={[shape.scale, 0]} position={shape.position} rotation={shape.rotation}>
              <meshBasicMaterial 
                color={i % 2 === 0 ? primaryColor : secondaryColor} 
                wireframe 
                transparent 
                opacity={isDark ? 0.3 : 0.15} 
              />
            </Icosahedron>
          ) : (
            <Octahedron args={[shape.scale, 0]} position={shape.position} rotation={shape.rotation}>
              <meshBasicMaterial 
                color={i % 2 === 0 ? secondaryColor : primaryColor} 
                wireframe 
                transparent 
                opacity={isDark ? 0.3 : 0.15} 
              />
            </Octahedron>
          )}
        </Float>
      ))}
    </>
  );
};

// Abstract network lines connecting random nodes
const NetworkLines = ({ isDark, primaryColor }) => {
  const linePoints = useMemo(() => {
    const points = [];
    const r = 2.6; // Same radius as particles
    // Generate 30 random line segments connecting points on the sphere
    for (let i = 0; i < 30; i++) {
      const getPoint = () => {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        return new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );
      };
      // Start point
      const p1 = getPoint();
      // End point (slightly close to p1 to avoid cross-globe messy lines)
      const p2 = p1.clone().add(new THREE.Vector3((Math.random()-0.5)*1.5, (Math.random()-0.5)*1.5, (Math.random()-0.5)*1.5)).normalize().multiplyScalar(r);
      
      points.push([p1, p2]);
    }
    return points;
  }, []);

  return (
    <group>
      {linePoints.map((pts, i) => (
        <Line 
          key={i}
          points={pts}
          color={primaryColor}
          lineWidth={1}
          transparent
          opacity={isDark ? 0.2 : 0.08}
        />
      ))}
    </group>
  );
};

const Globe = () => {
  const meshRef = useRef();
  const { resolvedTheme } = useTheme();
  
  // Rotate the entire globe assembly continuously
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
  });

  const isDark = resolvedTheme === "dark";
  const primaryColor = isDark ? "#38bdf8" : "#006398"; // Teal/Blue
  const secondaryColor = isDark ? "#0d9488" : "#006398"; // Darker teal/blue

  // Generate 1500 particles for the outer globe layer
  const count = 1500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 2.6; // slightly larger than the wireframe

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);

  return (
    <group>
      {/* Background Floating Elements (not rotating with globe) */}
      <FloatingShapes isDark={isDark} primaryColor={primaryColor} secondaryColor={secondaryColor} />

      {/* Main Rotating Globe */}
      <group ref={meshRef}>
        {/* Inner Wireframe Sphere */}
        <Sphere args={[2.5, 32, 32]}>
          <meshBasicMaterial 
            color={isDark ? "#ffffff" : "#006398"} 
            wireframe 
            transparent 
            opacity={isDark ? 0.04 : 0.05} 
          />
        </Sphere>

        {/* Network Lines */}
        <NetworkLines isDark={isDark} primaryColor={primaryColor} />

        {/* Particle Nodes */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            color={primaryColor}
            transparent
            opacity={isDark ? 0.8 : 0.5}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* Inner Orbit Rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.2, 3.21, 64]} />
          <meshBasicMaterial color={secondaryColor} transparent opacity={isDark ? 0.3 : 0.15} side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[0, Math.PI / 4, Math.PI / 4]}>
          <ringGeometry args={[3.5, 3.51, 64]} />
          <meshBasicMaterial color={primaryColor} transparent opacity={isDark ? 0.2 : 0.1} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Massive Outer Ring */}
        <mesh rotation={[Math.PI / 6, -Math.PI / 4, 0]}>
          <ringGeometry args={[4.5, 4.505, 128]} />
          <meshBasicMaterial color={isDark ? "#ffffff" : primaryColor} transparent opacity={isDark ? 0.05 : 0.08} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Center the globe directly in the middle of the hero section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] md:w-[100%] md:h-[100%] opacity-70 dark:opacity-100 transition-opacity duration-700">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={1} />
          {/* Add a subtle fog to blend distant elements */}
          <fog attach="fog" args={["#07090e", 5, 15]} />
          <Globe />
        </Canvas>
      </div>
    </div>
  );
};

export default HeroCanvas;
