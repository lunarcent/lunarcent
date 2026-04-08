"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Web", "Mobile", "SaaS", "E-Commerce"];

const projects = [
  {
    title: "Nebula Finance",
    category: "SaaS",
    description: "A comprehensive financial dashboard with real-time analytics, automated reporting, and bank-grade security protocols. Handles over $2B in transactions monthly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "PostgreSQL", "AWS", "GraphQL"],
    link: "#",
    featured: true,
  },
  {
    title: "Lumina Commerce",
    category: "E-Commerce",
    description: "Headless commerce solution handling 50K+ concurrent users with sub-second load times and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Node.js", "Redis", "Stripe"],
    link: "#",
    featured: true,
  },
  {
    title: "Crescent Health",
    category: "Web",
    description: "HIPAA-compliant telemedicine platform with video consultations, secure messaging, and electronic health records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React", "WebRTC", "Docker", "Kubernetes"],
    link: "#",
    featured: false,
  },
  {
    title: "Orbit Analytics",
    category: "SaaS",
    description: "Interactive 3D data visualization platform transforming complex datasets into intuitive, explorable experiences.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Three.js", "D3.js", "WebGL", "Python"],
    link: "#",
    featured: true,
  },
  {
    title: "Pulse Fitness",
    category: "Mobile",
    description: "AI-powered fitness companion with real-time form correction, personalized workouts, and social features.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    tags: ["React Native", "TensorFlow", "Firebase"],
    link: "#",
    featured: false,
  },
  {
    title: "Stellar Booking",
    category: "SaaS",
    description: "Enterprise resource scheduling platform with intelligent conflict resolution and team collaboration features.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    tags: ["Next.js", "Prisma", "Calendar API"],
    link: "#",
    featured: false,
  },
  {
    title: "Aurora Fashion",
    category: "E-Commerce",
    description: "Luxury fashion marketplace with virtual try-on, AR features, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    tags: ["Vue.js", "AR Kit", "Shopify Plus"],
    link: "#",
    featured: false,
  },
  {
    title: "Zenith Learning",
    category: "Web",
    description: "Interactive learning management system with gamification, progress tracking, and AI tutoring.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    tags: ["Next.js", "AI/ML", "PostgreSQL"],
    link: "#",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto container px-4 sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-16"
        >
          {/* Hero */}
          <section className="text-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <Badge className="mb-6">Our Work</Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Projects That{" "}
              <span className="bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Shine
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A curated collection of our finest work. Each project represents a 
              unique challenge overcome with creativity and technical excellence.
            </motion.p>
          </section>

          {/* Featured Projects */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-amber-500 border-amber-500/30">
                Featured
              </Badge>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-amber-500/10"
                >
                  <Link href={project.link} className="block">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
                      <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-amber-500 font-medium mb-2">
                        <span>{project.category}</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* All Projects with Filter */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-2xl font-semibold">All Projects</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm rounded-full transition-all ${
                      activeCategory === category
                        ? "bg-amber-500 text-black font-medium"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden h-full">
                    <Link href={project.link} className="block h-full">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-amber-500 font-medium">
                            {project.category}
                          </span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-amber-500 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section variants={itemVariants} className="text-center py-16">
            <Card className="bg-amber-500/5 border-amber-500/20">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Have a Project in Mind?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Let&apos;s create something extraordinary together. Every successful 
                  project starts with a conversation.
                </p>
                <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                  <Link href="/schedule">Start Your Project</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
