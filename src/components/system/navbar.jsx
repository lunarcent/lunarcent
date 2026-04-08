"use client"
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-btn";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

const menuSlide = {
  initial: { x: "100%" },
  enter: {
    x: "0",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.5,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
}

const slide = {
  initial: { x: 80, opacity: 0 },
  enter: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.04 * i,
    },
  }),
  exit: (i) => ({
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.55, 0.06, 0.68, 0.19],
      delay: 0.02 * i,
    },
  }),
}

const scale = {
  open: {
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: 0.2,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
}

function CrescentCurve({ closeMenu }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const initialPath = `M100 0 L100 ${dimensions.height} Q-100 ${dimensions.height / 2} 100 0`
  const targetPath = `M100 0 L100 ${dimensions.height} Q100 ${dimensions.height / 2} 100 0`

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.6,
        ease: [0.55, 0.06, 0.68, 0.19],
      },
    },
  }

  return (
    <svg
      className="absolute top-0 -left-24 w-24 h-full fill-amber-50 dark:fill-zinc-900 stroke-none cursor-pointer"
      onClick={closeMenu}
    >
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
    </svg>
  )
}

function NavLink({
  data,
  isActive,
  setSelectedIndicator,
  closeMenu,
}) {
  const { title, href, index } = data

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-amber-400 rounded-full absolute -left-7"
      />
      <Link
        href={href}
        className="text-zinc-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 ease-out hover:translate-x-2 text-4xl sm:text-5xl font-light tracking-wide"
        onClick={closeMenu}
      >
        {title}
      </Link>
    </motion.div>
  )
}

function Nav({ closeMenu }) {
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [closeMenu])

  return (
    <motion.div
      ref={navRef}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full sm:w-[450px] bg-amber-50 dark:bg-zinc-900 fixed right-0 top-0 text-zinc-800 dark:text-white z-99999999999 shadow-2xl"
    >
      <div className="box-border h-full p-8 sm:p-12 md:p-24 flex flex-col justify-between">
        <div className="relative">
          {/* Crescent decoration */}
          <div className="absolute -top-8 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-600 dark:fill-amber-400">
              <path d="M50 0C22.4 0 0 22.4 0 50c0 20.7 12.6 38.5 30.6 46.2C13.5 87.3 0 69.9 0 50 0 22.4 22.4 0 50 0c19.9 0 37.3 13.5 46.2 30.6C88.5 12.6 70.7 0 50 0z"/>
            </svg>
          </div>
          
          <div 
            onMouseLeave={() => setSelectedIndicator(pathname)} 
            className="flex flex-col gap-4 sm:gap-6 mt-16 sm:mt-20"
          >
            <div className="text-amber-600 dark:text-amber-400 border-b border-amber-300 dark:border-amber-700 uppercase text-xs tracking-wider mb-6 sm:mb-10 pb-2 font-medium">
              Navigation
            </div>
            {navItems.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator === data.href}
                  setSelectedIndicator={setSelectedIndicator}
                  closeMenu={closeMenu}
                />
              )
            })}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="border-t border-amber-300 dark:border-amber-700 pt-6">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm italic">
              "Building the future, one phase at a time"
            </p>
          </div>
          
          {/* Social/Contact info */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <CrescentCurve closeMenu={closeMenu} />
    </motion.div>
  )
}

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef(null)

  const closeMenu = () => setIsActive(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isActive])

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 z-99999999999 h-16 sm:h-20 flex items-center transition-all duration-300`}
      >
        <div className="mx-auto container w-full px-4 sm:px-6 lg:px-8 h-full items-center">
          <nav className="flex justify-between items-center h-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex min-w-max items-center"
            >
              <Link href="/" className="flex items-center gap-x-2 group">
                <div className="relative">
                  <Image 
                    src={Logo} 
                    alt="Lunarcent Logo" 
                    className="h-6 sm:h-8 w-auto dark:invert transition-transform duration-300 group-hover:rotate-12" 
                    width={100} 
                    height={100} 
                    placeholder="blur" 
                  />
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-950 dark:text-zinc-100">
                  Lunarcent <span className="hidden sm:inline">Studios</span>
                </span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >              
              <div className={`grid grid-cols-[1fr_auto] gap-x-1 sm:gap-x-2 place-content-center p-1 sm:p-1.5 rounded-full transition-all duration-300 ${
                scrolled 
                  ? "bg-zinc-100 dark:bg-zinc-800" 
                  : "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm"
              } shadow-lg`}>
                <button
                  ref={menuButtonRef}
                  onClick={() => setIsActive(!isActive)}
                  className={`relative h-full px-3 sm:px-5 py-2 sm:py-2.5 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 overflow-hidden group ${
                    isActive 
                      ? "bg-amber-600 text-white" 
                      : "bg-amber-500 hover:bg-amber-600 text-white"
                  }`}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 sm:size-5 mr-1.5 sm:mr-2 relative z-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium relative z-10">Menu</span>
                </button>
                
                <ThemeToggleButton variant="circle-blur" start="top-right" />
              </div>
            </motion.div>
          </nav>
        </div>
      </motion.header>
      
      <AnimatePresence mode="wait">
        {isActive && <Nav closeMenu={closeMenu} />}
      </AnimatePresence>
    </>
  )
}