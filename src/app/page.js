"use client";

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useScroll, AnimatePresence } from 'framer-motion';

const MoonOrchestrator = dynamic(() => import('@/components/sections/moon-orchestrator'), { ssr: false });
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LoadingScreen from '@/components/ui/loading-screen';

export default function page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); 
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen progress={progress} />}
      </AnimatePresence>
      <main ref={containerRef} className="relative w-full h-[300vh] bg-transparent">
        <MoonOrchestrator scrollYProgress={scrollYProgress} onLoadProgress={setProgress} />
      <div className="relative z-10 w-full h-full pointer-events-none">
      <div className='w-full h-screen bg-linear-to-t dark:from-black dark:via-black/80 dark:to-transparent absolute top-0 left-0' />
        <section className="w-full h-screen flex items-end justify-center relative">
          <div className='mx-auto flex container flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8 mb-12 absolute'>
            <div className='bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2'>
              <Badge>Crescent</Badge>
              <span className='text-muted-foreground'>Solution for technology phases ahead.</span>
            </div>

            <h1 className='text-3xl leading-[1.29167] font-bold text-balance md:text-7xl'>
              We are <span className='bg-linear-to-bl from-amber-500 via-amber-50 to-amber-700 bg-clip-text text-transparent'>Coding Knights.</span>
              <br />
              <span className='relative'>
                We build
                <svg
                  width='223'
                  height='12'
                  viewBox='0 0 223 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden'
                >
                  <path
                    d='M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551'
                    stroke='url(#paint0_linear_10365_68643)'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_10365_68643'
                      x1='18.8541'
                      y1='3.72033'
                      x2='42.6487'
                      y2='66.6308'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='var(--primary)' />
                      <stop offset='1' stopColor='var(--primary-foreground)' />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              softwares for the new world.
            </h1>

            <p className='text-muted-foreground'>
              We are a team of developers who are passionate about building innovative and user-friendly software. <br />
              We specialize in web development, mobile development, and cloud computing.
            </p>

            <Button size='lg' asChild className="cursor-pointer!">
              <Link href='#'>Schedule Discovery Call</Link>
            </Button>
          </div>
        </section>

        <section className="w-full h-screen flex items-center px-10 md:px-32">
          <div className="max-w-xl left-0 font-sans">
            <h2 className="text-5xl font-semibold text-white drop-shadow-lg mb-6">
              Ebb and Flow
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed opacity-90">
              As you descend, the celestial form reacts. It is not static,
              but intimately bound to your intention. The atmospheric undercurrent persists
              independently of your action.
            </p>
          </div>
        </section>

        <section className="w-full h-screen flex items-center justify-end px-10 md:px-32">
          <div className="max-w-xl text-right font-sans">
            <h2 className="text-5xl font-semibold text-white drop-shadow-lg mb-6">
              Perpetual Motion
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed opacity-90">
              The orchestrator retains total control. Positioning, scale,
              and state flow continuously through a highly performant frame loop, seamlessly
              bridging HTML and WebGL.
            </p>
          </div>
        </section>

      </div>
    </main>
    </>
  );
}