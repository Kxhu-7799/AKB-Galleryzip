import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Mesh, SpotLight } from 'three';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Check WebGL support synchronously before attempting to create a context
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

function WebGLFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{
      background: 'radial-gradient(ellipse at 60% 40%, rgba(201,166,107,0.18) 0%, rgba(92,74,50,0.12) 35%, transparent 70%)'
    }}>
      <div style={{
        width: 160, height: 260,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at 50% 30%, #C9A66B 0%, #5C4A32 55%, transparent 80%)',
        boxShadow: '0 0 120px 30px rgba(201,166,107,0.12)',
        opacity: 0.35,
      }} />
    </div>
  );
}

function Sculpture() {
  const meshRef = useRef<Mesh>(null);
  
  // Rotate the sculpture slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Create lathe points for the vase/urn silhouette
  const points = useMemo(() => {
    const pts = [];
    // A classical urn profile
    pts.push(new THREE.Vector2(0, 0)); // base center
    pts.push(new THREE.Vector2(1.2, 0.2)); // base wide
    pts.push(new THREE.Vector2(1.1, 0.4)); // base indent
    pts.push(new THREE.Vector2(1.4, 0.8)); // lower belly
    pts.push(new THREE.Vector2(1.8, 2.0)); // widest point
    pts.push(new THREE.Vector2(1.2, 4.0)); // shoulder inward
    pts.push(new THREE.Vector2(0.6, 5.5)); // neck narrow
    pts.push(new THREE.Vector2(0.8, 6.2)); // neck flare out
    pts.push(new THREE.Vector2(1.1, 6.5)); // lip
    pts.push(new THREE.Vector2(1.0, 6.6)); // lip top
    pts.push(new THREE.Vector2(0.6, 6.4)); // lip inner
    return pts;
  }, []);

  // Simple procedural texture for subtle variation
  const normalMap = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    const imgData = ctx.createImageData(512, 512);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = Math.random() * 255;
      imgData.data[i] = v > 128 ? 128 : 128 + Math.random() * 30;
      imgData.data[i + 1] = v > 128 ? 128 : 128 + Math.random() * 30;
      imgData.data[i + 2] = 255;
      imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  }, []);

  return (
    <mesh ref={meshRef} position={[0, -3.3, 0]}>
      <latheGeometry args={[points, 64]} />
      <meshStandardMaterial 
        color="#7B5E2A" 
        metalness={0.85} 
        roughness={0.35} 
        normalMap={normalMap}
        normalScale={new THREE.Vector2(0.5, 0.5)}
      />
    </mesh>
  );
}

function CursorLight() {
  const lightRef = useRef<SpotLight>(null);
  const { viewport, mouse } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      // Map mouse coordinates to light position offset
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      
      // Smoothly interpolate position for track lighting effect
      lightRef.current.position.x += (x + 3 - lightRef.current.position.x) * 0.05;
      lightRef.current.position.y += (y + 5 - lightRef.current.position.y) * 0.05;
    }
  });

  return (
    <spotLight
      ref={lightRef}
      position={[3, 5, 4]}
      angle={0.6}
      penumbra={0.8}
      intensity={120}
      color="#FFDCA8"
      distance={20}
      castShadow
    />
  );
}

export function Hero3D() {
  const webGLSupported = isWebGLAvailable();

  return (
    <section className="relative w-full h-[100dvh] bg-background overflow-hidden flex flex-col justify-end">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        {webGLSupported ? (
          <Canvas camera={{ position: [0, 0, 12], fov: 40 }}>
            <ambientLight intensity={0.15} color="#ffffff" />
            <CursorLight />
            <directionalLight position={[-5, 2, -5]} intensity={1} color="#C9A66B" />
            <Sculpture />
          </Canvas>
        ) : (
          <WebGLFallback />
        )}
      </div>

      {/* Fade overlay at bottom so it blends with the next section */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pb-24 md:pb-32 flex flex-col items-center text-center pointer-events-none">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-[110px] font-serif tracking-[0.05em] leading-none text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Objects Made to Last
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl font-light text-foreground/70 uppercase tracking-[0.2em] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Bronze & Stone Atelier — Handcast in small editions
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <a href="#collections" className="px-10 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-[0.15em] text-sm hover:bg-white transition-colors duration-500">
            Explore Collection
          </a>
          <a href="#commission" className="px-10 py-4 border border-primary/40 text-primary hover:border-primary hover:bg-primary/5 transition-colors duration-500 font-medium uppercase tracking-[0.15em] text-sm">
            Commission a Piece
          </a>
        </motion.div>
      </div>
    </section>
  );
}