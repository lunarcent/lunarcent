"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Compass,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  Sparkles,
  TestTube,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your vision, goals, and the unique challenges you face. Deep research and strategic planning form the foundation.",
    icon: Compass,
    details: ["Stakeholder interviews", "Market research", "Technical audit", "Strategy roadmap"],
  },
  {
    number: "02",
    title: "Design",
    description: "Our designers craft intuitive interfaces and experiences. Every pixel serves a purpose, every interaction tells your story.",
    icon: Palette,
    details: ["UX research", "Wireframing", "Visual design", "Prototyping"],
  },
  {
    number: "03",
    title: "Development",
    description: "Engineers bring designs to life with clean, scalable code. We build robust architectures that grow with your ambitions.",
    icon: Code,
    details: ["Frontend build", "Backend architecture", "API development", "Database design"],
  },
  {
    number: "04",
    title: "Testing",
    description: "Rigorous quality assurance ensures your product performs flawlessly. We test for function, security, and scale.",
    icon: TestTube,
    details: ["Unit testing", "Integration testing", "Performance audit", "Security review"],
  },
  {
    number: "05",
    title: "Launch",
    description: "Deployment is just the beginning. We orchestrate smooth launches and provide ongoing support for continued success.",
    icon: Rocket,
    details: ["Production deployment", "Monitoring setup", "Documentation", "Team training"],
  },
  {
    number: "06",
    title: "Optimize",
    description: "Post-launch, we analyze, iterate, and enhance. Your digital product evolves with your users and the market.",
    icon: Wrench,
    details: ["Analytics review", "User feedback", "Feature updates", "Performance tuning"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Process() {
  return (
    <section className="w-full py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto container px-4 sm:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">How We Work</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Our <span className="text-amber-500">Lunar</span> Process
            </h2>
            <p className="text-muted-foreground text-lg">
              Like the phases of the moon, our process follows a natural rhythm — 
              from new moon ideation to full moon launch and beyond.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting line - desktop only */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 h-full">
                    {/* Step number glow */}
                    <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      <span className="text-amber-500 font-bold text-sm">{step.number}</span>
                    </div>

                    <div className="pt-4">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 text-amber-500">
                        <step.icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-1">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <Sparkles className="w-3 h-3 text-amber-500/60" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Arrow connector - desktop only */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-amber-500/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom accent */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="w-12 h-px bg-amber-500/30" />
              <span className="font-mono">Iterative by design</span>
              <span className="w-12 h-px bg-amber-500/30" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
