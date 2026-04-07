"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function LoadingScreen({ progress }) {
  const [internalProgress, setInternalProgress] = useState(0);
  const springProgress = useSpring(0, {
    stiffness: 40,
    damping: 15,
    mass: 1,
    restDelta: 0.001,
  });

  useEffect(() => {
    springProgress.set(progress);
  }, [progress, springProgress]);

  useEffect(() => {
    return springProgress.on("change", (latest) => {
      setInternalProgress(Math.floor(latest));
    });
  }, [springProgress]);

  const slideUp = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-99999999 flex flex-col justify-between bg-[#000000] text-[#E5E5E5]"
    >
      <div className="flex w-full justify-between p-8 text-xs font-mono tracking-widest uppercase opacity-40">
        <span>Lunarcent Engine</span>
        <span>Initialize sequence</span>
      </div>

      <div className="flex flex-1 items-center justify-center pointer-events-none">
        <div className="relative overflow-hidden w-full flex items-center justify-center">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="text-[20vw] md:text-[15vw] leading-none font-bold tracking-tighter"
          >
            {internalProgress < 10 ? `0${internalProgress}` : internalProgress} %
          </motion.h1>
        </div>
      </div>

      <div className="relative flex w-full justify-between p-8 text-xs font-mono tracking-widest uppercase opacity-40 pb-12">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${internalProgress}%` }}
          className="absolute bottom-0 left-0 h-[2px] bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          transition={{ duration: 0.1 }}
        />
        <span>WebGL Renderer</span>
        <span>{internalProgress === 100 ? "Ready" : "Constructing"}</span>
      </div>
    </motion.div>
  );
}
