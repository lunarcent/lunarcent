"use client";

import React, { Suspense, useRef, useLayoutEffect, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  useGLTF, 
  Float, 
  Environment, 
  ContactShadows,
  PerspectiveCamera,
  useProgress
} from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function CrescentMoon({ url, scrollYProgress, isLight }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.metalness = 1.0;
        child.material.roughness = 0.15;
        child.material.color = new THREE.Color(isLight ? "#FFB800" : "#FFD700");
      }
    });
  }, [scene, isLight]);

  useFrame((state, delta) => {
    const t = performance.now() / 1000;
    const progress = scrollYProgress ? scrollYProgress.get() : 0;
    
    if (meshRef.current) {
      const yTarget = THREE.MathUtils.lerp(0, 0, progress);
      const zTarget = progress < 0.5 
        ? THREE.MathUtils.lerp(0, -5, progress * 2) 
        : THREE.MathUtils.lerp(-5, 4, (progress - 0.5) * 2);
      const xTarget = THREE.MathUtils.lerp(0, 3, progress);

      const rotXTarget = THREE.MathUtils.lerp(Math.PI / 2, Math.PI / 2, progress);
      const rotYTarget = THREE.MathUtils.lerp(0, 0, progress);
      const rotZTarget = THREE.MathUtils.lerp(6, Math.PI / 4, progress);

      meshRef.current.position.y = THREE.MathUtils.damp(meshRef.current.position.y, yTarget, 4, delta);
      meshRef.current.position.z = THREE.MathUtils.damp(meshRef.current.position.z, zTarget, 4, delta);
      meshRef.current.position.x = THREE.MathUtils.damp(meshRef.current.position.x, xTarget, 4, delta);
      
      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, rotXTarget, 4, delta);
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, rotYTarget + (Math.sin(t / 4) * 0.2), 4, delta);
      meshRef.current.rotation.z = THREE.MathUtils.damp(meshRef.current.rotation.z, rotZTarget + (Math.cos(t / 4) * 0.1), 4, delta);
    }
  });

  return <primitive ref={meshRef} object={scene} scale={2.5} />;
}

function OrbitingMoon({ url, scrollYProgress }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      const progress = scrollYProgress ? scrollYProgress.get() : 0;
      const rotYTarget = THREE.MathUtils.lerp(0, Math.PI * 2, progress);
      const rotXTarget = THREE.MathUtils.lerp(0, Math.PI / 2, progress);
      
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, rotYTarget, 4, delta);
      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, rotXTarget, 4, delta);
    }
  });

  return (
    <primitive 
      ref={meshRef} 
      object={scene} 
      scale={3} 
      position={[-7, 2, -500]} 
    />
  );
}

export default function MoonOrchestrator({ scrollYProgress, onLoadProgress }) {
  const { progress, active, loaded, total } = useProgress();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const directions = ["bg-linear-to-t", "bg-linear-to-r", "bg-linear-to-l", "bg-linear-to-r"];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (onLoadProgress) {
      if (loaded > 0 && loaded === total && !active) {
        onLoadProgress(100);
      } else {
        onLoadProgress(progress);
      }
    }
  }, [progress, active, loaded, total, onLoadProgress]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const updateGradientDirection = () => {
      const vhPassed = Math.floor(window.scrollY / window.innerHeight);
      const index = vhPassed % directions.length;
      setActiveIndex(index);
    };

    updateGradientDirection();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateGradientDirection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateGradientDirection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateGradientDirection);
    };
  }, [directions.length]);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none w-full h-full transition-colors duration-700 ${isLight ? "bg-slate-50" : "bg-[#020202]"}`}>
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        {directions.map((dir, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-screen ${dir} dark:from-black dark:via-black/80 dark:to-transparent transition-opacity duration-700`}
            style={{ opacity: activeIndex === idx ? 1 : 0 }}
          />
        ))}
      </div>
      
      <Canvas shadows={{ type: THREE.PCFShadowMap }} dpr={[1, 2]} className="pointer-events-auto">
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        
        <ambientLight intensity={isLight ? 0.9 : 0.5} color="#ffffff" />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={isLight ? 3 : 2} castShadow />
        <pointLight position={[-10, -10, -10]} color={isLight ? "#FFB800" : "#FF8C00"} intensity={isLight ? 1.5 : 1} />

        <Suspense fallback={null}>
          <OrbitingMoon url="/models/orbiting_moon/scene.gltf" scrollYProgress={scrollYProgress} />

          <Float speed={1.4} rotationIntensity={1} floatIntensity={0}>
            <CrescentMoon url="/models/crescent_moon.glb" scrollYProgress={scrollYProgress} isLight={isLight} />
          </Float>
          
          <Environment preset={isLight ? "apartment" : "city"} />
          
          <ContactShadows 
            position={[0, -5, 0]} 
            opacity={isLight ? 0.1 : 0.4} 
            color="#000000"
            scale={15} 
            blur={2.5} 
            far={10} 
          />
        </Suspense>
      </Canvas>
      <div className={`pointer-events-none absolute inset-0 z-20 transition-shadow duration-700 ${isLight ? "shadow-[inset_0_0_150px_rgba(255,255,255,0.5)]" : "shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"}`} />
    </div>
  );
}