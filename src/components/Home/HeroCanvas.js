import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, SoftShadows } from '@react-three/drei';
import weltkugelUrl from '../../assets/3DElements/Weltkugel_V01.glb';

const ORANGE = '#F05318';
const GREEN  = '#B1FD03';
const PINK   = '#F4A2DD';
const WHITE  = '#ffffff';

// Earth center in world space — shared by orbital math
const EC = [0, 0, -4];

const P = Math.PI;

// Orbital parameters — index matches SIZES below
const ORBITALS = [
  { radius: 6.8, speed: 0.12, inclination: P * 0.17, phase: 0 },
  { radius: 7.4, speed: 0.09, inclination: P * 0.38, phase: P / 2 },
  { radius: 6.2, speed: 0.17, inclination: P * 0.28, phase: P / 4 },
  { radius: 7.8, speed: 0.07, inclination: P * 0.08, phase: P * 0.75 },
  { radius: 6.0, speed: 0.20, inclination: P * 0.44, phase: P / 3 },
  { radius: 5.8, speed: 0.15, inclination: P * 0.22, phase: P * 0.83 },
  { radius: 8.2, speed: 0.06, inclination: P * 0.31, phase: P },
  { radius: 6.5, speed: 0.11, inclination: P * 0.40, phase: P * 1.17 },
  { radius: 7.0, speed: 0.13, inclination: P * 0.55, phase: P * 0.5 },
];

// Approximate bounding radius of each shape for collision threshold
const SIZES = [1.58, 1.10, 0.85, 0.70, 0.60, 0.50, 0.35, 0.63, 0.45];

function Torus({ args, color, rotSpeed }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} roughness={0.9} metalness={0.02} />
    </mesh>
  );
}

function Icosa({ size, color, wireframe, rotSpeed }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <icosahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color={color} wireframe={wireframe} roughness={0.88} metalness={0.01} />
    </mesh>
  );
}

function Octa({ size, color, rotSpeed }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color={color} roughness={0.92} metalness={0.0} />
    </mesh>
  );
}

function TorusKnot({ args, color, rotSpeed }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <torusKnotGeometry args={args} />
      <meshStandardMaterial color={color} roughness={0.85} metalness={0.03} />
    </mesh>
  );
}

function WeltkugelGlobe() {
  const lowPolyEarthRef = useRef();
  const { scene } = useGLTF(weltkugelUrl);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (lowPolyEarthRef.current) lowPolyEarthRef.current.rotation.y += delta * 0.05;
  });

  return (
    <group position={EC}>
      <group ref={lowPolyEarthRef} scale={[4, 4, 4]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

function EarthFallback({ size }) {
  return (
    <mesh position={EC}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="#1e3d6b" roughness={0.85} metalness={0.05} />
    </mesh>
  );
}

function Scene({ mouse }) {
  const groupRef = useRef();
  const slotRefs = useRef(ORBITALS.map(() => ({ current: null })));
  const phaseOffsets = useRef(ORBITALS.map(() => 0));

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (mouse.current[0] * 0.3 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-mouse.current[1] * 0.2 - groupRef.current.rotation.x) * 0.05;
    }

    const now = clock.getElapsedTime();

    // Compute positions from orbital math + accumulated phase offsets
    const pos = ORBITALS.map((o, i) => {
      const t = now * o.speed + o.phase + phaseOffsets.current[i];
      return [
        EC[0] + o.radius * Math.cos(t),
        EC[1] + o.radius * Math.sin(t) * Math.sin(o.inclination),
        EC[2] + o.radius * Math.sin(t) * Math.cos(o.inclination),
      ];
    });

    // Pairwise separation — push phase offsets apart when objects are too close
    for (let i = 0; i < ORBITALS.length; i++) {
      for (let j = i + 1; j < ORBITALS.length; j++) {
        const dx = pos[i][0] - pos[j][0];
        const dy = pos[i][1] - pos[j][1];
        const dz = pos[i][2] - pos[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const minDist = SIZES[i] + SIZES[j] + 0.5;
        if (dist < minDist) {
          const push = (minDist - dist) / minDist * 0.008;
          phaseOffsets.current[i] -= push;
          phaseOffsets.current[j] += push;
        }
      }
    }

    // Write final positions to slot groups
    slotRefs.current.forEach((ref, i) => {
      if (ref.current) ref.current.position.set(pos[i][0], pos[i][1], pos[i][2]);
    });
  });

  return (
    <>
      <SoftShadows size={20} samples={12} focus={0} />
      <ambientLight intensity={0.28} />
      <directionalLight
        castShadow
        position={[10, 6, 4]}
        intensity={1.6}
        color="#fff4dc"
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.5}
        shadow-camera-far={60}
        shadow-camera-left={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
        shadow-camera-bottom={-22}
      />
      <pointLight position={[8, 2, 2]} intensity={18} color={ORANGE} />
      <pointLight position={[-7, -3, 2]} intensity={10} color={GREEN} />
      <pointLight position={[0, 1, 7]} intensity={8} color={WHITE} />
      <pointLight position={[0, 4, -22]} intensity={200} color="#ffffff" distance={70} decay={0.8} />
      <pointLight position={[-6, -2, -18]} intensity={220} color="#ffd6c0" distance={60} decay={0.9} />

      <group ref={groupRef}>
        <Suspense fallback={<EarthFallback size={5} />}>
          <WeltkugelGlobe />
        </Suspense>

        <group ref={slotRefs.current[0]}><Torus args={[1.3, 0.28, 20, 80]} color={ORANGE} rotSpeed={[0.002, 0.003, 0.001]} /></group>
        <group ref={slotRefs.current[1]}><Torus args={[0.9, 0.2, 16, 64]} color={GREEN} rotSpeed={[0.003, 0.001, 0.003]} /></group>
        <group ref={slotRefs.current[2]}><Icosa size={0.85} color={ORANGE} wireframe rotSpeed={[0.003, 0.002, 0.002]} /></group>
        <group ref={slotRefs.current[3]}><Icosa size={0.7} color={PINK} wireframe={false} rotSpeed={[0.002, 0.004, 0.001]} /></group>
        <group ref={slotRefs.current[4]}><Octa size={0.6} color={ORANGE} rotSpeed={[0.004, 0.003, 0.003]} /></group>
        <group ref={slotRefs.current[5]}><Octa size={0.5} color={GREEN} rotSpeed={[0.003, 0.005, 0.002]} /></group>
        <group ref={slotRefs.current[6]}><Octa size={0.35} color={WHITE} rotSpeed={[0.005, 0.003, 0.004]} /></group>
        <group ref={slotRefs.current[7]}><TorusKnot args={[0.5, 0.13, 80, 12, 2, 3]} color={PINK} rotSpeed={[0.003, 0.003, 0.001]} /></group>
        <group ref={slotRefs.current[8]}><Octa size={0.45} color={ORANGE} rotSpeed={[0.002, 0.004, 0.003]} /></group>
      </group>
    </>
  );
}

useGLTF.preload(weltkugelUrl);

export default function HeroCanvas() {
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        (e.clientY / window.innerHeight) * 2 - 1,
      ];
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 65 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
