"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@lunarcent.studio",
    href: "mailto:hello@lunarcent.studio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Usually within 24 hours",
    href: "#",
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
              <Badge className="mb-6">Get in Touch</Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Let&apos;s Start a{" "}
              <span className="bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Conversation
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project in mind? Want to explore possibilities? 
              We&apos;d love to hear from you. Every great partnership starts with hello.
            </motion.p>
          </section>

          {/* Contact Grid */}
          <section className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out through any of these channels. We&apos;re here to help 
                  bring your vision to life.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="group hover:border-amber-500/30 transition-colors">
                    <Link href={item.href}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <p className="font-medium group-hover:text-amber-500 transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>

              {/* Quick Schedule CTA */}
              <Card className="bg-amber-500/5 border-amber-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <h3 className="font-semibold">Prefer to talk in person?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a discovery call at your convenience. We&apos;re flexible 
                    with time zones and eager to meet you.
                  </p>
                  <Button asChild variant="outline" className="group border-amber-500/30">
                    <Link href="/schedule">
                      Schedule a Call
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company (Optional)
                      </label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* FAQ Preview */}
          <motion.section variants={itemVariants} className="text-center">
            <p className="text-muted-foreground">
              Looking for something else? Check out our{" "}
              <Link href="/work" className="text-amber-500 hover:underline">
                portfolio
              </Link>{" "}
              or{" "}
              <Link href="/schedule" className="text-amber-500 hover:underline">
                schedule a call
              </Link>{" "}
              directly.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
