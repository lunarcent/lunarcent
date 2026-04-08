"use client";

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useScroll, AnimatePresence } from 'framer-motion';
import { ServerIcon, CloudLightning, Moon, Shield } from "lucide-react";

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
      <main ref={containerRef} className="relative w-full h-[400vh] bg-transparent">
        <MoonOrchestrator scrollYProgress={scrollYProgress} onLoadProgress={setProgress} />
        <div className="relative z-50 w-full h-full pointer-events-none">
          {/* Hero Section */}
          <section className="w-full h-screen flex items-end justify-center relative">
            <div className='mx-auto flex container flex-col items-center gap-6 sm:gap-8 px-4 text-center sm:px-6 lg:px-8 mb-8 sm:mb-12 absolute pointer-events-auto'>
              <div className='bg-muted flex items-center gap-2 sm:gap-2.5 rounded-full border px-3 py-2'>
                <Badge>Crescent</Badge>
                <span className='text-muted-foreground text-xs sm:text-sm'>Solution for technology phases ahead.</span>
              </div>

              <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight font-bold text-balance'>
                We are <span className='bg-linear-to-bl from-amber-500 dark:via-amber-50 via-amber-900 to-amber-700 bg-clip-text text-transparent'>Code Knights.</span>
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

              <p className='text-muted-foreground text-sm sm:text-base max-w-2xl'>
                We are a team of developers who are passionate about building innovative and user-friendly software. <br className='hidden sm:block' />
                We specialize in web development, mobile development, and cloud computing.
              </p>

              <Button size='lg' asChild className="cursor-pointer!">
                <Link href='/schedule'>Schedule Discovery Call</Link>
              </Button>
            </div>
          </section>

          {/* Features Section - Fixed Grid */}
          <section className="w-full min-h-screen flex flex-col items-center justify-center relative py-16 sm:py-0">
            <div className='w-full container mx-auto px-4 text-center space-y-4 sm:space-y-6 mb-8 sm:mb-0'>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold">Softwares that.</h2>
              <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-4">Reimagine your ideas into reality with our latest high level expert software solutions.</p>
            </div>
            <div className="w-full container mx-auto px-4 text-left space-y-0 z-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-xl overflow-hidden">
              <div className='p-6 size-full bg-background border rounded-tl-xl sm:rounded-tl-xl rounded-tr-xl sm:rounded-tr-none border-white/10'>
                <div className='size-12 bg-linear-to-bl from-amber-400/40 to-amber-600/10 rounded-xl flex items-center justify-center'>
                  <ServerIcon className='size-6 dark:text-white/40 text-black/40' />
                </div>
                <h2 className='text-2xl font-bold mt-4'>High Performance</h2>
                <p className='text-muted-foreground mt-2 text-sm sm:text-base'>Scalable microservice architectures designed to handle immense traffic without a single drop in performance.</p>
              </div>
              <div className='p-6 size-full bg-transparent hidden sm:block'></div>
              <div className='p-6 size-full bg-transparent hidden sm:block'></div>
              <div className='p-6 size-full bg-background border sm:rounded-tr-xl rounded-none border-white/10'>
                <div className='size-12 bg-linear-to-bl from-amber-400/40 to-amber-600/10 rounded-xl flex items-center justify-center'>
                  <CloudLightning className='size-6 dark:text-white/40 text-black/40' />
                </div>
                <h2 className='text-2xl font-bold mt-4'>Lightning Fast</h2>
                <p className='text-muted-foreground mt-2 text-sm sm:text-base'>Razor-thin, hyper-optimized frontend interfaces. We strip away the bloat to leave only the brilliant, functional crescent.</p>
              </div>
              <div className='p-6 size-full bg-background border sm:rounded-bl-xl rounded-none border-white/10'>
                <div className='size-12 bg-linear-to-bl from-amber-400/40 to-amber-600/10 rounded-xl flex items-center justify-center'>
                  <Moon className='size-6 dark:text-white/40 text-black/40' />
                </div>
                <h2 className='text-2xl font-bold mt-4'>Work in phases</h2>
                <p className='text-muted-foreground mt-2 text-sm sm:text-base'>We work in phases to ensure that we deliver the best possible product that meets your needs.</p>
              </div>
              <div className='p-6 size-full bg-transparent hidden sm:block'></div>
              <div className='p-6 size-full bg-transparent hidden sm:block'></div>
              <div className='p-6 size-full bg-background border rounded-br-xl sm:rounded-br-xl rounded-bl-xl sm:rounded-bl-none border-white/10'>
                <div className='size-12 bg-linear-to-bl from-amber-400/40 to-amber-600/10 rounded-xl flex items-center justify-center'>
                  <Shield className='size-6 dark:text-white/40 text-black/40' />
                </div>
                <h2 className='text-2xl font-bold mt-4'>Advanced security</h2>
                <p className='text-muted-foreground mt-2 text-sm sm:text-base'>We build advanced security measures into our software to ensure that your data is safe and secure.</p>
              </div>
            </div>
          </section>

          {/* Our Work Section */}
          <section className='w-full min-h-screen flex justify-center items-center relative py-16'>
            <div className="w-full container mx-auto px-4 text-left space-y-6 z-50">
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold">Our Work</h2>
              <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl">We have worked with a variety of clients to build innovative and user-friendly software and we also own our own software products in the market.</p>
              <div className='max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                <div className='w-full border-background/90 border-2 p-6 bg-linear-to-r from-background to-background/50 rounded-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none md:rounded-br-none'>
                  <h3 className="text-xl sm:text-2xl font-bold">Our Products</h3>
                  <p className="text-muted-foreground text-sm sm:text-lg mt-2">We have built a variety of software products that are used by millions of people around the world.</p>
                </div>
                <div className='w-full border-background/90 border-2 p-6 bg-linear-to-r from-background to-background/50 rounded-xl md:rounded-tr-xl md:rounded-br-xl md:rounded-tl-none md:rounded-bl-none'>
                  <h3 className="text-xl sm:text-2xl font-bold">Our Clients</h3>
                  <p className="text-muted-foreground text-sm sm:text-lg mt-2">We have worked with a variety of clients to build innovative and user-friendly software.</p>
                </div>
              </div>
              <Button asChild size='lg' className="cursor-pointer!">
                <Link href="/work">View our work</Link>
              </Button>
            </div>
          </section>

          {/* Process Section */}
          <section className='w-full min-h-screen flex justify-center items-center relative py-16'>
            <div className="w-full container mx-auto px-4 text-right space-y-6 z-50">
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold">Our Process</h2>
              <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl ml-auto">Our process is simple and straightforward. We work with our clients to understand their needs and build innovative solutions that meet their requirements.</p>
              <div className='max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ml-auto'>
                <div className='w-full border-background/90 border-2 p-6 bg-linear-to-r from-background to-background/50 rounded-xl sm:rounded-tl-xl sm:rounded-none'>
                  <h3 className="text-xl sm:text-2xl font-bold">Discovery</h3>
                  <p className="text-muted-foreground text-sm sm:text-lg mt-2">We work with our clients to understand their needs and build innovative solutions that meet their requirements.</p>
                </div>
                <div className='w-full border-background/90 border-2 p-6 bg-linear-to-r from-background to-background/50 rounded-xl sm:rounded-tr-xl sm:rounded-none'>
                  <h3 className="text-xl sm:text-2xl font-bold">Design</h3>
                  <p className="text-muted-foreground text-sm sm:text-lg mt-2">We work with our clients to understand their needs and build innovative solutions that meet their requirements.</p>
                </div>
                <div className='w-full border-background/90 border-2 p-6 bg-linear-to-r from-background to-background/50 rounded-xl sm:rounded-bl-xl sm:rounded-none'>
                  <h3 className="text-xl sm:text-2xl font-bold">Development</h3>
                  <p className="text-muted-foreground text-sm sm:text-lg mt-2">We work with our clients to understand their needs and build innovative solutions that meet their requirements.</p>
                </div>
                <div className='w-full border-background/90 border-2 p-6 bg-linear-to-r from-background to-background/50 rounded-xl sm:rounded-br-xl sm:rounded-none'>
                  <h3 className="text-xl sm:text-2xl font-bold">Testing</h3>
                  <p className="text-muted-foreground text-sm sm:text-lg mt-2">We work with our clients to understand their needs and build innovative solutions that meet their requirements.</p>
                </div>
              </div>
              <Button asChild size='lg' className="cursor-pointer!">
                <Link href='/process'>View Our Process</Link>
              </Button>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}