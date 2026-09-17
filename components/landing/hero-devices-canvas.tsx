"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/**
 * Dimensiones reales en metros (1 unidad = 1 m). Escala 1:1 entre si.
 * - Telefono 71 x 147 x 7.8 mm
 * - Tablet 10.9" 179 x 249 x 7 mm
 * - Laptop 14" tapa 312 x 200 x 7 mm, base 312 x 15 x 220 mm
 * - Monitor 24" 16:9 543 x 306 x 25 mm
 */

const BODY = "#1b2742";
const ALU = "#c3cad9";
const SCREEN_OFF = "#05080f";
const DARK = "#0b1220";

function ScreenGlass({
  width,
  height,
  position,
}: {
  width: number;
  height: number;
  position: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        color={SCREEN_OFF}
        roughness={0.32}
        metalness={0.55}
      />
    </mesh>
  );
}

function Monitor() {
  const w = 0.543;
  const h = 0.306;
  const t = 0.025;
  return (
    <group>
      {/* panel */}
      <RoundedBox
        args={[w, h, t]}
        radius={0.006}
        smoothness={3}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={BODY} roughness={0.5} metalness={0.35} />
      </RoundedBox>
      {/* pantalla apagada: solo vidrio oscuro, sin contenido */}
      <ScreenGlass width={w - 0.018} height={h - 0.018} position={[0, 0, t / 2 + 0.0006]} />
      {/* led de encendido (hardware, no contenido) */}
      <mesh position={[w / 2 - 0.03, -h / 2 + 0.006, t / 2 + 0.001]}>
        <circleGeometry args={[0.0022, 16]} />
        <meshStandardMaterial
          color={DARK}
          emissive="#f97316"
          emissiveIntensity={1.4}
        />
      </mesh>
      {/* cuello del soporte */}
      <mesh position={[0, -h / 2 - 0.045, -0.01]} castShadow>
        <boxGeometry args={[0.045, 0.09, 0.02]} />
        <meshStandardMaterial color={BODY} roughness={0.5} metalness={0.4} />
      </mesh>
      {/* pie */}
      <RoundedBox
        args={[0.22, 0.012, 0.15]}
        radius={0.004}
        smoothness={2}
        position={[0, -h / 2 - 0.095, 0.01]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={DARK} roughness={0.55} metalness={0.3} />
      </RoundedBox>
    </group>
  );
}

function Laptop() {
  const w = 0.312;
  const screenH = 0.2;
  const screenT = 0.007;
  const baseD = 0.22;
  const baseT = 0.015;
  return (
    <group>
      {/* base / teclado (hardware) */}
      <RoundedBox
        args={[w, baseT, baseD]}
        radius={0.004}
        smoothness={2}
        position={[0, baseT / 2, baseD / 2 - 0.004]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={ALU} roughness={0.45} metalness={0.55} />
      </RoundedBox>
      {/* hueco del teclado */}
      <mesh position={[0, baseT + 0.0004, baseD / 2 - 0.004]}>
        <planeGeometry args={[w - 0.03, baseD - 0.075]} />
        <meshStandardMaterial color="#2a3350" roughness={0.7} metalness={0.2} />
      </mesh>
      {/* trackpad */}
      <mesh position={[0, baseT + 0.0004, 0.155]}>
        <planeGeometry args={[0.1, 0.055]} />
        <meshStandardMaterial color="#9aa3b5" roughness={0.5} metalness={0.4} />
      </mesh>
      {/* tapa inclinada ~100deg */}
      <group position={[0, baseT, -0.004]} rotation={[-0.28, 0, 0]}>
        <RoundedBox
          args={[w, screenH, screenT]}
          radius={0.003}
          smoothness={2}
          position={[0, screenH / 2, 0]}
          castShadow
        >
          <meshStandardMaterial color={ALU} roughness={0.45} metalness={0.55} />
        </RoundedBox>
        <ScreenGlass
          width={w - 0.016}
          height={screenH - 0.016}
          position={[0, screenH / 2, screenT / 2 + 0.0006]}
        />
        {/* camara (hardware) */}
        <mesh position={[0, screenH - 0.008, screenT / 2 + 0.0008]}>
          <circleGeometry args={[0.0016, 12]} />
          <meshStandardMaterial color="#000000" roughness={0.3} metalness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

function Tablet() {
  const w = 0.179;
  const h = 0.249;
  const t = 0.007;
  return (
    <group>
      <RoundedBox
        args={[w, h, t]}
        radius={0.008}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={DARK} roughness={0.45} metalness={0.5} />
      </RoundedBox>
      <ScreenGlass width={w - 0.014} height={h - 0.014} position={[0, 0, t / 2 + 0.0006]} />
      <mesh position={[0, h / 2 - 0.006, t / 2 + 0.0008]}>
        <circleGeometry args={[0.0016, 12]} />
        <meshStandardMaterial color="#000000" roughness={0.3} metalness={0.6} />
      </mesh>
    </group>
  );
}

function Phone() {
  const w = 0.071;
  const h = 0.147;
  const t = 0.0078;
  return (
    <group>
      <RoundedBox
        args={[w, h, t]}
        radius={0.009}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={DARK} roughness={0.4} metalness={0.55} />
      </RoundedBox>
      <ScreenGlass width={w - 0.007} height={h - 0.007} position={[0, 0, t / 2 + 0.0006]} />
      {/* isla dinamica (hardware) */}
      <mesh position={[0, h / 2 - 0.009, t / 2 + 0.0008]}>
        <capsuleGeometry args={[0.0028, 0.012, 4, 12]} />
        <meshStandardMaterial color="#000000" roughness={0.35} metalness={0.5} />
      </mesh>
      {/* botones laterales (hardware) */}
      <mesh position={[-w / 2 - 0.0008, 0.03, 0]}>
        <boxGeometry args={[0.0016, 0.02, 0.004]} />
        <meshStandardMaterial color={BODY} roughness={0.5} metalness={0.5} />
      </mesh>
      <mesh position={[-w / 2 - 0.0008, 0.005, 0]}>
        <boxGeometry args={[0.0016, 0.012, 0.004]} />
        <meshStandardMaterial color={BODY} roughness={0.5} metalness={0.5} />
      </mesh>
      <mesh position={[w / 2 + 0.0008, 0.02, 0]}>
        <boxGeometry args={[0.0016, 0.028, 0.004]} />
        <meshStandardMaterial color={BODY} roughness={0.5} metalness={0.5} />
      </mesh>
    </group>
  );
}

function Rig() {
  const ref = useRef<THREE.Group>(null);
  const baseY = 0.02;
  useFrame((state) => {
    const g = ref.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    // rotacion leve de presentacion + flotacion suave
    g.rotation.y = -0.38 + Math.sin(t * 0.3) * 0.06;
    g.position.y = baseY + Math.sin(t * 0.7) * 0.008;
  });
  return (
    <group ref={ref} rotation={[0, -0.38, 0]} position={[0, baseY, 0]}>
      {/* monitor atras, elevado sobre su pie */}
      <group position={[0.02, 0.42, -0.24]} rotation={[0.06, -0.06, 0]}>
        <Monitor />
      </group>
      {/* laptop adelante-izquierda */}
      <group position={[-0.2, 0.0, 0.1]} rotation={[0, 0.35, 0]}>
        <Laptop />
      </group>
      {/* tablet centro-derecha, apoyada e inclinada */}
      <group
        position={[0.13, 0.135, 0.1]}
        rotation={[-0.22, -0.3, 0.06]}
      >
        <Tablet />
      </group>
      {/* celular frente-derecha, vertical */}
      <group position={[0.29, 0.085, 0.18]} rotation={[0, -0.35, 0.04]}>
        <Phone />
      </group>
    </group>
  );
}

function webglAvailable(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(
      c.getContext("webgl2") ??
      c.getContext("webgl") ??
      c.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export function HeroDevicesCanvas() {
  const supported = useMemo(
    () =>
      typeof window !== "undefined" &&
      typeof document !== "undefined" &&
      webglAvailable(),
    []
  );

  if (!supported) {
    return (
      <div
        role="img"
        aria-label="Computadora, laptop, tablet y celular"
        className="flex h-[320px] w-full items-end justify-center gap-4 sm:h-[380px]"
      >
        {["Monitor 24\u2033", "Laptop 14\u2033", "Tablet 10.9\u2033", "Celular 6.1\u2033"].map(
          (label) => (
            <div
              key={label}
              className="flex w-16 flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-2 text-center text-[10px] font-semibold text-white"
            >
              <span aria-hidden="true" className="block h-10 w-full rounded bg-black/60" />
              {label}
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div className="h-[320px] w-full sm:h-[400px] lg:h-[440px]">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0.62, 0.5, 1.12], fov: 34 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        shadows
      >
        <ambientLight intensity={0.75} />
        <directionalLight
          position={[1.4, 2.2, 1.6]}
          intensity={1.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-1.5, 0.9, -0.8]} intensity={0.45} />
        <Rig />
        <ContactShadows
          position={[0, -0.02, 0]}
          opacity={0.42}
          scale={2.2}
          blur={2.6}
          far={0.9}
          resolution={512}
          color="#081226"
        />
      </Canvas>
    </div>
  );
}
