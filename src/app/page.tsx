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
      title: "Built for how you build", 
      desc: "Supabase is a complete production-ready back-end that includes everything you need to ship full-featured apps." 
    },
    { 
      icon: Timer, 
      title: "From prototype to production", 
      desc: "Start with a weekend project and scale to millions of users. Supabase handles the complexity so you can focus on what matters - building great products." 
    },
    { 
      icon: CheckCircle2, 
      title: "Break through with our Vibe Coding Toolkit", 
      desc: "Tools, articles, and other resources to help you deploy your application to production with confidence." 
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
              The <span className="text-white font-semibold">Vibe Coder's</span> Dilemma
            </h1>
            
            <div className="space-y-2 text-lg text-gray-400 max-w-3xl leading-relaxed">
              <p>Your AI assistant nails the prototype. Users actually want it. Then reality hits.</p>
              <p>Authentication breaks. Databases crash. Deployment becomes a nightmare.</p>
              <p>You're not alone. Every vibe coder hits this wall.</p>
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
                <div className="space-y-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-gray-500" strokeWidth={1.5} />
                  </div>
                  <div className="h-px bg-gradient-to-r from-gray-800 to-transparent" />
                  <div>
                    <h3 className="font-medium text-xl mb-4 text-white">{feature.title}</h3>
                    <p className="text-base text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
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