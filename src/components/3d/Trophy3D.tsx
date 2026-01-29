// src/components/3d/Trophy3D.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Trophy() {
  const group = useRef<THREE.Group>(null!);

  useFrame(() => {
    group.current.rotation.y += 0.006;
  });

  return (
    <group ref={group}>
      {/* CUP */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.9, 0.6, 0.8, 32]} />
        <meshStandardMaterial
          color="#facc15"
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>

      {/* STEM */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
        <meshStandardMaterial color="#eab308" />
      </mesh>

      {/* BASE */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 0.3, 24]} />
        <meshStandardMaterial color="#78350f" />
      </mesh>
    </group>
  );
}

export function Trophy3D() {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 40 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Trophy />
    </Canvas>
  );
}