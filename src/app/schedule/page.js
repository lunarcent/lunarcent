"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video, Info } from "lucide-react";
import { useEffect, useState } from "react";

// Cal.com Embed Component
function CalEmbed() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Dynamic import of Cal.com embed
    import("@calcom/embed-react").then((mod) => {
      const Cal = mod.Cal;
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-[600px]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <Calendar className="w-12 h-12 text-amber-500/50" />
          <p className="text-muted-foreground">Loading calendar...</p>
        </div>
      </div>
    );
  }

  // Using a placeholder Cal component - replace with your actual Cal.com username
  return (
    <div className="w-full h-[700px] rounded-lg overflow-hidden">
      {/* Replace 'your-username' with your actual Cal.com username */}
      <iframe
        src="https://cal.com/lunarcent?embed=true"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; fullscreen"
        className="rounded-lg"
      />
    </div>
  );
}

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

export default function SchedulePage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto container px-4 sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          {/* Hero */}
          <section className="text-center max-w-3xl mx-auto">
            <motion.div variants={itemVariants}>
              <Badge className="mb-6">Book a Call</Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Schedule Your{" "}
              <span className="bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Discovery Call
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground"
            >
              Pick a time that works for you. We&apos;ll discuss your project, 
              explore possibilities, and outline the path forward.
            </motion.p>
          </section>

          {/* Info Cards */}
          <motion.section
            variants={itemVariants}
            className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto w-full"
          >
            <Card className="border-amber-500/10">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">30 Minutes</p>
                  <p className="text-sm text-muted-foreground">Initial call</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/10">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Video Call</p>
                  <p className="text-sm text-muted-foreground">Google Meet</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/10">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">No Commitment</p>
                  <p className="text-sm text-muted-foreground">Free consultation</p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Calendar Embed */}
          <motion.section variants={itemVariants}>
            <Card className="border-amber-500/10 overflow-hidden">
              <CardContent className="p-0">
                <CalEmbed />
              </CardContent>
            </Card>
          </motion.section>

          {/* Setup Notice */}
          <motion.section variants={itemVariants} className="text-center">
            <Card className="bg-amber-500/5 border-amber-500/20 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <Info className="w-6 h-6 text-amber-500 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Setup Required:</strong> To activate 
                  the booking system, replace the Cal.com iframe URL with your own. 
                  Sign up at{" "}
                  <a 
                    href="https://cal.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:underline"
                  >
                    cal.com
                  </a>{" "}
                  and update the iframe source in{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">
                    src/app/schedule/page.js
                  </code>
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
