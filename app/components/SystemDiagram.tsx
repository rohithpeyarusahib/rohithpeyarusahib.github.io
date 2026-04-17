/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Float, Edges, Trail } from "@react-three/drei";
import * as THREE from "three";

type FlowState = "IDLE" | "WRITE" | "READ" | "FAILOVER";

// Data Packets (Particles) system
function FlowParticles({ source, target, color, active }: { source: THREE.Vector3, target: THREE.Vector3, color: string, active: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [progress, setProgress] = useState(0);

  useFrame((_, delta) => {
    if (!active) {
      if (meshRef.current) meshRef.current.visible = false;
      return;
    }
    if (meshRef.current) {
      meshRef.current.visible = true;
      setProgress((p) => (p >= 1 ? 0 : p + delta * 1.5));
      meshRef.current.position.lerpVectors(source, target, progress);
    }
  });

  return (
    <Trail width={1.5} length={4} color={new THREE.Color(color)} attenuation={(t) => t * t}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  );
}

const NodeLabel = ({ text, subtext }: { text: string, subtext: string }) => (
  <Html position={[0, -1.8, 0]} center zIndexRange={[100, 0]}>
    <div className="bg-black/90 border border-white/20 px-3 py-2 text-center shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md min-w-[120px] select-none pointer-events-none group">
      <p className="text-white text-[9px] font-bold tracking-widest uppercase font-mono">{text}</p>
      <p className="text-white/40 text-[7px] tracking-widest mt-1 uppercase font-mono">{subtext}</p>
    </div>
  </Html>
);

const SciFiNode = ({ position, color, text, subtext, active, shape = "octahedron" }: props) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * (active ? 2 : 0.5);
      coreRef.current.rotation.x += delta * (active ? 1 : 0.2);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * (active ? 1 : 0.2);
    }
  });

  return (
    <group position={position}>
      <mesh ref={coreRef}>
        {shape === "octahedron" ? (
          <octahedronGeometry args={[0.6, 0]} />
        ) : shape === "cylinder" ? (
          <cylinderGeometry args={[0.5, 0.5, 1, 16]} />
        ) : (
          <boxGeometry args={[0.8, 0.8, 0.8]} />
        )}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 2 : 0.5}
          wireframe={shape !== "cylinder"}
          transparent
          opacity={0.8}
        />
        <Edges color="#ffffff" opacity={0.2} transparent />
      </mesh>
      {/* Orbital Ring Array */}
      <mesh ref={ringRef} rotation-x={Math.PI / 2}>
        <torusGeometry args={[1.2, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={active ? 0.8 : 0.2} />
      </mesh>
      <mesh rotation-x={Math.PI / 2}>
        <ringGeometry args={[1.4, 1.42, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
      <NodeLabel text={text} subtext={subtext} />
    </group>
  );
};

function ArchitectureScene({ flowState }: { flowState: FlowState }) {
  // Master Expanded Node Positions
  const posUser = new THREE.Vector3(0, 6, 0);
  const posLB = new THREE.Vector3(0, 3, 0);
  const posApp1 = new THREE.Vector3(-4, 0, 0);
  const posApp2 = new THREE.Vector3(4, 0, 0);
  const posRedis = new THREE.Vector3(6, -3, 0);

  const posDbMaster = new THREE.Vector3(-5, -6, 0);
  const posDbRep1 = new THREE.Vector3(0, -6, -2);
  const posDbRep2 = new THREE.Vector3(5, -6, -2);

  const posS3 = new THREE.Vector3(-8, -8, -4);

  return (
    <group position={[0, 0.5, 0]}>
      {/* Background Ambience point cloud */}
      <points>
        <bufferGeometry attach="geometry" {...new THREE.BufferGeometry().setFromPoints(Array.from({ length: 1000 }, () => new THREE.Vector3((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 15 - 5)))} />
        <pointsMaterial attach="material" color="#ffffff" size={0.05} transparent opacity={0.1} />
      </points>

      <Float speed={2} floatIntensity={0.5}>
        <SciFiNode position={posUser} color="#ffffff" text="Client Node" subtext="Secure Requests" active={flowState !== "IDLE"} shape="octahedron" />
      </Float>

      <SciFiNode position={posLB} color="#aaaaaa" text="HAProxy LB" subtext="Traffic Routing" active={flowState !== "IDLE"} shape="box" />

      <SciFiNode position={posApp1} color="#aaaaff" text="App Core 01" subtext="Kubernetes Pod" active={flowState !== "IDLE"} shape="box" />
      <SciFiNode position={posApp2} color="#aaaaff" text="App Core 02" subtext="Kubernetes Pod" active={flowState !== "IDLE"} shape="box" />

      <SciFiNode position={posRedis} color="#bb00ff" text="Redis Cluster" subtext="In-Memory Cache" active={flowState === "READ"} shape="octahedron" />

      <SciFiNode position={posDbMaster} color={flowState === "WRITE" ? "#ff4400" : (flowState === "FAILOVER" ? "#ff0000" : "#ff8800")} text="Primary DB" subtext="MySQL Write Protocol" active={flowState === "WRITE" || flowState === "FAILOVER"} shape="cylinder" />

      <SciFiNode position={posDbRep1} color={flowState === "FAILOVER" ? "#ff3333" : "#00ffff"} text="Replica 01" subtext="Async Read Node" active={flowState === "READ" || flowState === "FAILOVER"} shape="cylinder" />
      <SciFiNode position={posDbRep2} color="#00ffff" text="Replica 02" subtext="Async Read Node" active={flowState === "READ"} shape="cylinder" />

      <SciFiNode position={posS3} color="#44aa44" text="Cloud Storage" subtext="S3 Cold Backup" active={flowState === "WRITE" || flowState === "IDLE"} shape="box" />

      {/* Volumetric Holographic Connection Lines */}
      {[[posUser, posLB], [posLB, posApp1], [posLB, posApp2]].map((pts, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry" {...new THREE.BufferGeometry().setFromPoints(pts)} />
          <lineBasicMaterial attach="material" color="#ffffff" opacity={0.15} transparent />
        </line>
      ))}

      {/* High Volume Data Packets Stream */}
      {[posApp1, posApp2].map((app, i) => (
        <group key={i}>
          <FlowParticles source={posUser} target={posLB} color="#ffffff" active={flowState !== "IDLE"} />
          <FlowParticles source={posLB} target={app} color="#ffffff" active={flowState !== "IDLE"} />

          {/* Split writes and reads powerfully */}
          <FlowParticles source={app} target={posDbMaster} color="#ff4400" active={flowState === "WRITE"} />
          <FlowParticles source={app} target={posDbRep1} color="#00ffff" active={flowState === "READ"} />
          <FlowParticles source={app} target={posDbRep2} color="#00ffff" active={flowState === "READ"} />

          <FlowParticles source={app} target={posRedis} color="#bb00ff" active={flowState === "READ"} />
        </group>
      ))}
      <FlowParticles source={posDbMaster} target={posS3} color="#44aa44" active={flowState === "WRITE"} />
      <FlowParticles source={posDbMaster} target={posDbRep1} color="#ffffff" active={flowState === "WRITE"} />
      <FlowParticles source={posDbMaster} target={posDbRep2} color="#ffffff" active={flowState === "WRITE"} />
    </group>
  );
}

export default function SystemDiagram() {
  const [flowState, setFlowState] = useState<FlowState>("IDLE");

  return (
    <section id="architecture" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 font-mono relative z-10 w-full overflow-hidden">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase mix-blend-difference">
          Active <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white/30 tracking-widest italic">
            [Topology_Render]
          </span>
        </h2>

        {/* Interactive Controls */}
        <div className="flex flex-wrap gap-4 mt-8 md:mt-0 z-20 relative">
          <button
            onClick={() => setFlowState("WRITE")}
            className={`px-4 py-2 border text-xs tracking-widest uppercase transition-all ${flowState === "WRITE" ? "bg-[#ff4400]/20 border-[#ff4400] text-[#ff4400] shadow-[0_0_15px_rgba(255,68,0,0.5)]" : "border-white/20 text-white/50 hover:border-white/50"}`}
          >
            &gt;_ Write Flow
          </button>
          <button
            onClick={() => setFlowState("READ")}
            className={`px-4 py-2 border text-xs tracking-widest uppercase transition-all ${flowState === "READ" ? "bg-[#00ffff]/20 border-[#00ffff] text-[#00ffff] shadow-[0_0_15px_rgba(0,255,255,0.5)]" : "border-white/20 text-white/50 hover:border-white/50"}`}
          >
            &gt;_ Read Flow
          </button>
          <button
            onClick={() => setFlowState("FAILOVER")}
            className={`px-4 py-2 border text-xs tracking-widest uppercase transition-all ${flowState === "FAILOVER" ? "bg-[#ff0000]/20 border-[#ff0000] text-[#ff0000] shadow-[0_0_15px_rgba(255,0,0,0.5)] animate-pulse" : "border-white/20 text-white/50 hover:border-white/50"}`}
          >
            [X] Failover
          </button>
          <button
            onClick={() => setFlowState("IDLE")}
            className="px-4 py-2 border border-white/20 text-white/50 text-xs tracking-widest uppercase hover:text-white"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="w-full h-[600px] bg-black border border-white/20 relative rounded-none shadow-[0_0_30px_rgba(255,255,255,0.02)]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3vw_3vw] pointer-events-none" />

        <Canvas camera={{ position: [0, 4, 18], fov: 60 }} dpr={[1, 2]}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[0, 10, 5]} intensity={0.5} />
          <ArchitectureScene flowState={flowState} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 4} enablePan={false} />
        </Canvas>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 pointer-events-none">
          <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest text-white/50">
            <span className="w-2 h-2 rounded-full bg-[#ff4400] shadow-[0_0_5px_#ff4400]" /> Primary Write
          </div>
          <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest text-white/50">
            <span className="w-2 h-2 rounded-full bg-[#00ffff] shadow-[0_0_5px_#00ffff]" /> Async Read
          </div>
          <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest text-white/50">
            <span className="w-2 h-2 rounded-full bg-[#bb00ff] shadow-[0_0_5px_#bb00ff]" /> In-Memory Cache
          </div>
        </div>
      </div>
    </section>
  );
}
