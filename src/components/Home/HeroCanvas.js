import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const NEON_GREEN = '#B1FD03';
const LILA = '#a57cff';
const WHITE = '#ffffff';

function Torus({ position, args, color, speed, rotSpeed }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });
  return (
    <Float speed={speed} floatIntensity={0.6} rotationIntensity={0}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={args} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  );
}

function Icosa({ position, size, color, wireframe, speed, rotSpeed }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });
  return (
    <Float speed={speed} floatIntensity={0.8} rotationIntensity={0}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} wireframe={wireframe} roughness={0.3} metalness={0.5} />
      </mesh>
    </Float>
  );
}

function Octa({ position, size, color, speed, rotSpeed }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });
  return (
    <Float speed={speed} floatIntensity={1.0} rotationIntensity={0}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.8} />
      </mesh>
    </Float>
  );
}

function TorusKnot({ position, args, color, speed, rotSpeed }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });
  return (
    <Float speed={speed} floatIntensity={0.5} rotationIntensity={0}>
      <mesh ref={ref} position={position}>
        <torusKnotGeometry args={args} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.9} />
      </mesh>
    </Float>
  );
}

function WireSphere({ position, size, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshBasicMaterial color={color} wireframe opacity={0.15} transparent />
    </mesh>
  );
}

// Wraps all shapes — lerps its rotation toward the mouse each frame
function Scene({ mouse }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (mouse.current[0] * 0.3 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-mouse.current[1] * 0.2 - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={60} color={NEON_GREEN} />
      <pointLight position={[-6, -3, 3]} intensity={40} color={LILA} />
      <pointLight position={[0, 0, 6]} intensity={20} color={WHITE} />

      <group ref={groupRef}>
        <WireSphere position={[0, 0, -4]} size={5} color={LILA} />

        <Torus position={[-5, 1.5, -1]} args={[1.4, 0.3, 20, 80]} color={NEON_GREEN} speed={0.6} rotSpeed={[0.002, 0.003, 0.001]} />
        <Torus position={[5.5, -1, -2]} args={[1, 0.2, 16, 64]} color={LILA} speed={0.8} rotSpeed={[0.003, 0.001, 0.004]} />

        <Icosa position={[4, 3, -1]} size={0.9} color={WHITE} wireframe speed={1.2} rotSpeed={[0.004, 0.002, 0.003]} />
        <Icosa position={[-4.5, -2.5, 0]} size={0.7} color={NEON_GREEN} wireframe={false} speed={0.9} rotSpeed={[0.002, 0.005, 0.001]} />

        <Octa position={[3.5, 0.5, 0.5]} size={0.65} color={NEON_GREEN} speed={1.5} rotSpeed={[0.006, 0.003, 0.004]} />
        <Octa position={[-3, 2.8, -0.5]} size={0.5} color={LILA} speed={1.1} rotSpeed={[0.003, 0.006, 0.002]} />
        <Octa position={[2, -3, 0]} size={0.35} color={WHITE} speed={1.8} rotSpeed={[0.008, 0.004, 0.006]} />

        <TorusKnot position={[-1.5, -3, -1]} args={[0.55, 0.15, 80, 12, 2, 3]} color={LILA} speed={0.7} rotSpeed={[0.003, 0.004, 0.001]} />
        <TorusKnot position={[6, 2.5, -3]} args={[0.4, 0.1, 60, 10, 2, 3]} color={NEON_GREEN} speed={1.0} rotSpeed={[0.005, 0.002, 0.003]} />
      </group>
    </>
  );
}

export default function HeroCanvas() {
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const onMove = (e) => {
      // Normalize to -1 … +1
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        (e.clientY / window.innerHeight) * 2 - 1,
      ];
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 65 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
