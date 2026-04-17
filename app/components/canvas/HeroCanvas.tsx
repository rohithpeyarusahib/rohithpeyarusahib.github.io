/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Edges } from "@react-three/drei";
import * as THREE from "three";

function DataAvatar() {
  const groupRef = useRef();
  const innerRef = useRef();
  const ringRef = useRef();
  
  const { mouse, viewport } = useThree();

  useFrame((state, delta) => {
    // Smooth dynamic tracking based on viewport width
    if (groupRef.current) {
      const responsivenessOffsetX = viewport.width > 8 ? 3.5 : 0;
      const targetX = responsivenessOffsetX + (mouse.x * 1.5);
      const targetY = (mouse.y * 1.5);
      
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * Math.PI * 0.2, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * Math.PI * 0.2, 0.05);
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.4;
      innerRef.current.rotation.x += delta * 0.2;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.3;
      ringRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[3.5, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        
        {/* The Omni-Core Engine */}
        <group ref={innerRef}>
          {/* Dense Inner Brain */}
          <mesh>
             <icosahedronGeometry args={[1.2, 2]} />
             <meshStandardMaterial 
                color="#000000" 
                emissive="#ffffff" 
                emissiveIntensity={0.05}
                roughness={0.1} 
                metalness={1}
             />
             <Edges color="#ffffff" threshold={10} opacity={0.3} transparent scale={1.02} />
          </mesh>
          {/* Glowing Neural Nodes */}
          <mesh>
             <icosahedronGeometry args={[0.8, 1]} />
             <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} wireframe />
          </mesh>
        </group>

        {/* Volumetric Data Shell */}
        <group ref={ringRef}>
          {/* Accelerator Rings */}
          {[...Array(4)].map((_, i) => (
            <mesh key={`ring-${i}`} rotation={[Math.PI / (i + 1.5), Math.PI / (i + 1), 0]}>
              <torusGeometry args={[1.8 + i * 0.6, 0.005, 16, 150]} />
              <meshBasicMaterial color={i === 1 ? "#00ffff" : "#ffffff"} transparent opacity={0.4} side={THREE.DoubleSide} />
            </mesh>
          ))}
          
          {/* High Density Orbital Node Cloud */}
          {[...Array(80)].map((_, i) => {
            const phi = Math.acos(-1 + (2 * i) / 80);
            const theta = Math.sqrt(80 * Math.PI) * phi;
            const radius = 2.5 + Math.random() * 0.5;
            
            return (
              <mesh key={`node-${i}`} position={[
                  radius * Math.cos(theta) * Math.sin(phi), 
                  radius * Math.sin(theta) * Math.sin(phi), 
                  radius * Math.cos(phi)
              ]}>
                <boxGeometry args={[Math.random() > 0.8 ? 0.08 : 0.03, Math.random() > 0.8 ? 0.08 : 0.03, Math.random() > 0.8 ? 0.08 : 0.03]} />
                <meshBasicMaterial color="#ffffff" opacity={0.7} transparent />
              </mesh>
            );
          })}
        </group>

      </Float>
    </group>
  );
}

function DataGrid() {
  const pointsRef = useRef();
  
  // Create a structured massive grid mimicking infinite storage arrays
  const particles = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef} geometry={particles}>
      <pointsMaterial 
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
        
        <DataGrid />
        <Suspense fallback={null}>
          <DataAvatar />
        </Suspense>
      </Canvas>
    </div>
  );
}
