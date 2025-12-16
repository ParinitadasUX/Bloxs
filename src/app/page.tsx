"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Zap,
  Timer,
  CheckCircle2 } from
"lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('You\'re on the waitlist! We\'ll notify you when we launch.');
        setEmail("");
      } else {
        toast.error(data.error || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { 
      icon: Zap, 
      title: "Build with AI Power", 
      desc: "Leverage cutting-edge AI tools to prototype, develop, and ship production-ready applications faster than ever." 
    },
    { 
      icon: Timer, 
      title: "Ship in Record Time", 
      desc: "From idea to launch in days, not months. AI-powered development workflow that scales with your ambition." 
    },
    { 
      icon: CheckCircle2, 
      title: "Production-Ready Stack", 
      desc: "Pre-configured backend, database, auth, and deployment tools so you can focus on building features users love." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground relative overflow-hidden">
      <nav className="relative z-10 border-b border-border/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/bloxs-logo.png"
              alt="bloxs logo"
              width={32}
              height={32}
              className="w-8 h-8" />
            <span className="font-semibold text-lg">bloxs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#integration" className="hover:text-primary transition-colors">Integration</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <h1 className="text-5xl md:text-6xl font-medium mb-8 leading-tight text-gray-300">
              For <span className="text-white font-semibold">AI Builders</span> Who Ship
            </h1>
            
            <div className="space-y-2 text-lg text-gray-400 max-w-3xl leading-relaxed">
              <p>Build with AI. Ship to production. Scale with confidence.</p>
              <p>The complete toolkit for developers who use AI to build real products.</p>
              <p>No more cobbling together tools. Everything you need, ready to go.</p>
            </div>
          </motion.div>
        </section>

        <section className="px-6 py-24 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="p-8 bg-[#111] border-border/50 h-full">
                  <feature.icon className="w-12 h-12 mb-6 text-primary" strokeWidth={1.5} />
                  <h3 className="font-semibold text-xl mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/50 backdrop-blur-xl px-6 py-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/bloxs-logo.png"
              alt="bloxs logo"
              width={32}
              height={32}
              className="w-8 h-8" />
            <span className="font-semibold">bloxs</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}