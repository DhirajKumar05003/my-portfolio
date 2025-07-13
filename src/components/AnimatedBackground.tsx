"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Starfield({ count = 1500 }) {
  const mesh = useRef<THREE.Points | null>(null);
  // Generate random star positions and colors
  const { positions, colors, speeds } = useMemo(() => {
    const positions = [];
    const colors = [];
    const speeds = [];
    for (let i = 0; i < count; i++) {
      // Random position in a sphere
      const r = Math.random() * 80 + 20;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions.push(x, y, z);
      // Color: random blue/purple/white
      const color = new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.7, 0.7 + Math.random() * 0.3);
      colors.push(color.r, color.g, color.b);
      // Speed: random for each star
      speeds.push(0.0005 + Math.random() * 0.0015);
    }
    return { positions: new Float32Array(positions), colors: new Float32Array(colors), speeds };
  }, [count]);

  // Animate stars
  useFrame((state, delta) => {
    if (!mesh.current) return;
    const positionsArr = (mesh.current.geometry as THREE.BufferGeometry).attributes.position.array;
    for (let i = 0; i < count; i++) {
      // Move stars in a slow orbit
      const idx = i * 3;
      const angle = Math.atan2(positionsArr[idx + 1], positionsArr[idx]) + speeds[i] * delta * 60;
      const radius = Math.sqrt(positionsArr[idx] ** 2 + positionsArr[idx + 1] ** 2);
      positionsArr[idx] = radius * Math.cos(angle);
      positionsArr[idx + 1] = radius * Math.sin(angle);
    }
    (mesh.current.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.7} sizeAttenuation transparent opacity={0.85} />
    </points>
  );
}

export default function AnimatedBackground() {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 60], fov: 75 }}>
      <color attach="background" args={["#0a1026"]} />
      <Starfield count={900} />
    </Canvas>
  );
}