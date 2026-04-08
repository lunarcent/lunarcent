"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Target,
  Zap,
  Heart,
  Globe,
  ArrowRight,
  Moon,
  Code,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every line of code is purposeful. We engineer with intention, never bloat."
  },
  {
    icon: Zap,
    title: "Velocity",
    description: "Speed without sacrifice. We move fast while maintaining surgical accuracy."
  },
  {
    icon: Heart,
    title: "Craftsmanship",
    description: "We treat every project as art. Details matter, excellence is non-negotiable."
  },
  {
    icon: Globe,
    title: "Scale",
    description: "Built to grow. Your success shouldn't outpace your infrastructure."
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former tech lead at Fortune 500 companies. Obsessed with clean architecture.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sarah Kim",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for minimalist, functional aesthetics.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    bio: "Full-stack wizard. Builds systems that handle millions of users effortlessly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Strategist",
    bio: "Bridging business goals with technical execution. Your vision, realized.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
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

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto container px-4 sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-24"
        >
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <Badge className="mb-6">About Us</Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              We Are{" "}
              <span className="bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Lunarcent
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A collective of digital craftsmen building the future, one crescent at a time. 
              We don&apos;t just write code—we architect experiences.
            </motion.p>
          </section>

          {/* Story Section */}
          <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <Moon className="w-32 h-32 text-amber-500/20" />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4">
                  <Code className="w-8 h-8 text-amber-500" />
                  <Rocket className="w-8 h-8 text-amber-500" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="outline">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Born from a Passion for Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lunarcent Studios was founded on a simple belief: software should be 
                beautiful, functional, and built to last. Like the phases of the moon, 
                we guide our clients through every stage of their digital journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From humble beginnings as a duo of passionate developers, we&apos;ve grown 
                into a full-service digital studio. Yet our core remains unchanged—we 
                treat every project as our most important, every client as a partner.
              </p>
              <Button asChild className="group">
                <Link href="/work">
                  See Our Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-amber-500/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section variants={itemVariants} className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="mb-4">Our Values</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground">
                Our values are the gravitational force that keeps us aligned 
                and moving toward excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:border-amber-500/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section variants={itemVariants} className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="mb-4">The Crew</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the Architects
              </h2>
              <p className="text-muted-foreground">
                A stellar team united by passion, precision, and the pursuit of digital excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-amber-500 mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section variants={itemVariants} className="text-center">
            <Card className="bg-amber-500/5 border-amber-500/20">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Let&apos;s discuss how Lunarcent can bring your vision to life. 
                  Every great project starts with a conversation.
                </p>
                <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                  <Link href="/schedule">Schedule a Call</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
